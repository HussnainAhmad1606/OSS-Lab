import Image from 'next/image'

export default function Home() {
  return (
    <div className="p-10 flex min-h-screen flex-col items-center justify-center">
      <Image src="/logo.png" width={200} height={200} />
      <h1 className='font-bold text-4xl my-5'>OSS Lab</h1>
      <p>
You can think of OSS Lab as your virtual LAB to find your curiosity and find your next project to learn something. It is project serving as a centralized directory for open-source projects, designed to streamline and encourage contributions from the global community of  developers and enthusiasts.</p><p>With a mission to foster collaboration and knowledge-sharing, OSS Lab aims to provide a comprehensive platform where individuals can discover a diverse array of open-source initiatives spanning various domains.</p><p>This project acts as a bridge, connecting aspiring contributors with projects that align with their interests and skill sets, thereby facilitating meaningful and impactful contributions to the open-source ecosystem. </p>
    </div>
  )
}
