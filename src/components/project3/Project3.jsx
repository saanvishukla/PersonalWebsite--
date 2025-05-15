import React from "react";
import "./project3.scss";
import NewNavbar from "../new_navbar/new_navbar";
import Sidebar from "../sidebar/Sidebar";

const Project1 = () => {
  return (
    <div className="container">
      <Sidebar className="side_bar" />
      <header className="header">
        <h1>Ortus</h1>
        <hr className="header-line" />
      </header>
      <div className="flex-container">
        <div className="image-center">
          <img src="./ortus_resized.png" alt="Project Image" className="imgsize" />
        </div>
      </div>
      <p className="para1">  </p>
      <hr className="header-line2" />
      <header className="header">
        <h1>Project Information</h1>
        <hr className="header-line" />
      </header>
      <p className="para3">
      For Project 3, we started with a simple but powerful question: How can Social Extended Reality (XR) make a real difference in people’s lives right here in our community? We wanted to go beyond just building something cool-we wanted to create something that truly matters to people.
      To get our creative juices flowing, our team tried a “speed dating” brainstorming session. We tossed around ideas, challenged each other, and quickly narrowed it down to three that really excited us:
      <ul classname="ul1">
        <li className="li1">An XR “fitting room” that would make online shopping less of a gamble,</li>
        <li className="li1">An XR art exhibition to give local artists a bigger stage, and</li>
        <li className="li1">An XR experience to help people reconnect with their culture and history.</li>
      </ul>
      </p>
      <p className="para3">
      After talking it through, we all felt a special pull toward the third idea. Many of us have felt that longing to understand our roots or share our heritage with others. That’s how “Ortus” was born-an XR space where anyone, anywhere, can rediscover and celebrate their culture. Our hope is that Ortus helps people feel more connected, not just to their past, but to 
      </p>
      <img src="./speeddating.png" alt="" className="hci" />
      <p className="para2">
        Speed Dating
      </p>

      <hr className="header-line2" />
      <header className="header">
        <h1>Background</h1>
        <hr className="header-line" />
      </header>
      <p className="para3">
        To truly design for people, we have to see the world through their eyes-not just guess what they might want. That means paying attention to how they actually behave, not just what we imagine they need. Maslow’s hierarchy of needs reminds us that everyone starts with the basics: things like air, food, and a safe place to sleep. Once those are covered, we all look for security, friendship, and a sense of belonging-after all, who doesn’t love having a good friend to share experiences with? Beyond that, it’s about feeling good about ourselves and finding ways to grow and express who we are. 
      </p>
      <img src="/ortusbg.png" className="pyramid" />
      <p className="para2"> Mind Map</p>
      <p className="para3">
        When we started working on this project, we knew we wanted to really understand what it’s like to be a traveler or an exchange student. Adjusting to a new place can be exciting, but let’s be honest-it’s also pretty overwhelming. Suddenly, you’re figuring out how to book hotels, plan your days, and find your way around a city where everything feels unfamiliar.
      </p>
      <p className="para3">
        To get a real feel for these challenges, we decided to walk in our users’ shoes-literally and figuratively. We spent time watching and chatting with people as they tried to sort out their travel plans. Sometimes we tagged along in person; other times, we caught up over WhatsApp (because who doesn’t love a good emoji conversation?). We even sent out Google Forms to hear from more people. By seeing how everyone handled the little hiccups and big decisions in real time, we realized just how important it is to pay attention to the real, everyday experiences of our users.
      </p>
      
      <hr className="header-line2" />
      <header className="header">
        <h1>Emphatizes</h1>
        <hr className="header-line" />
      </header>
      <p className="para3">
        We know that being far from home can leave people feeling a bit lost, especially when it comes to staying connected with their culture. With Ortus, we wanted to design something that truly understands those feelings-the longing for familiar traditions, the joy of sharing your heritage, and the comfort of connecting with others who just “get it.”
      </p>
      <p className="para3">
        To make sure we were on the right track, we started by talking to students and young professionals living abroad. Many shared stories about missing family celebrations, searching for traditional foods, or simply wanting to hear their native language. These real conversations helped us see what matters most.
      </p>
      <p className='para3'>
        We also used mind maps and brainstorming sessions to imagine different ways people might use Ortus-like joining a virtual festival, learning about their roots, or meeting others from similar backgrounds. To learn even more, we sent out a survey to cultural communities and friends. The responses were clear: people crave a sense of belonging and easy ways to celebrate their culture, but often struggle to find them in a new place.
      </p>
      <p className="para3">
      Hearing these stories and feedback inspired us to make Ortus an XR space that’s welcoming, easy to use, and truly meaningful-so that no matter where you are, you can always feel a little more at home.
      </p>
     
    <img src="/ortusem_resized.png" alt="Pie Chart" classname ="pie_chart"></img>
      
      <hr className="header-line2" />
      <header className="header">
        <h1>Interpret</h1>
        <hr className="header-line" />
      </header>

      <p className="para3">
      We grouped what we learned into two main areas: how people behave and the challenges they run into. One thing that stood out right away was that most people want to get the most out of their cultural experiences with the least amount of hassle. Everyone’s busy, and nobody wants to spend hours planning when they could be out making memories.
      Budget is a big deal, too. People want to enjoy cultural events and traditions, but they also have to watch their spending-especially if they’re living abroad or far from home. The main reason people seek out cultural experiences is to feel connected and to bring a bit of home into their lives. But often, they just don’t know where to start or what’s available in a new place.
      </p>

      <p className="para3">
      Here are some things people told us:
      </p>
      <ul>
        <li className="li1">
          <span className="question">Do you always plan out how you’ll connect with your culture?</span>
          <span>“It depends-sometimes I like to just see what comes up, but if it’s a big festival or something special, I’ll make a plan so I don’t miss out.”</span>
        </li>
        <li className="li1">
        	<span className="question">Do you run into last-minute problems?</span>
          <span>“All the time! I’ll hear about a cool event too late, or I won’t know where to find traditional food until after it’s over.”</span> 
        </li>
        <li className="li1">
        	<span className="question">How much do you research cultural events or places?</span> 
          <span>“If it’s something small, I might just go with the flow. But for bigger things, I do a lot of digging online, and sometimes it’s hard to know what’s actually worth it.”</span> 
        </li>
      </ul>
      <p className="para3">
        We also found that planning around a budget is tough, especially when prices change or it’s hard to find reliable info. People said it’s frustrating when different sources give conflicting advice, or when it takes forever to figure out what’s actually happening in their city. All that searching and second-guessing can take the fun out of what should be a joyful experience.
      </p>
      <div className="double-image-containe">
        <img src="./painpoints_resized.png" alt="Persona 2"/>
        {/* <img src="/people.png" alt="Persona 1" className="double-image" /> */}
      </div>


      <p className="para16">
      We found that budget planning is challenging due to varying costs and unpredictability while traveling. Additionally, finding reliable information is tough because others' experiences can be contradictory. The repetitive process of researching and adjusting trip details is also time-consuming.
      </p>

      <hr className="header-line2" />
      <header className="header">
        <h1>Ideate</h1>
        <hr className="header-line" />
      </header>
      <p className="para3">
        With our target group clearly defined, we took the time to develop a detailed framework that maps out how people try to stay connected to their culture while living away from home. We broke down this process into smaller steps, like “Plan 0: Where do I start?” or “Plan 1: How do I celebrate when I’m far from family?” to better understand the unique challenges our users face.
        To really get inside our users’ worlds, we created detailed personas that reflect a range of perspectives and experiences. For example, we have Jasmine, an expat living abroad who often feels isolated during cultural holidays, missing the warmth and togetherness she once took for granted. There’s Sid, an international student who longs for family traditions and rituals, but finds it hard to recreate them in a new country. We also have Sofia, a remote worker in a foreign land, searching for ways to connect with her roots and meet others who share her background. Lastly, there’s David, a retired immigrant who wants to keep his heritage alive and pass on stories and customs to the next generation, even as he adapts to a new culture.
      </p>
     
      <div className="double-image-container">
        <img src="/pov1.png" className="imgsize" />
        <img src="/pov2.png" className="imgsize"/>
      </div>
      <div className="double-image-container">
        <img src="/ideate1.png" className="imgsize" />
        <img src="/ideate2.png" className="imgsize" />
      </div>
      
      <hr className="header-line2" />
      <header className="header">
        <h1>Prototype</h1>
        <hr className="header-line" />
      </header>

      <p className="para3">
        For Ortus, we developed our initial prototype using Spatial and Unity, which allowed us to create an immersive XR environment focused on cultural reconnection. We identified and incorporated specific Points of Interest relevant to our target communities. To enhance realism, we acquired 3D model assets from the Korean Tourism Department available on Unity, which helped us build detailed mock-ups of cultural spaces.
      </p>
      <div className="double-image-container">
        <img src="/prototype1.png" className="imgsize" />
        <img src="/prototype2.png" className="imgsize" />
      </div>

      <hr className="header-line2" />
      <header className="header">
        <h1>Verify</h1>
        <hr className="header-line" />
      </header>

      <p className="para3">
        Our prototype currently includes core features such as a Points of Interest scene, a scene menu for navigation, and avatar customization options. However, due to our limited experience with Unity and Spatial, the prototype remains basic and has room for significant improvement.
      </p>
      <p className="para3">
      We conducted user testing sessions where participants explored the prototype in a sandbox environment and then provided feedback through post-session interviews. The feedback was generally positive, with users praising the realistic feel of the 3D assets and the visual fidelity achieved.
      </p>
      <p className="para3">
      However, users also pointed out areas that need improvement. Many mentioned that the lack of environmental boundaries-such as walls-made the space feel “weird” or less immersive, highlighting the need to add clear spatial limits. Additionally, our testing was limited to students, which restricted the range of nostalgia triggers and cultural experiences represented. Participants suggested expanding testing to include older diaspora members to better capture diverse cultural memories and needs
      </p>
      <img src="/verify3_resized.png" className="imgsize"/>

      <hr className="header-line2" />
      <header className="header">
        <h1>Personal Reflection</h1>
        <hr className="header-line" />
      </header>
      <p className="para3">
        Working on Ortus has been an eye-opening and rewarding journey for me. From the start, I felt a strong connection to the project’s goal of helping people reconnect with their culture, especially those living far from home. It made me realize how important those small cultural moments are for our sense of identity and belonging.
      </p>
      <p className="para3">
        Developing the prototype using Unity and Spatial was both exciting and challenging. I was proud when we found authentic 3D assets from the Korean Tourism Department and managed to create realistic mock-ups that users appreciated. At the same time, I quickly became aware of my own limitations with these tools. There were moments of frustration when things didn’t work as smoothly as I hoped, but I also saw it as a valuable learning experience that pushed me to improve my skills.
      </p>
      <p className="para3">
        The user testing sessions were particularly meaningful. Hearing users describe how the 3D environment felt realistic reassured me that we were on the right track. But I also took their feedback about the lack of walls and boundaries seriously-it reminded me that immersion isn’t just about visuals; it’s about creating a space where people feel comfortable and engaged. I realized how important it is to listen closely to users and be willing to adapt.
      </p>
      <p className="para3">
        One thing that stood out to me was the limitation of testing mostly with students. It made me think about how diverse cultural experiences are and how important it is to include voices from different age groups and backgrounds. This insight has motivated me to advocate for broader testing in the next phases of the project.
      </p>
    </div>
  );
};

export default Project1;