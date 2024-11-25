'use client';

import React from 'react';
import MaxWidth from '@/components/MaxWidth';
import Text from '@/components/Text';
import t from '../../messages/en.json';
import Link from 'next/link';
// types of footer
import { FooterSection } from '../../types/footer';
import dynamic from 'next/dynamic';
// Dynamic imports for icons
const FaFacebookF = dynamic(
  () => import('react-icons/fa').then((mod) => ({ default: mod.FaFacebookF })),
  {
    ssr: true,
  },
);
const IoLogoInstagram = dynamic(
  () =>
    import('react-icons/io5').then((mod) => ({ default: mod.IoLogoInstagram })),
  {
    ssr: true,
  },
);
const FaXTwitter = dynamic(
  () => import('react-icons/fa6').then((mod) => ({ default: mod.FaXTwitter })),
  {
    ssr: true,
  },
);

const Footer: React.FC = () => {
  const date = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      type: t.footer.softotech.type,
      links: [
        { label: t.footer.softotech.address, href: '#' },
        { label: t.footer.softotech.telephone, href: '#' },
        { label: t.footer.softotech.email, href: '#' },
      ],
    },
    {
      type: t.footer.company.type,
      links: [
        { label: t.footer.company.our_work, href: '#' },
        { label: t.footer.company.magazine, href: '#' },
        { label: t.footer.company.our_academy, href: '#' },
        { label: t.footer.company.about_softotech, href: '#' },
      ],
    },
    {
      type: t.footer.serivces.type,
      links: [
        { label: t.footer.serivces.full_stack_development, href: '#' },
        { label: t.footer.serivces.front_end_development, href: '#' },
        { label: t.footer.serivces.back_end_development, href: '#' },
        { label: t.footer.serivces.full_stack_development, href: '#' },
        { label: t.footer.serivces.custom_software_development, href: '#' },
        { label: t.footer.serivces.generative_ai, href: '#' },
        { label: t.footer.serivces.artificial_intelligence, href: '#' },
        { label: t.footer.serivces.mobile_app_development, href: '#' },
        { label: t.footer.serivces.android_app_development, href: '#' },
      ],
    },
    {
      type: t.footer.solutions.type,
      links: [
        { label: t.footer.solutions.marketplace_development, href: '#' },
        { label: t.footer.solutions.lms_development, href: '#' },
        { label: t.footer.solutions.mvp_development, href: '#' },
        { label: t.footer.solutions.saas_development, href: '#' },
        { label: t.footer.solutions.crm_development, href: '#' },
      ],
    },
    {
      type: t.footer.consulting.type,
      links: [
        { label: t.footer.consulting.it_consulting, href: '#' },
        { label: t.footer.consulting.ruby_on_rails_consulting, href: '#' },
        { label: t.footer.consulting.ecommerce_consulting, href: '#' },
        { label: t.footer.consulting.software_consulting, href: '#' },
        { label: t.footer.consulting.data_science_consulting, href: '#' },
      ],
    },
    {
      type: t.footer.footer_bottom.type,
      links: [
        { label: t.footer.footer_bottom.privacy_policy, href: '#' },
        { label: t.footer.footer_bottom.legal_notice, href: '#' },
        { label: t.footer.footer_bottom.cookies, href: '#' },
        { label: t.footer.footer_bottom.terms_of_use, href: '#' },
        { label: t.footer.footer_bottom.sitemap, href: '#' },
      ],
    },
    {
      type: t.footer.copyright.type,
      text: `© ${date} ${t.footer.copyright.copyright}`,
    },
    {
      type: t.footer.social_media.type,
      links: [
        {
          icon: (
            <FaFacebookF
              size='1.5em'
              aria-label='Facebook'
            />
          ),
          href: 'https://www.facebook.com/techdevsoftware/',
        },
        {
          icon: (
            <IoLogoInstagram
              size='1.5em'
              aria-label='Instagram'
            />
          ),
          href: 'https://www.instagram.com/techdevsoftware/',
        },
        {
          icon: (
            <FaXTwitter
              size='1.5em'
              aria-label='Threads'
            />
          ),
          href: 'https://www.linkedin.com/company/techdevsoftware/',
        },
      ],
    },
  ];

  const footerBottomLinks = footerSections
    .find((item) => item.type === 'footer_bottom')
    ?.links?.map((link, idx, arr) => (
      <React.Fragment key={idx}>
        <li className='inline-block'>
          <Link
            href={link.href || '#'}
            passHref
          >
            <span
              className={`${
                link.href ? 'hover:underline' : ''
              }`}
            >
              {link.label}
            </span>
          </Link>
        </li>
        {idx < arr.length - 1 && <span className='mx-2'>|</span>}
      </React.Fragment>
    ));

  return (
    <footer className='bg-primary text-white '>
      <MaxWidth className='py-10'>
        <div className='grid grid-cols-1 md:grid-cols-5 gap-6'>
          {/* Map over footerSections for different sections */}
          {footerSections
            .filter(
              (item) =>
                item.type !== 'footer_bottom' &&
                item.type !== 'copyright' &&
                item.type !== 'social_media',
            )
            .map((section, index) => (
              <div
                key={index}
                className='col-span-1 mb-6'
              >
                <Text
                  type='h4'
                  className='capitalize'
                >
                  {section.type.split('_').join(' ')}
                </Text>
                <ul className='mt-2'>
                  {section.links &&
                    section.links.map((link, idx) => (
                      <li key={idx}>
                        <Link
                          href={link.href || '#'}
                          passHref
                        >
                          <span
                            className={`${
                              link.href
                                ? 'hover:underline '
                                : ''
                            }`}
                          >
                            {link.label}
                          </span>
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>
            ))}
        </div>
      </MaxWidth>

      {/* Footer Bottom */}
      <div className='text-center bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-gray-300 py-5'>
        <MaxWidth className='flex flex-col md:flex-row space-y-4 md:space-y-0 md:justify-between md:items-center'>
          {/* Copyright Text */}
          <Text className='order-3 md:order-1 mt-4 md:mt-0'>
            {footerSections.find((item) => item.type === 'copyright')?.text}
          </Text>
          {/* Footer Links */}
          {footerBottomLinks && (
            <ul className='order-2 md:order-2'>{footerBottomLinks}</ul>
          )}
          {/* Social Media Icons Section */}
          <div className='flex justify-center space-x-4 order-2 md:order-3'>
            {footerSections
              .find((item) => item.type === 'social_media')
              ?.links?.map((link, idx) => (
                <Link
                  key={idx}
                  href={link.href || '#'}
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <span
                    className={`${
                      link.href ? 'hover:underline ' : ''
                    }`}
                  >
                    {link.icon}
                  </span>
                </Link>
              ))}
          </div>
        </MaxWidth>
      </div>
    </footer>
  );
};

Footer.displayName = 'Footer';
export default Footer;
