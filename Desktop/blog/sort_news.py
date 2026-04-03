import re

file_path = 'economist-blog/app/news/page.tsx'

with open(file_path, 'r') as f:
    content = f.read()

# Capture the content inside `const newsItems = [ ... ];`
# Using non-greedy match across lines
start_marker = "const newsItems = ["
end_marker = "];"

start_index = content.find(start_marker)
if start_index == -1:
    print("Start marker not found")
    exit(1)

end_index = content.find(end_marker, start_index)
if end_index == -1:
    print("End marker not found")
    exit(1)

items_content = content[start_index + len(start_marker):end_index].strip()

# Split by objects. A simple way is to split by `},`
# Since the format is consistent in this file.
raw_items = items_content.split('},')

clean_items = []
for item in raw_items:
    item = item.strip()
    if not item: continue
    
    # Ensure it starts with {
    if not item.startswith('{'):
        item = '{' + item.lstrip(',') # remove leading comma if any
        
    # Ensure it ends with }
    if not item.endswith('}'):
        item = item + '}'
        
    clean_items.append(item)

# Sort
def get_date(item_str):
    match = re.search(r'date: "(\d{4}\.\d{2}\.\d{2})"', item_str)
    return match.group(1) if match else "0000.00.00"

sorted_items = sorted(clean_items, key=get_date, reverse=True)

# Rebuild
new_items_content = ",\n    ".join(sorted_items)
new_file_content = content[:start_index + len(start_marker)] + "\n    " + new_items_content + "\n  " + content[end_index:]

with open(file_path, 'w') as f:
    f.write(new_file_content)

print(f"Sorted {len(sorted_items)} items.")
