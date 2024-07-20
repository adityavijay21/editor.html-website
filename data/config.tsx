import { Button } from "@chakra-ui/react";
import { Link } from "@saas-ui/react";
import { NextSeoProps } from "next-seo";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiCheck } from "react-icons/fi";
import { Logo } from "./logo";

const siteConfig = {
  logo: Logo,
  seo: {
    title: "Editor.html",
    description: "Practicing Web Development with real-time live preview.",
  } as NextSeoProps,
  termsUrl: "#",
  privacyUrl: "#",
  header: {
    links: [
      {
        href: "#features",
        id: "features",
        label: "Features",
      },
      // {
      //   id: 'pricing',
      //   label: 'Pricing',
      // },
      {
        href: "#faq",
        id: "faq",
        label: "FAQ",
      },
      // {
      //   label: 'Login',
      //   href: '/login',
      // },
      {
        href: "#releases",
        id: "releases",
        label: "Releases",
        variant: "primary",
      },
    ],
  },
  footer: {
    copyright: (
      <>
        Made with love ❤️ by{" "}
        <Link href="https://github.com/adityavijay21">Aditya Vijay</Link>
      </>
    ),
    links: [
      {
        href: "mailto:adityavijay2103@gmail.com",
        label: "Contact",
      },
      {
        href: "https://instagram.com/adityavijay21",
        label: <FaInstagram size="14" />,
      },
      {
        href: "https://linkedin.com/in/adityavijay21",
        label: <FaLinkedin size="14" />,
      },
    ],
  },
  signup: {
    title: "Start building with Saas UI",
    features: [
      {
        icon: FiCheck,
        title: "Accessible",
        description: "All components strictly follow WAI-ARIA standards.",
      },
      {
        icon: FiCheck,
        title: "Themable",
        description:
          "Fully customize all components to your brand with theme support and style props.",
      },
      {
        icon: FiCheck,
        title: "Composable",
        description:
          "Compose components to fit your needs and mix them together to create new ones.",
      },
      {
        icon: FiCheck,
        title: "Productive",
        description:
          "Designed to reduce boilerplate and fully typed, build your product at speed.",
      },
    ],
  },
};

export default siteConfig;
