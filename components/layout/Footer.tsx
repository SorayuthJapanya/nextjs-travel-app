import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex items-center justify-center">
      <div className="padding-container max-container flex flex-col w-full gap-14">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">
          <Link href="/" className="mb-10">
            <Image
              src="hilink-logo.svg"
              alt="hilink-logo"
              width={74}
              height={29}
            />
          </Link>

          <div className="flex flex-wrap gap-10 sm:justify-between md:flex-1">
            {FOOTER_LINKS.map((columns, index) => (
              <FooterColumn key={index} title={columns.title}>
                <ul className="text-sm flex flex-col gap-4 text-muted-foreground">
                  {columns.links.map((link) => (
                    <Link href="" key={link}>
                      {link}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}

            <div className="flex flex-col gap-5">
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) => (
                  <Link
                    href="/"
                    key={link.label}
                    className="flex gap-4 md:flex-col lg:flex-row"
                  >
                    <p className="text-sm whitespace-nowrap">{link.label}: </p>
                    <p className="text-sm font-semibold text-primary">
                      {link.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
          </div>

          <div className="flex flex-col gap-5 max-sm:mt-6">
            <FooterColumn title={SOCIALS.title}>
              <ul className="text-sm flex gap-4 text-muted-foreground">
                {SOCIALS.links.map((link) => (
                  <Link href="/" key={link}>
                    <Image src={link} alt={link} width={20} height={20} />
                  </Link>
                ))}
              </ul>
            </FooterColumn>
          </div>
        </div>

        <div className="border-t border-border py-4">
          <p className="text-sm text-muted-foreground w-full text-center">
            &copy; 2023 Hilink. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

interface FooterColumnProps {
  title: string;
  children: React.ReactNode;
}

const FooterColumn = ({ title, children }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-bold text-base whitespace-nowrap">{title}</h4>
      {children}
    </div>
  );
};

export default Footer;
