import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const BLOG_DIR = path.join(process.cwd(), 'src/content/blog');

export type BlogPostMeta = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image?: string;
  tags?: string[];
};

export function getBlogSlugs(): string[] {
  try {
    const files = fs.readdirSync(BLOG_DIR);
    return files.map(filename => filename.replace(/\.mdx$/, ''));
  } catch (error) {
    console.error('Error getting blog slugs:', error);
    return [];
  }
}

export function getBlogPostMetadata(slug: string): BlogPostMeta | null {
  try {
    const filePath = path.join(BLOG_DIR, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data } = matter(fileContent);
    
    return {
      slug,
      title: data.title || 'Untitled Post',
      date: data.date || new Date().toISOString(),
      description: data.description || '',
      image: data.image,
      tags: data.tags,
    };
  } catch (error) {
    console.error(`Error getting metadata for ${slug}:`, error);
    return null;
  }
}

export function getAllBlogPosts(): BlogPostMeta[] {
  const slugs = getBlogSlugs();
  const posts = slugs
    .map(slug => getBlogPostMetadata(slug))
    .filter((post): post is BlogPostMeta => post !== null)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return posts;
}
