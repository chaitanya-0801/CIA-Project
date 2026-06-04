
const enquiryReceivedTemplate = ({
  name,
  email,
  phone,
  service,
}) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Enquiry Received</title>
    </head>

    <body style="
      margin:0;
      padding:0;
      background:#f4f7fc;
      font-family:Arial, Helvetica, sans-serif;
    ">

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding:40px 20px;">

            <table
              width="600"
              cellpadding="0"
              cellspacing="0"
              style="
                background:#ffffff;
                border-radius:12px;
                overflow:hidden;
                box-shadow:0 4px 20px rgba(0,0,0,0.08);
              "
            >

              <!-- Header -->
              <tr>
                <td
                  align="center"
                  style="
                    background:#1F3FAF;
                    padding:30px;
                    color:white;
                  "
                >
                  <h1 style="margin:0;">
                    Chaudhary Immigration Academy
                  </h1>

                  <p style="margin-top:10px;">
                    Your Trusted Immigration & Education Partner
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:40px;">

                  <h2 style="color:#1F3FAF;">
                    Hello ${name},
                  </h2>

                  <p style="font-size:16px; color:#555;">
                    Thank you for contacting
                    <strong>Chaudhary Immigration Academy</strong>.
                    We have successfully received your enquiry and one of
                    our consultants will contact you shortly.
                  </p>

                  <table
                    width="100%"
                    cellpadding="10"
                    cellspacing="0"
                    style="
                      margin-top:25px;
                      background:#f8f9ff;
                      border-radius:8px;
                    "
                  >
                    <tr>
                      <td><strong>Name:</strong></td>
                      <td>${name}</td>
                    </tr>

                    <tr>
                      <td><strong>Email:</strong></td>
                      <td>${email}</td>
                    </tr>

                    <tr>
                      <td><strong>Phone:</strong></td>
                      <td>${phone}</td>
                    </tr>

                    <tr>
                      <td><strong>Service:</strong></td>
                      <td>${service}</td>
                    </tr>
                  </table>

                  <p
                    style="
                      margin-top:25px;
                      color:#555;
                      line-height:1.7;
                    "
                  >
                    Our team will review your request and get back to
                    you as soon as possible.
                  </p>

                  <p
                    style="
                      margin-top:20px;
                      color:#555;
                    "
                  >
                    Regards,<br/>
                    <strong>Chaudhary Immigration Academy</strong>
                  </p>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td
                  align="center"
                  style="
                    background:#f4f7fc;
                    padding:20px;
                    color:#777;
                    font-size:14px;
                  "
                >
                  © ${new Date().getFullYear()} Chaudhary Immigration Academy
                  <br/>
                  Kurukshetra, Haryana
                </td>
              </tr>

            </table>

          </td>
        </tr>
      </table>

    </body>
    </html>
  `;
};

export default enquiryReceivedTemplate;
