import Title from '../components/Title'
import { assets } from '../assets/market_assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={'ABOUT'} text2={'US'}/>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-x-[450px]' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray 600'>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem veritatis ullam explicabo soluta, quidem quis minima! Animi aut consectetur accusamus cumque pariatur beatae ipsa nihil ex voluptas? Quas, laboriosam laborum!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur alias eum quisquam unde? Nisi natus aliquam rerum? Eveniet numquam harum quos est dolores non, nesciunt, reprehenderit neque, perferendis repellendus nostrum!</p>
        <b className='text-gray-800'>Our Mission</b>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe eum neque voluptates numquam, commodi impedit id magnam dolorem nesciunt doloremque totam debitis molestiae aperiam vero aliquam. Natus soluta suscipit neque!</p>
        </div>
      </div>

      <div className='text-4xl py-4'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      <div className='flex flex-col md:flex-row text-sm mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='text-gray-600'>Quality Assurance:</p>
          <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium delectus sed illo fugiat sint voluptas ipsum reprehenderit. Assumenda iure doloribus sequi. Veniam qui voluptates, facere fuga obcaecati voluptatibus porro.</b>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='text-gray-600'>Convenience:</p>
          <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium delectus sed illo fugiat sint voluptas ipsum reprehenderit. Assumenda iure doloribus sequi. Veniam qui voluptates, facere fuga obcaecati voluptatibus porro.</b>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5'>
          <p className='text-gray-600'>Exceptional Customer Service:</p>
          <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium delectus sed illo fugiat sint voluptas ipsum reprehenderit. Assumenda iure doloribus sequi. Veniam qui voluptates, facere fuga obcaecati voluptatibus porro.</b>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default About
