if (!process.env.WORDPRESS_API_URL) {
  throw new Error(`
    Please provide a valid WordPress instance URL.
    Add to your environment variables WORDPRESS_API_URL.
  `)
}

console.log(process.env)
/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    domains: [
       'localhost/wordpreesweb/graphql',
      '0.gravatar.com',
      '1.gravatar.com',
      '2.gravatar.com',
      'secure.gravatar.com',
    ],
  },
}
