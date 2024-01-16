import Link from "next/link"

const BlogPages = ()=>(<main>
  <h1 className="text-3xl font-semibold">Food Blogs</h1>
  <p><Link href="/blogs/1">Blog 1</Link></p>
  <p><Link href="/blogs/2">Blog 2</Link></p>
</main>)

export default BlogPages