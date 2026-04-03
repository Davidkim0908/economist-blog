import os
import re
import subprocess

# Paths
posts_dir = "economist-blog/posts/digital-transformation"
images_dir = "economist-blog/public/images"
urls_file = "valid_urls.txt"

# Read URLs
with open(urls_file, "r") as f:
    urls = [line.strip() for line in f.readlines() if line.strip()]

# Get MDX files with seriesOrder
mdx_files = []
for filename in os.listdir(posts_dir):
    if filename.endswith(".mdx"):
        filepath = os.path.join(posts_dir, filename)
        with open(filepath, "r") as f:
            content = f.read()
            match = re.search(r"seriesOrder:\s*(\d+)", content)
            if match:
                order = int(match.group(1))
                if 1 <= order <= 26:
                    mdx_files.append((order, filepath, filename))

# Sort by order
mdx_files.sort(key=lambda x: x[0])

# Process
for i, (order, filepath, filename) in enumerate(mdx_files):
    if i >= len(urls):
        print(f"Not enough URLs for post {order}")
        break
    
    url = urls[i]
    new_image_name = f"4th-industrial-{order:02d}.jpg"
    new_image_path = os.path.join(images_dir, new_image_name)
    
    # 1. Download Image
    print(f"Downloading image for Post {order} to {new_image_name}...")
    subprocess.run(["curl", "-L", "-s", "-o", new_image_path, url], check=True)
    
    # 2. Update MDX
    with open(filepath, "r") as f:
        content = f.read()
    
    # Replace coverImage line. Handles both .png and potential existing .jpg or other paths
    # Regex looks for 'coverImage: "..."'
    new_content = re.sub(r'coverImage: ".*?"', f'coverImage: "/images/{new_image_name}"', content)
    
    with open(filepath, "w") as f:
        f.write(new_content)
        
    # 3. Delete old PNG if it exists (and is different from new name)
    # The old images were likely "4th-industrial-XX.png" or similar.
    # We'll try to delete the .png version.
    old_image_name_png = f"4th-industrial-{order:02d}.png"
    old_image_path_png = os.path.join(images_dir, old_image_name_png)
    if os.path.exists(old_image_path_png):
        os.remove(old_image_path_png)
        print(f"Deleted old image: {old_image_name_png}")

print("Batch update complete.")
