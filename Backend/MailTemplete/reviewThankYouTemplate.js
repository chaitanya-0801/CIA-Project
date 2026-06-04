
const reviewThankYouTemplate = ({ name, rating, message }) => {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8" />
      <title>Thank You For Your Review</title>
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
                    padding:35px;
                  "
                >
                  <h1 style="margin:0;">
                    Thank You For Your Review ⭐
                  </h1>

                  <p style="margin-top:10px;">
                    Chaudhary Immigration Academy
                  </p>
                </td>
              </tr>

              <!-- Content -->
              <tr>
                <td style="padding:40px;">

                  <h2 style="color:#1F3FAF;">
                    Dear ${name},
                  </h2>

                  <p
                    style="
                      color:#555;
                      font-size:16px;
                      line-height:1.8;
                    "
                  >
                    Thank you for taking the time to share your experience with
                    Chaudhary Immigration Academy. Your feedback helps us
                    improve our services and continue supporting students and
                    professionals in achieving their international goals.
                  </p>

                  <div
                    style="
                      background:#f8f9ff;
                      padding:20px;
                      border-radius:8px;
                      margin-top:25px;
                    "
                  >
                    <p>
                      <strong>Rating:</strong> ${rating}/5 ⭐
                    </p>

                    <p style="margin-top:15px;">
                      <strong>Your Review:</strong>
                    </p>

                    <p
                      style="
                        color:#555;
                        line-height:1.7;
                        border-left:4px solid #1F3FAF;
                        padding-left:15px;
                      "
                    >
                      "${message}"
                    </p>
                  </div>

                  <p
                    style="
                      margin-top:30px;
                      color:#555;
                      line-height:1.8;
                    "
                  >
                    We truly appreciate your trust and support. We wish you
                    continued success in your educational, professional, and
                    international journey.
                  </p>

                  <p
                    style="
                      margin-top:25px;
                      color:#555;
                    "
                  >
                    Best Regards,<br />
                    <strong>Sandeep Chaudhary</strong><br />
                    Director<br />
                    Chaudhary Immigration Academy
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
                    color:#666;
                    font-size:14px;
                  "
                >
                  © ${new Date().getFullYear()} Chaudhary Immigration Academy
                  <br />
                  Thank you for being a valued part of our community.
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

export default reviewThankYouTemplate;