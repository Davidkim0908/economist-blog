import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export type Post = {
  slug: string;
  category: string;
  title: string;
  date: string;
  excerpt: string;
  coverImage?: string;
  content: string;
  rating?: number; // for books
  author?: string; // for books
  series?: string; // for series grouping
  seriesOrder?: number; // for ordering within a series
};

function getPostFiles(dir: string): string[] {
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) { 
      /* Recurse into a subdirectory */
      results = results.concat(getPostFiles(file));
    } else { 
      /* Is a file */
      if (file.endsWith('.mdx')) {
        results.push(file);
      }
    }
  });
  return results;
}

export function getAllPosts(): Post[] {
  const files = getPostFiles(postsDirectory);
  
  const posts = files.map((filePath) => {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    // filePath is like /Users/.../posts/mobility/slug.mdx
    // we want category = mobility, slug = slug
    const relativePath = path.relative(postsDirectory, filePath);
    const parts = relativePath.split(path.sep);
    
    if (parts.length < 2) {
        // Skip files directly in posts root or handle them differently
        console.warn(`Skipping file not in category subdirectory: ${relativePath}`);
        return null;
    }

    const category = parts[0];
    const slug = parts[1].replace(/\.mdx$/, '');

    return {
      slug,
      category,
      title: data.title,
      date: data.date,
      excerpt: data.excerpt,
      coverImage: data.coverImage,
      rating: data.rating,
      author: data.author,
      series: data.series,
      seriesOrder: data.seriesOrder,
      content,
    };
  }).filter(post => post !== null) as Post[];

  return posts.sort((a, b) => (new Date(a.date) > new Date(b.date) ? -1 : 1));
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getPostBySlug(category: string, slug: string): Post | undefined {
  if (!category || !slug) {
      console.error(`getPostBySlug called with missing args. category: ${category}, slug: ${slug}`);
      return undefined;
  }
  const fullPath = path.join(postsDirectory, category, `${slug}.mdx`);
  if (!fs.existsSync(fullPath)) {
      console.warn(`File not found: ${fullPath}`);
      return undefined;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    slug,
    category,
    title: data.title,
    date: data.date,
    excerpt: data.excerpt,
    coverImage: data.coverImage,
    rating: data.rating,
    author: data.author,
    content,
  };
}

export function getFeaturedPost(): Post | undefined {
    const allPosts = getAllPosts();
    // Return the latest post that is NOT a book review
    return allPosts.find(post => post.category !== 'books');
}
