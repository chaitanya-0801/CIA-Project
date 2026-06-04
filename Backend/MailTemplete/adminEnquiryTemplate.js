
const adminEnquiryTemplate = ({
  name,
  email,
  phone,
  service,
  message,
}) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <title>New Enquiry Received</title>
    </head>

    <body
      style="
        margin:0;
        padding:0;
        background:#f4f7fc;
        font-family:Arial, Helvetica, sans-serif;
      "
    >

      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td align="center" style="padding:40px 20px;">

            <table
              width="650"
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
                    color:white;
                    padding:30px;
                  "
                >
                  <h1 style="margin:0;">
                    📩 New Enquiry Received
                  </h1>

                  <p style="margin-top:10px;">
                    Chaudhary Immigration Academy
                  </p>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="padding:40px;">

                  <h2 style="color:#1F3FAF;">
                    New Lead Details
                  </h2>

                  <table
                    width="100%"
                    cellpadding="12"
                    cellspacing="0"
                    style="
                      margin-top:20px;
                      border:1px solid #e5e7eb;
                      border-radius:8px;
                    "
                  >

                    <tr>
                      <td width="30%">
                        <strong>Name</strong>
                      </td>
                      <td>${name}</td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Email</strong>
                      </td>
                      <td>
                        <a href="mailto:${email}">
                          ${email}
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Phone</strong>
                      </td>
                      <td>
                        <a href="tel:${phone}">
                          ${phone}
                        </a>
                      </td>
                    </tr>

                    <tr>
                      <td>
                        <strong>Service</strong>
                      </td>
                      <td>${service}</td>
                    </tr>

                  </table>

                  <h3
                    style="
                      margin-top:30px;
                      color:#1F3FAF;
                    "
                  >
                    Customer Message
                  </h3>

                  <div
                    style="
                      background:#f8f9ff;
                      border-left:4px solid #1F3FAF;
                      padding:20px;
                      margin-top:10px;
                      line-height:1.7;
                    "
                  >
                    ${message}
                  </div>

                  <div
                    style="
                      margin-top:30px;
                      padding:20px;
                      background:#fff8e6;
                      border:1px solid #ffe08a;
                      border-radius:8px;
                    "
                  >
                    <strong>Action Required:</strong>
                    Contact this customer as soon as possible.
                  </div>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td
                  align="center"
                  style="
                    background:#f4f7fc;
                    padding:20px;
                    font-size:14px;
                    color:#666;
                  "
                >
                  Generated automatically from the CIA website contact form.
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

export default adminEnquiryTemplate;
