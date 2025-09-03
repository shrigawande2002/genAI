import React, { useState } from "react";
import { Image } from "antd";
import { FiDownload } from "react-icons/fi"; // download icon

const Feed = () => {
  const [visible, setVisible] = useState(false);
  const [previewSrc, setPreviewSrc] = useState("");

  // Example image groups
  const imageGroups = [
    {
      big: "https://picsum.photos/id/1015/600/400",
      small: [
        "https://picsum.photos/id/1025/300/200",
        "https://picsum.photos/id/1035/300/200",
        "https://picsum.photos/id/1045/300/200",
        "https://picsum.photos/id/1055/300/200",
      ],
    },
    {
      big: "https://picsum.photos/id/1065/600/400",
      small: [
     "https://picsum.photos/id/1025/300/200",
        "https://picsum.photos/id/1035/300/200",
        "https://picsum.photos/id/1045/300/200",
        "https://picsum.photos/id/1055/300/200",
      ],
    },
  ];

  // Handle image click
  const handlePreview = (src) => {
    setPreviewSrc(src);
    setVisible(true);
  };

  return (
    <div className="p-6 space-y-10">
      {imageGroups.map((group, index) => (
        <div
          key={index}
          className={`flex flex-col md:flex-row gap-4 items-stretch ${
            index % 2 === 0 ? "md:flex-row-reverse" : ""
          }`}
        >
          {/* Big Image */}
          <div className="flex-1 relative group cursor-pointer">
            <img
              src={group.big}
              alt="big"
              className="w-full h-full object-cover rounded-lg"
              onClick={() => handlePreview(group.big)}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex justify-between items-end p-3 rounded-lg">
              <div className="flex items-center gap-2">
                <img
                  src="https://i.pravatar.cc/40"
                  alt="avatar"
                  className="w-8 h-8 rounded-full border"
                />
                <span className="text-white text-sm">Author</span>
              </div>
              <a
                href={group.big}
                download
                className="text-white bg-black/50 p-2 rounded-full hover:bg-black/70 transition"
              >
                <FiDownload size={18} />
              </a>
            </div>
          </div>

          {/* Small Images */}
          <div className="flex-1 grid grid-cols-2 gap-4">
            {group.small.map((src, i) => (
              <div
                key={i}
                className="relative group cursor-pointer"
                onClick={() => handlePreview(src)}
              >
                <img
                  src={src}
                  alt={`small-${i}`}
                  className="w-full h-full object-cover rounded-lg"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex justify-between items-end p-2 rounded-lg">
                  <div className="flex items-center gap-2">
                    <img
                      src="https://i.pravatar.cc/40?img=2"
                      alt="avatar"
                      className="w-6 h-6 rounded-full border"
                    />
                  </div>
                  <a
                    href={src}
                    download
                    className="text-white bg-black/50 p-1.5 rounded-full hover:bg-black/70 transition"
                  >
                    <FiDownload size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Hidden AntD Image (for preview modal) */}
      <Image
        style={{ display: "none" }}
        src={previewSrc}
        preview={{
          visible,
          src: previewSrc,
          onVisibleChange: (value) => setVisible(value),
        }}
      />
    </div>
  );
};

export default Feed;
