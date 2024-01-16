interface SlugPageProps {
  params: { slug: string };
}

const SlugPage = ({ params }: SlugPageProps) => (
  <main>
    <h1>Some random dynamic page {params.slug}</h1>
  </main>
);

export default SlugPage;
