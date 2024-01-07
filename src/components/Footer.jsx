import React from "react"
import { footer } from "./styles/Footer.module.css"
import { faGithub, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Footer() {
  return <div className={footer}>
          <div>
						<FontAwesomeIcon icon={faGithub} size="2x" />
						<FontAwesomeIcon icon={faInstagram} size="2x" />
						<FontAwesomeIcon icon={faTwitter} size="2x" />
          </div>
          <span>Jay Jariwala © 2022</span>
  </div>
}
