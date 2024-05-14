import React from 'react';
import Image from 'next/image';


const HomePage = () => {
  return (
    <div>
      <section className="h-screen bg-center flex justify-center items-center text-white relative">
        <div className="absolute inset-0 z-0">
          <Image src="/1.gif" layout="fill" objectFit="cover" alt="Background" />
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
            <div style={{ fontSize: 50, fontWeight: 600, lineHeight: '76.9px', marginBottom: 10 }}>
            Welcome to TheMenu.me - <br />Your Culinary Journey <br /> Begins Here!
            </div>
            <div style={{ fontSize: 15, lineHeight: 1.5 }}>
            At TheMenu.me, we are passionate about connecting food lovers with their <br />next delicious dining experience. Whether you&apos;re a seasoned foodie or just <br />looking for a new favorite spot, we&apos;re here to make exploring culinary <br />delights easy and enjoyable.
            </div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 bg-white px-16 py-2 rounded-xl">
          <span className="text-black text-xs text-left">themenu.me/restaurant</span>
        </div>
        <button className="bg-black text-white px-5 py-2 rounded-xl absolute bottom-4 left-72">
        Claim my Link
        </button>
        <div className="absolute bottom-4 right-4">
          <Image src="/pause-button.png" width={70} height={20} alt="Image" />
        </div>
      </section>

      <section className="h-screen bg-white flex justify-center items-center text-black relative">
        <div>
          <div className="absolute top-10 right-20">
            <Image src="/urban-line-self-service-in-vegan-cafe 1.png" width={800} height={350} alt="Image" />
          </div>  
          <div className="absolute top-10 left-10" style={{fontFamily: 'var(--typefacefamilytext)', fontSize: 24, fontWeight: 500, lineHeight: '38.45px', textAlign: 'left'}}>
            <p className="text-2xl font-medium">
              feature
            </p>
          </div>
          <div className="absolute bottom-4 left-0 pb-4 pl-4">
            <div style={{ width: 804, fontFamily: 'var(--typefacefamilytext)', textAlign: 'left' }}>
              <div style={{ fontSize: 50, fontWeight: 600, lineHeight: '76.9px', marginBottom: 10 }}>
              Browse Menus
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.5 }}>
              Get a taste of what each establishment has to <br /> offer with our comprehensive menu browsing <br />feature. From appetizers to desserts, you can plan <br /> your perfect meal with just a few clicks.
              </div>
              <button className="bg-black text-white px-4 py-2 mt-4 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen bg-white flex justify-center items-center text-black relative">
        <div>
        <div className="absolute top-10 right-20">
          <Image src="/urban-line-thanksgiving-day-dinner 1.png" width={800} height={350} alt="Image" />
        </div>
          <div className="absolute top-10 left-10" style={{fontFamily: 'var(--typefacefamilytext)', fontSize: 24, fontWeight: 500, lineHeight: '38.45px', textAlign: 'left'}}>
            <p className="text-2xl font-medium">
            feature
            </p>
          </div>
          <div className="absolute bottom-4 left-0 pb-4 pl-4">
            <div style={{ width: 804, fontFamily: 'var(--typefacefamilytext)', textAlign: 'left' }}>
              <div style={{ fontSize: 50, fontWeight: 600, lineHeight: '76.9px', marginBottom: 10 }}>
              Book Reservations
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.5 }}>
              Ready to dine? Secure your table directly through <br />our platform. Say goodbye to long wait times and <br />hello to hassle-free dining experiences.
              </div>
              <button className="bg-black text-white px-4 py-2 mt-4 rounded-xl">
              Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen bg-white flex justify-center items-center text-black relative">
        <div>
          <div className="absolute top-10 right-20">
            <Image src="/journal-woman-leaving-a-review-of-a-product-and-rating-it 1.png" width={700} height={350} alt="Image" />
          </div>
          <div className="absolute top-10 left-10" style={{fontFamily: 'var(--typefacefamilytext)', fontSize: 24, fontWeight: 500, lineHeight: '38.45px', textAlign: 'left'}}>
            <p className="text-2xl font-medium">
            feature
            </p>
          </div>
          <div className="absolute bottom-4 left-0 pb-4 pl-4">
            <div style={{ width: 804, fontFamily: 'var(--typefacefamilytext)', textAlign: 'left' }}>
              <div style={{ fontSize: 50, fontWeight: 600, lineHeight: '76.9px', marginBottom: 10 }}>
              Read Reviews
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.5 }}>
              Hear what others have to say about their dining <br />experiences. Our user-generated reviews provide <br />valuable insights to help you make informed <br /> decisions.
              </div>
              <button className="bg-black text-white px-4 py-2 mt-4 rounded-xl">
              Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen bg-white flex justify-center items-center text-black relative">
        <div>
          <div className="absolute top-10 right-20">
            <Image src="/journal-group-of-people-celebrating-together-at-the-table 1.png" width={800} height={350} alt="Image" />
          </div>
          <div className="absolute top-10 left-10" style={{fontFamily: 'var(--typefacefamilytext)', fontSize: 24, fontWeight: 500, lineHeight: '38.45px', textAlign: 'left'}}>
            <p className="text-2xl font-medium">
              feature
            </p>
          </div>
          <div className="absolute bottom-4 left-0 pb-4 pl-4">
            <div style={{ width: 804, fontFamily: 'var(--typefacefamilytext)', textAlign: 'left' }}>
              <div style={{ fontSize: 50, fontWeight: 600, lineHeight: '76.9px', marginBottom: 10 }}>
                Support Local <br />Restaurants
              </div>
              <div style={{ fontSize: 15, lineHeight: 1.5 }}>
                At TheMenu.me, we believe in supporting local <br /> businesses and celebrating the rich tapestry of <br /> culinary culture in every community. That&apos;s why <br /> we&apos;re committed to showcasing independently- <br />owned restaurants and highlighting the talented <br />chefs behind each dish.
              </div>
              <button className="bg-black text-white px-4 py-2 mt-4 rounded-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="h-screen bg-white flex justify-center items-center text-black relative">
        <div>
          <div className="absolute top-0 right-12 pt-0 pr-4" style={{ fontFamily: 'var(--typefacefamilytext)', fontSize: '32px', fontWeight: 500, lineHeight: '38.45px', textAlign: 'left' }}>
            <p className="text-xl">1/5</p>
          </div>
          <div className="absolute top-8 left-10 right-10">
            <Image src="/carousel.png" width={1370} height={900} alt="Image" />
          </div>
          <div className="absolute bottom-0 left-0 pb-4 pl-4">
            <div style={{ fontSize: '50px', fontWeight: 600, lineHeight: '76.9px', marginBottom: '10px' }}>
            Feedbacks/reviews/ <br />partners
            </div>
            <div style={{ fontSize: '15px', lineHeight: '1.5' }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec rhoncus porta <br /> mollis. Nunc id euismod nisl. Ut rhoncus lorem quis porta venenatis. Quisque <br /> cursus augue et nisl ornare.
            </div>
          </div>
          <div className="absolute bottom-6 right-10 pr-4 pb-4">
            <Image src="/Foodies - Meal Ingredients 1.png" width={300} height={500} alt="Image" />
          </div>
        </div>
      </section>

      <section className="h-screen bg-white flex justify-center items-center text-black relative">
        <div>
          <div className="absolute inset-0 z-0">
            <Image src="/Rectangle 11.png" layout="fill" objectFit="cover" alt="Background" />
          </div>
          <div className="absolute bottom-10 left-0 pb-4 pl-4">
            <div style={{ width: 804, fontFamily: 'var(--typefacefamilytext)', textAlign: 'left' }}>
              <div style={{ fontSize: 50, fontWeight: 600, lineHeight: '76.9px', marginBottom: 30, color:'white' }}>
                Your Culinary Journey <br /> Begins Here!
              </div>
              <div className="absolute bottom-0 left-4 bg-white px-16 py-2 rounded-xl">
                <span className="text-black text-xs text-left">themenu.me/restaurant</span>
              </div>
              <button className="bg-black text-white px-5 py-2 rounded-xl absolute bottom-0 left-72">
               Claim my Link
              </button>
            </div>
          </div>
        </div>
      </section>

      <section style={{ height: 1000 }} className="bg-white flex justify-center items-center text-black relative">
        <div>
          <div className="absolute top-1 left-7 pt-4 pr-4" style={{ fontFamily: 'var(--typefacefamilytext)', fontSize: '32px', fontWeight: 500, lineHeight: '38.45px', textAlign: 'left' }}>
            <p className="text-xl">FAQ</p>
          </div>
          <div className="absolute top-16 left-100 right-10">
            <Image src="/Rectangle 12.png" width={600} height={1134} layout="responsive" alt="Image" />
          </div>
          <div className="absolute top-12 left-0 bottom-4 pb-4 pl-4">
            <div style={{ width: 804, fontFamily: 'var(--typefacefamilytext)', textAlign: 'left' }}>
              <div style={{ fontSize: 50, fontWeight: 600, lineHeight: '76.9px', marginBottom: 30, color: 'black' }}>
              Frequently Asked Questions
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: 17, fontWeight: 500, lineHeight: '28.84px', color: 'black', marginLeft: 25 }}>
                What is TheMenu.me and how does it work?
                </p>
                <Image src="/expand_more.png" width={50} height={50} alt="Image" className="ml-60" />
              </div>
              <hr style={{ borderTop: '2px solid rgba(0, 0, 0, 0.7)', width: 690, margin: '10px auto', marginLeft:10 }} />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: 17, fontWeight: 500, lineHeight: '28.84px', color: 'black', marginLeft: 25 }}>
                  Do I need technical skills to use TheMenu.me?
                </p>
                <Image src="/expand_more.png" width={50} height={50} alt="Image" style={{marginLeft:223}} />
              </div>
              <hr style={{ borderTop: '2px solid rgba(0, 0, 0, 0.7)', width: 690, margin: '10px auto', marginLeft:10 }} />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: 17, fontWeight: 500, lineHeight: '28.84px', color: 'black', marginLeft: 25 }}>
                Can I showcase my restaurant&apos;s menu on TheMenu.me?
                </p>
                <Image src="/expand_more.png" width={50} height={50} alt="Image" style={{marginLeft:147}} />
              </div>
              <hr style={{ borderTop: '2px solid rgba(0, 0, 0, 0.7)', width: 690, margin: '10px auto', marginLeft:10 }} />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: 17, fontWeight: 500, lineHeight: '28.84px', color: 'black', marginLeft: 25 }}>
                  How can customers make reservations through TheMenu.me?
                </p>
                <Image src="/expand_more.png" width={50} height={50} alt="Image" style={{marginLeft:97}} />
              </div>
              <hr style={{ borderTop: '2px solid rgba(0, 0, 0, 0.7)', width: 690, margin: '10px auto', marginLeft:10 }} />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: 17, fontWeight: 500, lineHeight: '28.84px', color: 'black', marginLeft: 25 }}>
                Is TheMenu.me compatible with mobile devices?
                </p>
                <Image src="/expand_more.png" width={50} height={50} alt="Image" style={{marginLeft:207}} />
              </div>
              <hr style={{ borderTop: '2px solid rgba(0, 0, 0, 0.7)', width: 690, margin: '10px auto', marginLeft:10 }} />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: 17, fontWeight: 500, lineHeight: '28.84px', color: 'black', marginLeft: 25 }}>
                Can I customize the design of my restaurant&apos;s website on <br /> TheMenu.me?
                </p>
                <Image src="/expand_more.png" width={50} height={50} alt="Image" style={{marginLeft:138}} />
              </div>
              <hr style={{ borderTop: '2px solid rgba(0, 0, 0, 0.7)', width: 690, margin: '10px auto', marginLeft:10 }} />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: 17, fontWeight: 500, lineHeight: '28.84px', color: 'black', marginLeft: 25 }}>
                Is TheMenu.me secure to use for online transactions?
                </p>
                <Image src="/expand_more.png" width={50} height={50} alt="Image" style={{marginLeft:170}}/>
              </div>
              <hr style={{ borderTop: '2px solid rgba(0, 0, 0, 0.7)', width: 690, margin: '10px auto', marginLeft:10 }} />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: 17, fontWeight: 500, lineHeight: '28.84px', color: 'black', marginLeft: 25 }}>
                Can I integrate social media accounts with my restaurant&apos;s <br />website on TheMenu.me?
                </p>
                <Image src="/expand_more.png" width={50} height={50} alt="Image" style={{marginLeft:132}} />
              </div>
              <hr style={{ borderTop: '2px solid rgba(0, 0, 0, 0.7)', width: 690, margin: '10px auto', marginLeft:10 }} />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: 17, fontWeight: 500, lineHeight: '28.84px', color: 'black', marginLeft: 25 }}>
                How can I get started with TheMenu.me for my restaurant?
                </p>
                <Image src="/expand_more.png" width={50} height={50} alt="Image" style={{marginLeft:130}} />
              </div>
              <hr style={{ borderTop: '2px solid rgba(0, 0, 0, 0.7)', width: 690, margin: '10px auto', marginLeft:10 }} />
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <p style={{ fontSize: 17, fontWeight: 500, lineHeight: '28.84px', color: 'black', marginLeft: 25 }}>
                Is there customer support available for TheMenu.me users?
                </p>
                <Image src="/expand_more.png" width={50} height={50} alt="Image" style={{marginLeft:127}} />
              </div>
              <hr style={{ borderTop: '2px solid rgba(0, 0, 0, 0.7)', width: 690, margin: '10px auto', marginLeft:10 }} />
      
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black text-white py-9 relative rounded-t-2xl">
        <div className="absolute top-0 left-3 pt-4 pl-4">
          <Image src="/Vector.png" width={300} height={10} alt="Logo" />
        </div>
        <div className="container flex justify-between items-center" style={{ marginLeft: 150 }}>
          <div style={{ marginLeft: 450 }}>
            <p style={{ whiteSpace: 'pre' }}>templates       pricing</p>
          </div>
          <p className="ml-auto">Copyright © 2024 themenu.me | All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
