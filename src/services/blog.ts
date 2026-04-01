/* eslint-disable @typescript-eslint/no-explicit-any */
import { BlogItemProps } from '@/common/types/blog';

type BlogParamsProps = {
  page?: number;
  per_page?: number;
  categories?: number | undefined;
  search?: string;
};

interface BlogDetailResponseProps {
  status: number;
  data: any;
}

const BLOG_URL = process.env.BLOG_API_URL as string;

const handleFetchError = (error: unknown): { status: number; data: any } => {
  if (error instanceof Error) {
    return { status: 500, data: { message: error.message } };
  }
  return { status: 500, data: { message: 'Internal Server Error' } };
};

const extractData = (
  data: unknown,
  headers: Headers,
  params: { page: number; per_page: number; categories?: number },
): {
  posts: BlogItemProps[];
  page: number;
  per_page: number;
  total_pages: number;
  total_posts: number;
  categories: number | undefined;
} => {
  return {
    posts: data as BlogItemProps[],
    page: params.page,
    per_page: params.per_page,
    total_pages: Number(headers.get('x-wp-totalpages')) || 0,
    total_posts: Number(headers.get('x-wp-total')) || 0,
    categories: params.categories,
  };
};

export const getBlogList = async ({
  page = 1,
  per_page = 6,
  categories,
  search,
}: BlogParamsProps): Promise<{ status: number; data: any }> => {
  try {
    const searchParams = new URLSearchParams();
    searchParams.set('page', String(page));
    searchParams.set('per_page', String(per_page));
    if (categories !== undefined) {
      searchParams.set('categories', String(categories));
    }
    if (search) {
      searchParams.set('search', search);
    }

    const response = await fetch(`${BLOG_URL}posts?${searchParams.toString()}`);

    if (!response.ok) {
      let errorData: unknown;
      try {
        errorData = await response.json();
      } catch {
        errorData = {};
      }
      return { status: response.status, data: errorData };
    }

    const data = await response.json();
    return {
      status: response.status,
      data: extractData(data, response.headers, { page, per_page, categories }),
    };
  } catch (error) {
    return handleFetchError(error);
  }
};

export const getBlogDetail = async (
  id: number,
): Promise<BlogDetailResponseProps> => {
  try {
    const response = await fetch(`${BLOG_URL}posts/${id}`);

    if (!response.ok) {
      let errorData: unknown;
      try {
        errorData = await response.json();
      } catch {
        errorData = {};
      }
      return { status: response.status, data: errorData };
    }

    const data = await response.json();
    return { status: response.status, data };
  } catch (error) {
    return handleFetchError(error);
  }
};
