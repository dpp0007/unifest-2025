import { title } from "process";

const teamMembers = [
  {
    logo: "/logo/technojam.webp",
    title: "Team Technojam",
    headTitle: "Club Heads",
    CoverImages: "/coverimages/technojam.webp",
    headName1: "Neeraj Krishna",
    headName2: "Vanshika Prakash",
    description: `Technojam: Throttle to Learn! More than just a tech club, Technojam is a movement that fuels curiosity, creativity, and innovation. We thrive on coding, problem-solving, and pushing the boundaries of technology. From hackathons and workshops to AI, DevOps, and open-source projects, we provide a platform where ideas transform into reality. Whether you're a beginner or an expert, if you have the drive to learn and build, this is your playground. At Technojam, we don’t just follow trends—we create them. Throttle your passion, accelerate your skills, and code the future with us!`,
  },

  {
    logo: "/logo/Kafila.webp",
    title: "Kafila",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1gw-xTLCaTg1usrY95jcs-xxjRuEYIQI-",
    headImage2:
      "https://drive.google.com/open?id=1JGNSNWO_fGVBTv_TFp5KnUuSnv7gQwKW",
    CoverImages: "/coverimages/kafila.webp",
    headName1: "Soumya Tripathi",
    headName2: "Mayank Khandelwal",
    description:
      "Kafila – The Mental Health Society of Galgotias University is more than just a club; it’s a movement dedicated to fostering awareness, resilience, and support for mental well-being. In a world where mental health is often overlooked, we aim to break the stigma through open conversations, interactive workshops, expert-led sessions, and creative outreach initiatives. Our community stands as a safe space where students can share, heal, and grow together. At Kafila, we believe that mental health is just as important as physical health, and no one should struggle in silence. Join us in creating a campus where empathy thrives, voices are heard, and well-being is a priority—because mental health matters, today and always.",
  },
  {
    logo: "/logo/Graphex.webp",
    title: "Graphex",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1nMpZw2CCxYbiXg_FmwZyhsq0xS1_THMt",
    headImage2:
      "https://drive.google.com/open?id=1A_HHvCBtZgHNWKbsnbACEOhJGqmtARNQ",
    CoverImages: "/coverimages/graphex.webp",
    headName1: "Anirudh Kaushik",
    headName2: "Shreyash Jaiswal",
    description:
      "Graphex is more than just a design club; it's a creative powerhouse where imagination meets precision. As the heart of visual storytelling at Galgotias University, we craft compelling narratives through design, blending innovation with artistry. Every pixel we place and every concept we create reflects our passion for aesthetics and user experience. At Graphex, we don’t just design—we inspire, innovate, and redefine the boundaries of creativity. Whether it's branding, UI/UX, or motion graphics, we believe in the power of design to transform ideas into impactful visuals. Join us in shaping the future, one design at a time.",
  },
  {
    logo: "/logo/Humans_of_Galgotias.webp",
    title: "Humans of Galgotias",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1DK_TWP_lkiBuelmbJEMY0EneGkMyA4W3",
    headImage2:
      "https://drive.google.com/open?id=1Ap242hfpoYXVInElI4JC5_X4F7yA0KmL",
    CoverImages: "/coverimages/hog.webp",
    headName1: "Devasheesh Patel",
    headName2: "Abhishek Shukla",
    description:
      "Humans of Galgotia is a podcast club at Galgotias University that focuses on storytelling and discussions on diverse topics, including personal experiences, social issues, technology, and college life. The club provides a platform for students to share their thoughts through engaging podcast episodes. Members collaborate on scripting, recording, editing, and publishing content, gaining hands-on experience in audio production. With a commitment to creativity and meaningful conversations, Humans of Galgotia fosters a vibrant community where students explore their passion for podcasting, enhance communication skills, and create impactful content that resonates with a wider audience.",
  },
  {
    logo: "/logo/book-club.webp",
    title: "All-Booked",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1yMAFljnMCOZNutC2s70OBgJuDB52Zbdd",
    headImage2:
      "https://drive.google.com/open?id=1XzWp13BVUdo07J2qkq2SkLlxPzWtei85",
    CoverImages: "/coverimages/allbooked.webp",
    headName1: "Saksham Agnihotri",
    headName2: "Khushi",
    description:
      "All-Booked: Where pages turn into passionate debates and reviews ignite new perspectives. We're a safe haven for literary explorers, diving into diverse worlds crafted by words. Join us to discover fresh realities and celebrate the power of stories. In every book, a new adventure awaits.",
  },

  {
    logo: "/logo/frag.webp",
    title: "Frag Club",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=17Sfgv5N7McWFv1hoGCLqZixbQ7R1Hb_6",
    headImage2:
      "https://drive.google.com/open?id=1IabIjQJQLORkdSnzUH9ZXcF9w5ipjBwh",
    CoverImages: "/coverimages/frag.webp",
    headName1: "Faizan Showkat",
    headName2: "Chirag chawla",
    description:
      "FRAG is more than just an eSports club; it's a battleground where passion meets skill. From casual gamers to competitive pros, we bring together the best talents to create an electrifying gaming culture on campus. With high-stakes tournaments, thrilling LAN events, and collaborations with top gaming brands, we’re redefining the eSports experience. Whether you play for fun or aim for glory, FRAG is where you level up. Join us and be a part of the ultimate gaming revolution at Galgotias University!",
  },
  {
    logo: "/logo/Sponsorship.webp",
    title: "Sponsorship Team",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1_ECn7x_rOYXtW9dpieQRSYH8UKMcaPPJ",
    headImage2:
      "https://drive.google.com/open?id=15fTPLE7HlX8P8vQfS_6abd4i_qoNMMnQ",
    CoverImages: "/coverimages/sponsorship.webp",
    headName1: "Shivang kulshrestha",
    headName2: "Dakshita Gupta",
    description:
      "Sponsorship team is the only club in Galgotias Student council which deals with financial part of the event whether it is for funding of an event or handling budgeting. We provide students with learnings in the domain of Finances, Professionalism, and how to tackle stressful situations.",
  },

  {
    logo: "/logo/Quizzard.webp",
    title: "Quizzards",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1C8b6iLDRDYXN9xhz_MDhrqlFnifsVJq3",
    headImage2:
      "https://drive.google.com/open?id=1UP52RzSGC9u0dRAXr-Jar3a1lY1f3Jq6",
    CoverImages: "/coverimages/quizzards.webp",
    headName1: "Yashi Chaudhary",
    headName2: "Vedant Umrao",
    description:
      "Quizzards is the vibrant and intellectually stimulating quiz club of Galgotias University where curiosity meets competition. We're a community of passionate individuals united by our love for trivia, knowledge, and the thrill of competition. We curate and conduct a wide array of engaging quizzes that cater to diverse interests, and foster a spirit of healthy rivalry. From culture enthusiasts to academic aficionados, everyone finds their niche within our community. We strive to create an inclusive space where every question sparks discovery and every quiz is an opportunity to learn and grow. Quizzards: We Put The Q in IQ!",
  },
  {
    logo: "/logo/SMT.webp",
    title: "Stage Management Team",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1jGlAlfdDCjTlyuWVWkqQxzKbunNlo4IT",
    headImage2:
      "https://drive.google.com/open?id=1sqG_SUCVcllr1_KE5FnHt3RqC-iVOPIA",
    CoverImages: "/coverimages/smt.webp",
    headName1: "Bhavya Singhal",
    headName2: "Sakshi Soni",
    description:
      "Setting The Stage, Stealing The Show. Ever wondered what keeps a grand event running smoothly? That’s us—the Stage Management Team! We’re the invisible hands behind the magic, ensuring every performance starts on time, every mic is in place, and every spotlight hits just right. From cueing artists to syncing sound and lights, we turn chaos into a seamless spectacle. No last-minute hiccup is too big for us to handle! If you’ve ever witnessed a flawless show at Unifest, know that we were working tirelessly behind the scenes to make it happen!",
  },

  {
    logo: "/logo/G-Post.webp",
    title: "G-Post",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1QOotiK-SIsOJPnZgs0_tRCVVq1tXbJ6F",
    headImage2:
      "https://drive.google.com/open?id=16rwKJVueUn7q9M6O9LWPR7vRWabfjYKe",
    CoverImages: "/coverimages/gpost.webp",
    headName1: "Pratyush Nath",
    headName2: "Vimanshu",
    description:
      "Welcome to G Post, the Magazine and Reporter's society of Galgotias University! Our motto, 'Event ke saath bhi, event ke baad bhi,' embodies our commitment to capturing campus life during and after events. We strategize roles based on strengths, report live moments, conduct interviews, and gather multimedia content. Post-event, we regroup to share insights and craft event reports that reflect our diverse community. More than a team, we’re a family united by our passion for creativity. Join us on this exciting journey, and let’s create some magic together!",
  },
  {
    logo: "/logo/Cyber cell.webp",
    title: "Cyber Cell",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1N58HE_8kMCVV0hOOjaDrWavgQnxqjQi9",
    headImage2:
      "https://drive.google.com/open?id=100IrGFPezLV57wdn8LIewOY-3oyBfAiR",
    CoverImages: "/coverimages/cybercell.webp",
    headName1: "Priyanshu Bhardwaj",
    headName2: "Ayushi Shukla",
    description:
      "In today's cyber age, cybersecurity is not just a capability—it's a responsibility. At Cyber Cell GU, we are learners, innovators bound together by our mission to understand, prevent, and counter cyber threats. Through hands-on workshops, academic research, and real-world problem-solving, we learn how to protect data, networks, and personal privacy. Defense is not a goal, however, but one step ahead among the ever-changing cyber realities. Join us toward a secure online future—one step at a time.",
  },
  {
    logo: "/logo/GSS.webp",
    title: "Galgotias Sustainable Society",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1tJNPrY89AUryinMPsRN0zZIjC6UOFEXI",
    headImage2:
      "https://drive.google.com/open?id=1yYpiyaZR4HmrYyWpmPV_zCj8OguTUpeG",
    CoverImages: "/coverimages/gss.webp",
    headName1: "Aman Singh",
    headName2: "Kumari Shagun",
    description:
      "Galgotias Sustainable Society is a student-driven initiative at Galgotias University aimed at fostering sustainability and aligning with the United Nations’ Sustainable Development Goals (SDGs). The club is dedicated to raising awareness, inspiring action, and driving impactful solutions to local and global challenges. Our mission is to educate, inspire, and empower students to adopt and implement sustainable practices, fostering a culture of innovation and collaboration for a greener future.",
  },
  {
    logo: "/logo/NoteVeda.webp",
    title: "Noteveda",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1ZGgwU_xLPhqkB8Y79dGtTMls6kVP7elW",
    headImage2:
      "https://drive.google.com/open?id=14yNnKFguXMJXHus9KvPm8zyDif3iwE1a",
    CoverImages: "/coverimages/noteveda.webp",
    headName1: "Mukul Kumar",
    headName2: "Jintu Saikia",
    description:
      "Noteveda is a music club designed for individuals who are passionate about learning and creating music. We encourage members to experiment with different instruments, genres, and styles. The club organizes various events, including rehearsals, group projects, and public performances, giving everyone a chance to showcase their skills and learn from others. At Noteveda, music is not just an art form, but a community experience that brings people together.",
  },

  {
    logo: "/logo/The_Humanity_Saviours.webp",
    title: "Humanity Saviours",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1zAc-0KTBq-JYx7rMxaSDO5nW6mojPttW",
    headImage2:
      "https://drive.google.com/open?id=1ZPCf5QpPHLuK5wvAIjbJCNgRzJI_OsZh",
    CoverImages: "/coverimages/hs.webp",
    headName1: "Shiv Sundar Singh",
    headName2: "Utkarsh Kumar",
    description:
      "Humanity Saviours is a social working club under Galgotias University Student Council, committed to uplifting underprivileged communities through humanitarian efforts. The club focuses on providing food, education, healthcare, disaster relief, and environmental initiatives to create a better society. Through charity drives, skill development programs, and awareness campaigns, it empowers individuals and fosters compassion. Open to all who wish to make a difference, the club believes that small acts of kindness can bring meaningful change to the world.",
  },

  {
    logo: "/logo/Actrhub.webp",
    title: "Actor’s Hub",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1DhBddIohM561SBCheM_ERbiUuf_5FtFI",
    headImage2:
      "https://drive.google.com/open?id=1nGt0Ox2pStVE8stYJmqSOURYZP-YDvBG",
    CoverImages: "/coverimages/actorshub.webp",
    headName1: "Ishika Gupta",
    headName2: "Nikhil Mishra",
    description:
      "Actors Hub: Where Stories Come to Life! More than just a club, Actors Hub is a community of passionate performers who bring characters to reality through drama, emotions, and creativity. Whether it’s theatrical plays, skits, mime acts, or improv, we provide a stage for self-expression and artistic growth. We believe in the power of storytelling to inspire, entertain, and make an impact. Join us to explore the magic of acting, unleash your potential, and be part of something unforgettable!",
  },
  {
    logo: "/logo/OP.webp",
    title: "Online Promotions Team",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1NKM2FAl6kQdroWOKTqf6d5tsYw4OEtML",
    headImage2:
      "https://drive.google.com/open?id=1mUW1t_u-EhrdjImKgi9Qs1VqGQx4zj0S",
    CoverImages: "/coverimages/op.webp",
    headName1: "Mayank Singh",
    headName2: "Harsh Vardhan Agrawal",
    description:
      "The Online Promotions Team is the official social media manager of the Galgotias University Student Council, handling the digital presence of all council-affiliated clubs. We manage event promotions and ensure that each club receives the recognition it deserves. From designing eye-catching stories to maximizing reach across all platforms, we combine creativity and strategy to enhance the university’s online community. Our team works behind the scenes to keep students informed, connected, and excited about campus events.",
  },

  {
    logo: "/logos/gci.webp",
    title: "Galgotias Campus Influencer",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1vMHb97GfCJKA7FiHoy1eWYHsUbc9hRnN",
    headImage2:
      "https://drive.google.com/open?id=1qCZ400PIGzp6uiMW8HdIITvAro37n6qS",
    CoverImages: "/coverimages/gci.webp",
    headName1: "Vikram Nayak",
    headName2: "Manish Kumar",
    description:
      "Galgotias Campus Influencers (GCI) aims to promote Galgotias University and its Student Council while providing students with opportunities to showcase their talents. By organizing workshops, competitions, and cultural events, GCI fosters teamwork and personal growth. It supports holistic development across arts, sports, academics, and leadership, preparing students for real-world challenges. GCI also enhances the university’s reputation by highlighting student achievements and fostering industry connections. Through its initiatives, GCI ensures Galgotias University remains a hub of excellence, innovation, and student success.",
  },
  {
    logo: "/logo/Artistico.webp",
    title: "Artistico",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1Zw3TIluX583Ojj3dirsHsDH9nbmX7ejK",
    headImage2:
      "https://drive.google.com/open?id=1IPozI-nwvfv_c70VZE6rRreVpKajyG0k",
    CoverImages: "/coverimages/artistico.webp",
    headName1: "Subhasree Chattopadhyaya",
    headName2: "Asmita Shekhar",
    description:
      "Our vibrant art club is a dynamic community of talented members, united by a shared passion for creative expression. We explore a diverse range of art forms, from painting and sketching to craft works and digital media. Through regular art museum visits, commission works, and exhibitions, our members enhance their skills, exchange ideas, and inspire one another. Our club provides a nurturing environment where artists of all levels can grow, experiment, and showcase their unique artistic visions.",
  },
  {
    logo: "/logo/BusinessClub.webp",
    title: "Business Club",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1yk1NiAwtwUSy82dgpLwjOBvo9pJzTLrs",
    headImage2:
      "https://drive.google.com/open?id=1QXeRVEsZNrPrY94QlVPNhCnLzrHbkrDI",
    CoverImages: "/coverimages/business.webp",
    headName1: "Sneha Ranjan",
    headName2: "Devvrat Singh",
    description:
      "The Galgotia Student Council Business Club is a community for students who are passionate about business, entrepreneurship, and leadership. Our goal is to help students learn, grow, and connect with industry professionals. We organize workshops, guest talks, competitions, and networking events to give real-world business exposure. Whether you’re interested in marketing, finance, startups, or management, our club helps you develop essential skills and meet like-minded people. We believe in learning by doing, turning ideas into action, and preparing for future careers.",
  },
  {
    logo: "/logo/cc.webp",
    title: "Camcircle",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1nlmwUNrzjQTqeTcuCejzvjJ09Whhzxkb",
    headImage2:
      "https://drive.google.com/open?id=1ndyb8gtNCJpGaVBhoHlY2LugIAweit3n",
    CoverImages: "/coverimages/cc.webp",
    headName1: "Sarvagya Kumar",
    headName2: "Saurav Kumar",
    description:
      "Cam Circle: Capturing Moments, Creating Stories! In a world of photos, edits, and creativity, Galgotias University's Cam Circle is the ultimate hub for photography, videography, and editing enthusiasts. Our passionate storytellers freeze moments through their photos and powerful edits. 'I can freeze time, What's your superpower?' That’s the spirit we live by. From portraits to cinematic videos, we capture emotions that speak louder than words. Cam Circle stays active both on field and backend, constantly evolving with new trends. For us, photography and videography go beyond just visuals. Cam Circle: Where every shot has a story!",
  },
  {
    logo: "/logo/lingo.webp",
    title: "Lingofreaks",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1nMpZw2CCxYbiXg_FmwZyhsq0xS1_THMt",
    headImage2:
      "https://drive.google.com/open?id=1A_HHvCBtZgHNWKbsnbACEOhJGqmtARNQ",
    CoverImages: "/coverimages/lingofreaks.webp",
    headName1: "Drishti Singh",
    headName2: "Saksham Saxena",
    description:
      "Lingo Freaks is a space for those who live through words—whether spoken, written, or simply felt. Stories take shape, poetry finds a voice, and conversations go beyond the ordinary. Here, literature isn’t bound by rules; it spills, it soars, it stirs. Whether you write, speak, or simply listen, if words make your heart race, you’re already one of us. It’s a place where ideas spark, languages blend, and creativity knows no limits. If you find meaning in words, you’ll find a home here.",
  },
  {
    logo: "/logo/scintillitions.webp",
    title: "Scintillations ",
    headTitle: "Club Heads",
    headImage1:
      "https://drive.google.com/open?id=1nMpZw2CCxYbiXg_FmwZyhsq0xS1_THMt",
    headImage2:
      "https://drive.google.com/open?id=1A_HHvCBtZgHNWKbsnbACEOhJGqmtARNQ",
    CoverImages: "/coverimages/scintillations.jpeg",
    headName1: "Shivam sharma",
    headName2: "Akshay anand",
    description:
      "Scintillations, the vibrant soul of Galgotias University, is where fashion transcends the ordinary and becomes a celebration of self-expression. A dazzling fusion of innovation, elegance, and audacity, Scintillations lights up the stage with creativity that knows no bounds. Here, style is not just seen; it’s felt, igniting a fire within every soul that walks through its doors. With each stitch, each runway, and each showcase, Scintillations dares to redefine the essence of fashion, making it a powerful statement of individuality and passion. It’s not just a society; it’s a movement where imagination is the fabric of reality",
  },
  {
    logo: "/logo/Galgotias Dance Crew.webp",
    title: "Galgotias Dance Crew",
    headTitle: "Club Heads",
    CoverImages: "/coverimages/gdc.webp",
    headName1: "Umang Rajput",
    headName2: "Viraj Singh",
    description:
      "The Galgotias Dance Crew is a dynamic and talented group of dancers from Galgotias University, where we showcase a variety of dance styles from contemporary to hip hop to regional and indian classical fusions. We as a crew are known for our enthusiasm on stage and teamwork. The crew has earned a reputation for putting on high energy performances that captivates everyone. Whether at University events or competitions, GDC continues to represent their crew with pride and dedication.",
  },
  {
    logo: "/logo/robotics.webp",
    title: "Robotics Club",
    headTitle: "Club Heads",
    CoverImages: "/logo/robotics.webp",
    headName1: "Shubham",
    headName2: "Shams parvez",
    description: `Galgotias Robotics Club: Where Innovation Shapes the Future! In this era of technology, Galgotias University's Robotics Club is pioneering the way forward with innovation, problem-solving, and engineering abilities. We bring ideas to life—designing self-sustaining robots, AI-based systems, and intelligent automation through learning by doing. Our enthusiastic group discovers robotics, IoT, and AI while acting as the face of the university in intercollegiate and national competitions. But we go beyond machines—building a community of innovators, creators, and future technologists. Robotics is not all about code and circuits; it's about shaping the world of the future. Robotics Club: Designing Future!`,
  },
  {
    logo: "/logo/marketing.webp",
    title: "Marketing Team",
    headTitle: "Club Heads",
    CoverImages: "/coverimages/marketing.jpg",
    headName1: "Suryansh Mehra",
    headName2: "Sristy Singh",
    description: `The Galgotias University Marketing Team is the creative heartbeat of campus life, crafting vibrant campaigns that captivate and connect. From dynamic storytelling to electrifying event promotions, they shape the university’s identity and culture. Through innovative collaborations and strategic partnerships, the team bridges Galgotias with the wider world, turning passion into purpose and inspiring the community.`,
  },
];

export default function CardsClubHeads({ activeTab }) {
  if (
    activeTab !== "club" ||
    !Array.isArray(teamMembers) ||
    teamMembers.length === 0
  )
    return null;

  return (
    <div>
      {teamMembers.map((member, index) => {
        const isEven = index % 2 === 0;
        const textColor = isEven ? "text-black" : "text-white";
        const bgColor = isEven
          ? "bg-[url('/bgyellow.webp')]"
          : "bg-[url('/bgred.webp')]";

        return (
          <div
            key={member.title}
            className={`relative flex flex-col items-center justify-center text-center min-h-screen ${bgColor} p-2 w-full bg-cover bg-center bg-no-repeat`}
          >
            {/* Top Section - Logo, Title */}
            <div className="w-full max-w-6xl flex items-center py-4">
              {/* Logo (Left) - With lazy loading and low-quality image placeholder */}
              <div className="w-20 h-20 bg-gray-200 animate-pulse">
                <img
                  src={member.logo}
                  alt={`${member.title} Logo`}
                  className="w-full h-auto object-contain"
                  loading="lazy"
                  onLoad={(e) =>
                    e.target.parentNode.classList.remove(
                      "animate-pulse",
                      "bg-gray-200"
                    )
                  }
                />
              </div>
              {/* Title (Center) */}
              <h2
                className={`text-3xl md:text-4xl font-semibold uppercase ${textColor} w-3/4 md:w-full text-center`}
              >
                {member.title}
              </h2>
            </div>

            <div className="w-full max-w-6xl px-4 py-8">
              <div className="grid md:grid-cols-2 gap-10 items-center">
                {/* Description and Details (Left Side) */}
                <div className="flex flex-col space-y-6 text-center md:text-left">
                  <p
                    className={`text-lg leading-relaxed font-light ${textColor}`}
                  >
                    {member.description}
                  </p>

                  <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <h3 className={`text-xl font-semibold mb-3 ${textColor}`}>
                      Club Heads
                    </h3>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {member.headName1 && (
                        <div className="flex items-center space-x-3">
                          <div className="flex flex-col">
                            <span className={`font-medium ${textColor}`}>
                              {member.headName1}
                            </span>
                          </div>
                        </div>
                      )}

                      {member.headName2 && (
                        <div className="flex items-center space-x-3">
                          <div className="flex flex-col">
                            <span className={`font-medium ${textColor}`}>
                              {member.headName2}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                {/* Club Image (Right Side) - With progressive loading */}
                <div className="flex justify-center order-first md:order-last">
                  <div className="relative overflow-hidden rounded-xl shadow-xl bg-gray-200">
                    {/* Placeholder with fixed dimensions to prevent layout shifts */}
                    <div
                      className="animate-pulse absolute inset-0 bg-gray-300"
                      style={{ aspectRatio: "16/9" }}
                    ></div>

                    {/* Main image with revised loading approach */}
                    <img
                      src={member.CoverImages}
                      alt={member.title}
                      className="w-full max-w-md h-auto object-cover transition-all duration-300 hover:scale-105 relative z-10"
                      loading="lazy"
                      decoding="async"
                      style={{ minHeight: "200px" }}
                      onError={(e) => {
                        console.error(
                          `Failed to load image: ${member.CoverImages}`
                        );
                        e.target.style.display = "none";
                      }}
                      onLoad={(e) => {
                        // Make image visible immediately
                        e.target.style.opacity = 1;

                        // Remove placeholder animation
                        const placeholder = e.target.previousElementSibling;
                        if (placeholder) {
                          placeholder.classList.remove("animate-pulse");
                          placeholder.style.backgroundColor = "transparent";
                        }
                      }}
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 z-20">
                      <h2 className="text-xl md:text-2xl font-bold text-white">
                        {member.title}
                      </h2>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
