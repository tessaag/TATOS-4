'use client'
import React, { useState} from 'react';
import Image from 'next/image';

const EditableName = () => {
  const [Name, setName] = useState('restaurant');

  const handleChange = (e) => {
    setName(e.target.value);
  };

  
  return (
    <input
      type="text"
      value={Name}
      onChange={handleChange}
      className="text-black text-xs text-left focus:outline-none"
      placeholder="name"
    />
  );
};

const HomePage = () => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpansion = (index) => {
    setExpandedItems(prevState => ({
      ...prevState,
      [index]: !prevState[index]
    }));
  };

  const faqData = [
  {
    question: "What is TheMenu.me and how does it work?",
    answer: "TheMenu.me is a website platform designed specifically for restaurants to <br /> create and manage their online presence effortlessly. With TheMenu.me, <br /> restaurants can easily showcase their menus, accept reservations, and <br /> engage with customers all from one convenient platform.",
    imageMarginLeft: 270
  },
    {
      question: "Do I need technical skills to use TheMenu.me?",
      answer: "Not at all! TheMenu.me is designed to be user-friendly and intuitive, so <br /> restaurant owners and managers of all skill levels can easily create and <br /> customize their restaurant's website. No coding or technical expertise is <br /> required.",
      imageMarginLeft: 253
    },
    {
      question: "Can I showcase my restaurant's menu on TheMenu.me?",
      answer: "Absolutely! TheMenu.me allows you to showcase your restaurant's menu in a <br />visually appealing and easy-to-navigate format. You can add descriptions, <br /> prices, and images for each menu item to entice customers and give them a <br /> taste of what your restaurant has to offer.",
      imageMarginLeft: 180
    },
    {
      question: "How can customers make reservations through TheMenu.me?",
      answer: "TheMenu.me offers built-in reservation functionality, allowing customers to <br /> make reservations directly through your restaurant's website. You can <br /> customize reservation settings, such as availability, party size limits, and <br /> reservation confirmation options, to suit your restaurant's needs.",
      imageMarginLeft: 130
    },
    {
      question: "Is TheMenu.me compatible with mobile devices?",
      answer: "Yes, TheMenu.me is fully responsive and optimized for mobile devices, <br /> ensuring that your restaurant's website looks great and functions seamlessly <br /> across desktops, tablets, and smartphones.",
      imageMarginLeft: 232
    },
    {
      question: "Can I customize the design of my restaurant's website on <br /> TheMenu.me?",
      answer: "Absolutely! TheMenu.me offers a variety of customizable templates and <br /> design options, allowing you to create a website that reflects your <br /> restaurant's unique brand and atmosphere. You can customize colors, fonts, <br /> layouts, and more tpo create a stunning online presence of your restaurant.",
      imageMarginLeft: 165
    },
    {
      question: "Is TheMenu.me secure to use for online transactions?",
      answer: "Yes, TheMenu.me prioritizes security and privacy, especially when it comes <br /> to online transactions. We use industry-standard encryption and security <br /> measures to protect your customer's data and ensure safe and secure online <br /> transactions.",
      imageMarginLeft: 193
    },
    {
      question: "Can I integrate social media accounts with my restaurant's<br />website on TheMenu.me?",
      answer: "Yes, TheMenu.me allows you to easily integrate your restaurant's social <br /> media accounts, allowing customers to connect with you on platforms like <br /> Facebook, Instagram, and Twitter directly from your website. You can also <br /> display social media feeds and reviews to further engage with your <br /> audience.",
      imageMarginLeft: 155
    },
    {
      question: "How can I get started with TheMenu.me for my restaurant?",
      answer: "Getting started with TheMenu/me is easy! Simply visit our website and sign <br /> up for a free account to start creating your restaurant's website today. You'll <br /> have access to all of our features and tools to help you showcase your <br /> restaurant and attract more customers online.",
      imageMarginLeft: 150
    },
    {
      question: "Is there customer support available for TheMenu.me users?",
      answer: "Yes, TheMEnu.me offers dedictaed customer support to help restaurant <br /> owners and managers with any questions or issues they may encounter. Our <br /> support team is available to assist you via email, chat, or phone during <br /> business hours.",
      imageMarginLeft: 145
    }
  ];

  return (
    <div className="scroll-container">
      <section className="bg-center flex justify-center items-center text-white relative section-container" style={{ width: '1520px' }}>
        <div className="absolute inset-0 z-0">
           <Image src="/1.gif" layout="fill" objectFit="cover" alt="Background" unoptimized={true}/>
        </div>

        <div className="absolute top-0 left-3 pt-4 pl-4">
          <Image src="/Vector.png" width={170} height={10} alt="Logo" />
        </div>
        <div className="absolute top-0 right-0 pt-4 pr-4 flex items-center">
          <button className="bg-white text-black px-4 py-2 mr-2 rounded-xl">
            Sign Up
          </button>
          <button className="text-black px-4 py-2">
            <Image src="/menu-butoon.png" width={52} height={10} alt="Menu Button" />
          </button>
        </div>
        <div className="absolute bottom-20 left-0 pb-4 pl-4">
          <div style={{ width: 804, fontFamily: 'var(--typefacefamilytext)', textAlign: 'left' }}>
            <div style={{ fontSize: '3rem', fontWeight: 600, lineHeight: '76.9px', marginBottom: 10 }}>
              Welcome to TheMenu.me - <br />Your Culinary Journey <br /> Begins Here!
            </div>
            <div style={{ fontSize: '1rem', lineHeight: 1.5 }}>
              At TheMenu.me, we are passionate about connecting food lovers with their <br />next delicious dining experience. Whether you&apos;re a seasoned foodie or just <br />looking for a new favorite spot, we&apos;re here to make exploring culinary <br />delights easy and enjoyable.
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-white px-16 py-2 rounded-xl">
        <span className="text-black text-xs text-left">themenu.me/</span>
          <EditableName />
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-xl absolute bottom-4 left-72">
          Claim my Link
        </button>
        <div className="absolute bottom-4 right-4">
          <Image src="/pause-button.png" width={70} height={20} alt="Image" />
        </div>
      </section>

      <section className="bg-white flex justify-center items-center text-black relative section-container" style={{ width: '1520px' }}>
        <div>
          <div className="absolute top-10 left-96" style={{marginLeft:30}}>
            <Image src="/Frame 944.png" width={900} height={500} alt="Image" />
          </div>  
          <div className="absolute top-10 left-10" style={{fontFamily: 'var(--typefacefamilytext)', fontSize: '3rem', fontWeight: 500, lineHeight: '38.45px', textAlign: 'left'}}>
            <p className="text-2xl font-medium">
              feature
            </p>
          </div>
          <div className="absolute bottom-4 left-0 pb-4 pl-4">
            <div style={{ width: 804, fontFamily: 'var(--typefacefamilytext)', textAlign: 'left' }}>
              <div style={{ fontSize:'3rem', fontWeight: 600, lineHeight: '76.9px', marginBottom: 10 }}>
              Browse Menus
              </div>
              <div style={{ fontSize: '1rem', lineHeight: 1.5 }}>
              Get a taste of what each establishment has to <br /> offer with our comprehensive menu browsing <br />feature. From appetizers to desserts, you can plan <br /> your perfect meal with just a few clicks.
              </div>
              <button className="bg-black text-white px-4 py-2 mt-4 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white flex justify-center items-center text-black relative section-container" style={{ width: '1520px' }}>
        <div>
        <div className="absolute top-36 left-96" style={{marginLeft:130}}>
          <Image src="/OBJECTS.png" width={750} height={450} alt="Image" />
        </div>
          <div className="absolute top-10 left-10" style={{fontFamily: 'var(--typefacefamilytext)', fontSize: '3rem', fontWeight: 500, lineHeight: '38.45px', textAlign: 'left'}}>
            <p className="text-2xl font-medium">
            feature
            </p>
          </div>
          <div className="absolute bottom-4 left-0 pb-4 pl-4">
            <div style={{ width: 804, fontFamily: 'var(--typefacefamilytext)', textAlign: 'left' }}>
              <div style={{ fontSize: '3rem', fontWeight: 600, lineHeight: '76.9px', marginBottom: 10 }}>
              Book Reservations
              </div>
              <div style={{ fontSize: '1rem', lineHeight: 1.5 }}>
              Ready to dine? Secure your table directly through <br />our platform. Say goodbye to long wait times and <br />hello to hassle-free dining experiences.
              </div>
              <button className="bg-black text-white px-4 py-2 mt-4 rounded-xl">
              Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white flex justify-center items-center text-black relative section-container" style={{ width: '1520px' }}>
        <div>
          <div className="absolute top-10 left-96" style={{marginLeft:30}}>
            <Image src="/Frame 946.png" width={750} height={350} alt="Image"/>
          </div>
          <div className="absolute top-10 left-10" style={{fontFamily: 'var(--typefacefamilytext)', fontSize: '3rem', fontWeight: 500, lineHeight: '38.45px', textAlign: 'left'}} >
            <p className="text-2xl font-medium">
            feature
            </p>
          </div>
          <div className="absolute bottom-4 left-0 pb-4 pl-4">
            <div style={{ width: 804, fontFamily: 'var(--typefacefamilytext)', textAlign: 'left' }}>
              <div style={{ fontSize: '3rem', fontWeight: 600, lineHeight: '76.9px', marginBottom: 10 }}>
              Read Reviews
              </div>
              <div style={{ fontSize: '1rem', lineHeight: 1.5 }}>
              Hear what others have to say about their dining <br />experiences. Our user-generated reviews provide <br />valuable insights to help you make informed <br /> decisions.
              </div>
              <button className="bg-black text-white px-4 py-2 mt-4 rounded-xl">
              Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white flex justify-center items-center text-black relative section-container" style={{ width: '1520px' }}>
        <div>
          <div className="absolute top-10 left-96" style={{marginLeft:30}}>
            <Image src="/Frame 943.png" width={600} height={500} alt="Image" />
          </div>
          <div className="absolute top-10 left-10" style={{fontFamily: 'var(--typefacefamilytext)', fontSize: '3rem', fontWeight: 500, lineHeight: '38.45px', textAlign: 'left'}}>
            <p className="text-2xl font-medium">
              feature
            </p>
          </div>
          <div className="absolute bottom-4 left-0 pb-4 pl-4">
            <div style={{ width: 804, fontFamily: 'var(--typefacefamilytext)', textAlign: 'left' }}>
              <div style={{ fontSize: '3rem', fontWeight: 600, lineHeight: '76.9px', marginBottom: 10 }}>
                Support Local <br />Restaurants
              </div>
              <div style={{ fontSize: '1rem', lineHeight: 1.5 }}>
                At TheMenu.me, we believe in supporting local <br /> businesses and celebrating the rich tapestry of <br /> culinary culture in every community. That&apos;s why <br /> we&apos;re committed to showcasing independently- <br />owned restaurants and highlighting the talented <br />chefs behind each dish.
              </div>
              <button className="bg-black text-white px-4 py-2 mt-4 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white flex justify-center items-center text-black relative section-container" style={{ width: '1520px' }}>
        <div>
          <div className="absolute top-0 right-12 pt-0 pr-4" style={{ fontFamily: 'var(--typefacefamilytext)', fontWeight: 500, lineHeight: '38.45px', textAlign: 'left' }}>
            <p className="text-xl">1/5</p>
          </div>
          <div className="absolute top-8 left-10 right-10">
            <Image src="/carousel.png" width={1370} height={900} alt="Image" />
          </div>
          <div className="absolute bottom-0 left-0 pb-4 pl-4">
            <div style={{ fontSize: '3rem', fontWeight: 600, lineHeight: '76.9px', marginBottom: '10px' }}>
            Feedbacks/reviews/ <br />partners
            </div>
          </div>
          <div className="absolute bottom-6 right-32 pr-4 pb-4">
            <Image src="/Group.png" width={195} height={500} alt="Image" />
          </div>
        </div>
      </section>

      <section className="bg-white flex justify-center items-center text-black relative section-container" style={{ width: '1520px' }}>
        <div>
          <div className="absolute inset-0 z-0">
            <Image src="/Rectangle 11.png" layout="fill" objectFit="cover" alt="Background" />
          </div>
          <div className="absolute bottom-10 left-0 pb-4 pl-4">
            <div style={{ width: 804, fontFamily: 'var(--typefacefamilytext)', textAlign: 'left' }}>
              <div style={{ fontSize: '3rem', fontWeight: 600, lineHeight: '76.9px', marginBottom: 30, color:'white' }}>
                Your Culinary Journey <br /> Begins Here!
              </div>
              <div className="absolute bottom-2 left-4 bg-white px-16 py-2 rounded-xl">
        <span className="text-black text-xs text-left">themenu.me/</span>
          <EditableName />
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-xl absolute bottom-2 left-72">
          Claim my Link
        </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ width: '1520px', height: '1000px' }} className="bg-white flex justify-center items-center text-black relative section-container">
        <div>
          <div className="absolute top-1 left-7 pt-4 pr-4" style={{ fontFamily: 'var(--typefacefamilytext)', fontSize: '1rem', fontWeight: 500, lineHeight: '38.45px', textAlign: 'left' }}>
            <p className="text-xl">FAQ</p>
          </div>
          <div className="absolute top-16 left-100 right-10">
            <Image src="/Rectangle 12.png" width={600} height={1134} layout="responsive" alt="Image" />
          </div>
          <div className="absolute top-12 left-0 bottom-4 pb-4 pl-4">
            <div style={{ width: 804, fontFamily: 'var(--typefacefamilytext)', textAlign: 'left' }}>
              <div style={{ fontSize: '3rem', fontWeight: 600, lineHeight: '76.9px', marginBottom: 30, color: 'black' }}>
              Frequently Asked Questions
              </div>
              {faqData.map((item, index) => (
                <div key={index}>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <p style={{ fontSize: '1rem', fontWeight: 500, lineHeight: '28.84px', color: 'black', marginLeft: 25 }} dangerouslySetInnerHTML={{ __html: item.question }}></p>
                  <Image src="/expand_more.png" width={50} height={50} alt="Expand" style={{ marginLeft: item.imageMarginLeft }} onClick={() => toggleExpansion(index)} />
                </div>
                {expandedItems[index] && (
                <p style={{ marginLeft: 25 }} dangerouslySetInnerHTML={{ __html: item.answer }} />
                )}
                <hr style={{ borderTop: '2px solid rgba(0, 0, 0, 0.7)', width: 690, margin: '10px auto', marginLeft: 10 }} />
              </div>
             ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-4 relative rounded-t-2xl" style={{ width: '1520px' }}>
        <div className="absolute top-0 left-3 pt-5 pl-4">
          <Image src="/Vector.png" width={300} height={10} alt="Logo" />
        </div>
        <div className="container flex justify-center items-center" style={{marginLeft: 'auto', marginRight: 'auto', marginTop: 25 }}>
          <div>
            <p style={{ whiteSpace: 'pre' }}>templates       pricing</p>
          </div>
        </div>
        <div className="container flex justify-end items-center " style={{marginLeft: 'auto', marginRight: 20, marginTop: 0,  }}>
          <p className="ml-auto">Copyright © 2024 themenu.me | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
