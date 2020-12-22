import React from "react";
import "./footer.styles.scss";
import { useIntl } from "react-intl";

const Footer = () => {
  const intl = useIntl();

  return (
    <div className="footer">
      <p> {intl.formatMessage({ id: "footer.providedBy" })}<a href="https://www.poype.io/">POYPE LTD</a> | {intl.formatMessage({ id: "footer.companyNumber" })}<b>205728837</b> | {intl.formatMessage({ id: "footer.supportEmail" })}office@poype.io | {intl.formatMessage({ id: "footer.phone" })}<b>+359899837405</b></p>
    </div>
  );
}

export default Footer;