import { Select } from "flowbite-react"


export const Filter = () => {
    return(   
    // <Select
    //     defaultValue="lucy"
    //     style={{ width: 120 }}
    //     onChange={handleChange}
    //     options={[
    //       { value: 'jack', label: 'Jack' },
    //       { value: 'lucy', label: 'Lucy' },
    //       { value: 'Yiminghe', label: 'yiminghe' },
    //       { value: 'disabled', label: 'Disabled', disabled: true },
    //     ]}
    //   />
        <Select className="w-[150px]" 
        id="filters">
        <option>Все</option>
        <option>Недавние</option>
        <option>Онлайн</option>
        <option>Офлайн</option>
    </Select>
)
}

export const LargeFilter = () => {
    return(   

        <Select 
        sizing={'lg'}
        // icon={}
        className="w-[590px] h-[72px]" 
        id="filters">
        <option>All
            <p>When do you release</p>
        </option>
        <option>New</option>
        <option>Orval</option>
        <option>Офлайн</option>
    </Select>
)
}

export const SvgLogoAdmin = () => {
    return (
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_2007_225)">
        <g filter="url(#filter0_ii_2007_225)">
        <path d="M20 2.3094C22.4752 0.880339 25.5248 0.880339 28 2.3094L40.7846 9.6906C43.2598 11.1197 44.7846 13.7607 44.7846 16.6188V31.3812C44.7846 34.2393 43.2598 36.8803 40.7846 38.3094L28 45.6906C25.5248 47.1197 22.4752 47.1197 20 45.6906L7.21539 38.3094C4.74018 36.8803 3.21539 34.2393 3.21539 31.3812V16.6188C3.21539 13.7607 4.74018 11.1197 7.21539 9.6906L20 2.3094Z" fill="#8E59FF"/>
        </g>
        <rect x="22" y="18" width="4" height="12" rx="2" fill="white"/>
        <rect x="14" y="20" width="4" height="8" rx="2" fill="url(#paint0_linear_2007_225)"/>
        <rect x="30" y="20" width="4" height="8" rx="2" fill="url(#paint1_linear_2007_225)"/>
        </g>
        <defs>
        <filter id="filter0_ii_2007_225" x="3.21539" y="0.237604" width="41.5692" height="47.5248" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
        <feFlood flood-opacity="0" result="BackgroundImageFix"/>
        <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="-1"/>
        <feGaussianBlur stdDeviation="1"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.53 0"/>
        <feBlend mode="multiply" in2="shape" result="effect1_innerShadow_2007_225"/>
        <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
        <feOffset dy="1"/>
        <feGaussianBlur stdDeviation="0.5"/>
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
        <feColorMatrix type="matrix" values="0 0 0 0 0.838444 0 0 0 0 0.838444 0 0 0 0 0.838444 0 0 0 0.25 0"/>
        <feBlend mode="normal" in2="effect1_innerShadow_2007_225" result="effect2_innerShadow_2007_225"/>
        </filter>
        <linearGradient id="paint0_linear_2007_225" x1="16" y1="20" x2="16" y2="28" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="#D0D0D0"/>
        </linearGradient>
        <linearGradient id="paint1_linear_2007_225" x1="32" y1="20" x2="32" y2="28" gradientUnits="userSpaceOnUse">
        <stop stop-color="white"/>
        <stop offset="1" stop-color="#D0D0D0"/>
        </linearGradient>
        <clipPath id="clip0_2007_225">
        <rect width="48" height="48" fill="white"/>
        </clipPath>
        </defs>
        </svg>
        )
}