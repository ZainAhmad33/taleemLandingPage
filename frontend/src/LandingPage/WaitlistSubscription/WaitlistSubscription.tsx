import { ArrowRight } from "lucide-react"
import emailjs from 'emailjs-com';
import { useState } from "react";

interface WaitlistSectionProps extends React.HTMLAttributes<HTMLElement> {
    title?: string
    description?: string
    backgroundEffect?: boolean
  }

export function WaitlistSection({
    title = "Get notified when new stuff drops.",
    backgroundEffect = true,
    description = ""
}: WaitlistSectionProps){
    const [email, setEmail] = useState("");
    const sendEmail = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        if (!email) {
            alert("Please enter a valid email.");
            return;
        }

        const templateParams = {
            user_email: email,
            name: email.split("@")[0]
        };

        emailjs.send('service_qzrut7h', 'template_gb1k4pi', templateParams, 'JPGna-jdv6gFbc6Wm')
            .then((result) => {
                console.log('Email sent:', result.text);
                alert('You have been added to the waitlist!');
                setEmail(""); // Clearing Input
            })
            .catch((error) => {
                console.error('Error:', error.text);
                alert('Failed to send email. Please try again.');
            });
    };
    return (
        <div id="waitlistSection" className="relative flex flex-col gap-4 items-center justify-center px-4">
            {backgroundEffect && <BackgroundEffect />}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 text-center">
                {title}
            </h2>
            {
                description !== "" && <div className="w-[70%] pt-0 text-center font-extralight text-lg dark:text-neutral-200 py-4">
                    {description}
                </div>  
            }
            <div className="flex flex-row w-[100%] align-center justify-center">
                <input
                    type='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex h-10 w-full rounded-xl border border-neutral-300 dark:border-neutral-700  bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your email"
                    style={{maxWidth: "350px"}}
                />&nbsp;&nbsp;
                <button
                    onClick={sendEmail} 
                    className="flex flex-row align-center justify-center max-h-min bg-blue-800 text-md rounded-xl w-fit text-neutral-50 hover:text-neutral-900 dark:text-neutral-50/80 dark:hover:text-neutral-50 px-4 py-2">
                    Notify Me &nbsp;<ArrowRight/>
                </button>
            </div>
            
        </div>
    )
}

function BackgroundEffect() {
    return ( 
      <div
        className="pointer-events-none absolute w-[100%] h-[100%]" 
        aria-hidden="true"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          fill="none"
          className="overflow-visible"
        >
          <g filter="url(#ill-a)">
            <path
              fill="url(#ill-b)"
              fillRule="evenodd"
              d="m56 88 344 212-166 188L56 88Z"
              clipRule="evenodd"
            />
          </g>
          <g filter="url(#ill-c)">
            <path
              fill="url(#ill-d)"
              fillRule="evenodd"
              d="m424 257 344 212-166 188-178-400Z"
              clipRule="evenodd"
            />
          </g>
          <defs>
            <linearGradient
              id="ill-b"
              x1="210.5"
              x2="210.5"
              y1="88"
              y2="467"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#C7E2F6" stopOpacity="0.64" />
              <stop offset="1" stopColor="#4A5463" stopOpacity="0" />
            </linearGradient>
            <linearGradient
              id="ill-d"
              x1="578.5"
              x2="578.5"
              y1="257"
              y2="636"
              gradientUnits="userSpaceOnUse"
            >
            <stop stopColor="#C7E2F6" stopOpacity="0.64" />
            <stop offset="1" stopColor="#4A5463" stopOpacity="0" />
            </linearGradient>
            <filter
              id="ill-a"
              width="520"
              height="576"
              x="-32"
              y="0"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_244_5"
                stdDeviation="44"
              />
            </filter>
            <filter
              id="ill-c"
              width="520"
              height="576"
              x="336"
              y="169"
              colorInterpolationFilters="sRGB"
              filterUnits="userSpaceOnUse"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                result="effect1_foregroundBlur_244_5"
                stdDeviation="44"
              />
            </filter>
          </defs>
        </svg>
      </div>
    )
  }