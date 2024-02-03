import React from 'react';

const About = () => {



  return (
    <div className='w-full h-screen bg-[#E0EBDB] text-gray-300'>
      <div className='flex flex-col mt-10 items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pb-20 pt-20'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>A One Stop Shop</p>
            </div>
            <div>
              <p>
                Course Conkerer provides courses from multiple online course providers and displays them in one location, reducing the need for users to 
                navigate through several different web pages. It is a one stop shop for your online course needs. 
              </p>  
            </div>
          </div>
          <br></br>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pb-20 pt-20'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>The Learning Experience, Gamified!</p>
          </div>
          <div>
            <p>
              Course Conkerer provides many gamified features to liven up the online learning experience. The leaderboard shows where you rank amongst other users to bring out 
              that competitive nature and motivate users to complete more courses. Players earn points by rating and reviewing courses on the Courses page, the number of points 
              you currently have is displayed in the Profile page.                                                 
            </p>  
          </div>
        </div>

        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 pb-20 pt-20'>
        <div className='sm:text-right text-4xl font-bold'>
          <p>Tailored To You!</p>
        </div>
        <div>
          <p>
             The filters provided on the Courses page will help you find courses that are specific to your field of interest, so you can spend less 
             time filtering and more time learning! If you complete the questionnaire once you sign up, a new filter option will be available to you 
             which will provide a very specific set of courses based on your personal answers!                                                
          </p>  
        </div>
      </div>
      </div>
    </div>
  );
};

export default About;
