"use client";

import Link from "next/link";
import React from "react";

interface NavLinkProps {
  slug: string;
  key: string;
  label: string;
}

const NavLink = ({ slug, key, label }: NavLinkProps) => {
  return (
    <Link
      href={slug}
      key={key}
      className="text-base text-gray-500 hover:text-green-700 hover:scale-105 transtion-all duration-200 cursor-pointer"
    >
      {label}
    </Link>
  );
};

export default NavLink;
