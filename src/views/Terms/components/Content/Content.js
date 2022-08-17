import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const mock = [
  {
    title: "1. Acceptance of Terms",
    description:
      'The Virtualground, acting for the benefit of the Virtualground community as a whole, holds the intellectual property rights over and makes available, (a) the DCL Client, the Desktop Client, the SDK 1.0, the Marketplace (https://virtualground.it/marketplace), the Builder, the Blog, Events, Forum, the Land Manager, the Command Line Interface, DAO, the Developers’ Hub, the Rewards tool which, with any other features, tools and/or materials made available from time to time by the Foundation, are referred to herein as the "Tools" and (b) the website https://virtualground.it (the "Site"). Please read these Terms of Use (the "Terms" or "Terms of Use") carefully before using the Tools and the Site. By using or otherwise accessing the Tools and the Site, you: (1) accept and agree to be bound by these Terms; (2) accept that the Tools are still in the testing phase and that you use at your own risk, as further explained in Section 2 below; (3) represent that you are old enough to use the Tools and the Site pursuant to Sections 3 and 9 below; (4) consent to the collection, use, disclosure and another handling of information as described in the Privacy Policy, available here https://virtualground.it/privacy ; (5) accept and agree (5.1.) the Content Policy approved by the DAO, available here https://virtualground.it/content, and (5.2.) any additional terms and conditions of participation issued by the Foundation from time to time. If you do not agree to the Terms, then you must not access or use the Tools or the Site. As per the endowment received, the Foundation makes available the Tools and the Site free of charge in order to allow different interactions with the Virtualground platform ("Virtualground"), a decentralized virtual world. The Foundation does not own or control Virtualground, as ownership and governance are decentralized in the community through the DAO. Virtualground is governed by a decentralized autonomous organization (the "DAO"). For further information please see https://dao.virtualground.it. The Foundation has no continuing obligation to operate the Tools and the Site and may cease to operate one or more of the Tools in the future, at its exclusive discretion, with no liability whatsoever in connection thereto. With respect to the source code of the software of the Tools that have been released under an open-source license, such software code must be used in accordance with the applicable open source license terms and conditions as described in Section 13 below. Other similar tools might be developed in the future by the community or third parties.',
  },
  {
    title: "2. Disclaimer and Modification of Terms of Use",
    description:
      'The Tools are provided on an "as is" and "as available" basis and may contain defects and software bugs. You are advised to safeguard important data, property, and content, to use caution, and not to rely in any way on the correct or secure functionality or performance of the Tools. Except for Section 17, providing for binding arbitration and waiver of class action rights, as detailed in Section 7, the Foundation reserves the right, at the sole discretion of the DAO, to modify or replace the Terms of Use at any time. The most current version of these Terms will be posted on the Site. You shall be responsible for reviewing and becoming familiar with any such modifications. Use of the Tools by you after any modification to the Terms constitutes your acceptance of the Terms of Use as modified.',
  },
  {
    title: "3. Eligibility",
    description:
      "You hereby represent and warrant that you are fully able and competent to enter into the terms, conditions, obligations, affirmations, representations, and warranties set forth in these Terms and to abide by and comply with these Terms. Virtualground is a global platform and by accessing the Content, the Site, or Tools, you are representing and warranting that you are of the legal age of majority in your jurisdiction as is required to access such Tools and Content and enter into arrangements as provided by the Tools. You further represent that you are otherwise legally permitted to use the Tools in your jurisdiction including owning cryptographic tokens and interacting with the Site, Tools or Content in any way. You further represent that you are responsible for ensuring compliance with the laws of your jurisdiction and acknowledge that the Foundation is not liable for your compliance or failure to comply with such laws. You further represent and warrant that all funds or assets used by you have been lawfully obtained by you in compliance with all applicable law.",
  },
];

const PrivacySection = ({ title, description }) => {
  return (
    <Box>
      <Typography
        variant={"h6"}
        gutterBottom
        sx={{
          fontWeight: "medium",
        }}
      >
        {title}
      </Typography>
      <Typography component={"p"} color={"text.secondary"}>
        {description}
      </Typography>
    </Box>
  );
};

PrivacySection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

const Content = () => {
  return (
    <Box>
      {mock.map((item, i) => (
        <Box key={i} marginBottom={i < mock.length - 1 ? 4 : 0}>
          <PrivacySection {...item} />
        </Box>
      ))}
    </Box>
  );
};

export default Content;
