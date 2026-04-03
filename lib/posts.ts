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
  if (!fs.existsSync(dir)) return [];
  
  let results: string[] = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat && stat.isDirectory()) { 
      results = results.concat(getPostFiles(filePath));
    } else { 
      if (filePath.endsWith('.mdx')) {
        results.push(filePath);
      }
    }
  });
  return results;
}

export function getAllPosts(): Post[] {
  const files = getPostFiles(postsDirectory);
  
  const posts = files.map((filePath) => {
    try {
      const fileContents = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContents);
      
      const relativePath = path.relative(postsDirectory, filePath);
      const parts = relativePath.split(path.sep);
      
      if (parts.length < 2) return null;

      const category = parts[0];
      const slug = parts[1].replace(/\.mdx$/, '');

      return {
        slug,
        category,
        title: data.title || 'Untitled',
        date: data.date || '2000-01-01',
        excerpt: data.excerpt || '',
        coverImage: data.coverImage || '',
        rating: data.rating,
        author: data.author,
        series: data.series,
        seriesOrder: data.seriesOrder,
        content,
      };
    } catch (e) {
      console.error(`Error parsing ${filePath}:`, e);
      return null;
    }
  }).filter(post => post !== null) as Post[];

  return posts.sort((a, b) => (new Date(b.date).getTime() - new Date(a.date).getTime()));
}

export function getPostsByCategory(category: string): Post[] {
  return getAllPosts().filter((post) => post.category === category);
}

export function getPostBySlug(category: string, slug: string): Post | undefined {
  if (!category || !slug) return undefined;
  
  // Find all posts and look for the one with matching category and slug
  // This is safer on case-sensitive file systems like Vercel (Linux)
  const allPosts = getAllPosts();
  return allPosts.find(post => 
    post.category.toLowerCase() === category.toLowerCase() && 
    post.slug.toLowerCase() === slug.toLowerCase()
  );
}

export function getFeaturedPost(): Post | undefined {
    const allPosts = getAllPosts();
    // Return the latest post that is NOT a book review
    return allPosts.find(post => post.category !== 'books');
}
