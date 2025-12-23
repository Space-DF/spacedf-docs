import Link from 'next/link'

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'Release v2025.12.19',
      date: '2025-12-19',
      type: 'Initial Release',
      author: 'SpaceDF Team',
      excerpt: 'This is the initial release of the SpaceDF platform - a comprehensive IoT platform for LoRaWAN device management and location tracking.',
      slug: 'v2025.12.19'
    }
  ]

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '2rem' }}>
        SpaceDF Blog
      </h1>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
        {blogPosts.map((post) => (
          <article key={post.slug} style={{ 
            border: '1px solid #e2e8f0', 
            borderRadius: '8px', 
            padding: '1.5rem',
            backgroundColor: 'var(--nextra-bg)'
          }}>
            <div style={{ marginBottom: '1rem' }}>
              <Link href={`/blog/${post.slug}`} style={{ 
                textDecoration: 'none', 
                color: '#B7A1F7',
                fontSize: '1.5rem',
                fontWeight: '600'
              }}>
                {post.title}
              </Link>
            </div>
            
            <div style={{ 
              display: 'flex', 
              gap: '1rem', 
              marginBottom: '1rem',
              fontSize: '0.875rem',
              color: '#64748b'
            }}>
              <span>{new Date(post.date).toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric' 
              })}</span>
              <span>•</span>
              <span>{post.type}</span>
              <span>•</span>
              <span>by {post.author}</span>
            </div>
            
            <p style={{ marginBottom: '1rem', lineHeight: '1.6' }}>
              {post.excerpt}
            </p>
            
            <Link href={`/blog/${post.slug}`} style={{
              color: '#B7A1F7',
              textDecoration: 'none',
              fontSize: '0.875rem',
              fontWeight: '500'
            }}>
              Read more →
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
