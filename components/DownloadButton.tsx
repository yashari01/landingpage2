import { Download } from "lucide-react";

export default function DownloadButton() {
  return (
    <>
    <style>
        {`
    .stiky-download {
    width: 14vw;
    height: 3vw;
  min-width: 130px;
  min-height: 35px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  border-radius: 5px;
  overflow: hidden;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.089);
  cursor: pointer;
  background-color: transparent;
  position: sticky;
  z-index: 9999;
}

.leftContainer {
  width: 60%;
  height: 100%;
  /* background-color: rgb(238, 0, 0); */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
}

.leftContainer .like {
  color: white;
  font-weight: 600;
}

.likeCount {
  width: 40%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(238, 0, 0);
  font-weight: 600;
  position: relative;
  background-color: white;
}

.likeCount::before {
  height: 8px;
  width: 8px;
  position: absolute;
  content: "";
  background-color: rgb(255, 255, 255);
  transform: rotate(45deg);
  left: -4px;
}

.stiky-download:hover .leftContainer {
  background-color: rgb(219, 0, 0);
}

.stiky-download:active .leftContainer {
  background-color: rgb(201, 0, 0);
}

.stiky-download:active .leftContainer svg {
  transform: scale(1.15);
  transform-origin: top;
}
        `}
    </style>
    <div className="fixed download-sticky-container w-max inset-auto  right-4 top-4 z-50"
    >
      <a href="#" className="stiky-download relative ">
        <span className="leftContainer bg-gradient-to-r from-[#ff375f] to-[#ff1744]">
          <Download className="w-7 h-7 text-white" />
          <span className="like">Download</span>
        </span>
        <span className="likeCount">+25M</span>
      </a>
    </div>
    </>
    
  );
}
