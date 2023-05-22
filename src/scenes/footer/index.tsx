import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-16 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} />
          <p className="my-5">
            All Products from Royal Pallets & Interior Decor are done on Order. 
            Tell us What you need and our able team will 
            make it happen. Get that furniture design you have always wanted!
          </p>
          <p>© RoyalPallets All Rights Reserved.</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Links</h4>
          <p className="my-5">Facebook</p>
          <p className="my-5">Twitter</p>
          <p className="my-5">TikTok</p>
          <p>Instagram</p>
        </div>
        <div className="mt-16 basis-1/4 md:mt-0">
          <h4 className="font-bold">Contact Us</h4>
          <p className="my-5">Call or whatsapp us Today.</p>
          <p>(+254)0740 694 770</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
