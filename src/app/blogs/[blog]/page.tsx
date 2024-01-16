const BlogPage = ({ params }: { params: { blog: string } }) => {
  return (
    <main>
      <h1>Blog Page number {params.blog}</h1>
    </main>
  );
};

export default BlogPage;
