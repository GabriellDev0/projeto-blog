import React from 'react'
import { FaYoutube, FaInstagram, FaLinkedin, FaFacebook } from 'react-icons/fa';

const SocialLinks = ({content}) => {
  return (
    <div>
              <a
                href={content.youtube}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube size={40} />
              </a>
              <a
                href={content.instagram}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram size={40} />
              </a>
              <a
                href={content.facebook}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook size={40} />
              </a>
              <a
                href={content.linkedin}
                rel="noopener noreferrer"
                target="_blank"
                aria-label="Linkedin"
              >
                <FaLinkedin size={40} />
              </a>
            </div>
  )
}

export default SocialLinks