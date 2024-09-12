import React from 'react'
import Image from 'next/image'

function Hero() {
  return (
    <section className="bg-slate-600 flex flex-col items-center py-8">
      <div>
        <Image 
          src="/imgs/helin.png"  
          alt="this cool image" 
          width={300} 
          height={300}
          className="rounded-full"
        />
      </div>
      <h1 className="text-3xl font-black text-center max-w-2xl mt-4 text-slate-50">
        Hey, I'm Hélio Sal
      </h1>
      <p className="text-center mt-2 text-slate-50 max-w-lg">
        This is my blog and I am here to talk about some of my favorite topics, such as jellyfish and coding
      </p>
    </section>
  )
}

export default Hero
