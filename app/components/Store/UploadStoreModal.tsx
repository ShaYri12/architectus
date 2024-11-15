"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";

interface UploadStoreModalProps {
  onClose: () => void;
}

const UploadStoreModal: React.FC<UploadStoreModalProps> = ({ onClose }) => {
  const { t } = useTranslation();
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [progress, setProgress] = useState<number>(0);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [fileName, setFileName] = useState<string | null>("");

  const [fileSize, setFileSize] = useState<number>(0);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setFileSize(Number((file.size / 1024).toFixed(2)));
      setIsUploading(true);

      const reader = new FileReader();
      reader.onload = () => {
        setTimeout(() => {
          setIsUploading(false);
          setProgress(100);
          setImageUrl(reader.result as string);
        }, 2000);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleCancel = () => {
    setIsUploading(false);
    setProgress(0);
  };

  const handleDelete = () => {
    setImageUrl(null);
    setFileName("");
    setFileSize(0);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-5 py-3">
      {/* If Click outside the white box then Window Close  */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-[#0F1017B2] bg-opacity-70"
      ></div>

      <div className="bg-white rounded-[20px] p-5 md:p-7 w-full mx-auto max-w-[600px] relative min-h-full">
        {/* Close Window btn */}
        <Image
          src="/assets/icons/close-icon.svg"
          alt="close-icon"
          width={16}
          height={16}
          onClick={onClose}
          loading="lazy"
          className="absolute top-5 right-5 cursor-pointer"
        />

        <div className="h-[90vh] overflow-y-scroll overflow-x-hidden formscrollbar">
          <h1 className="font-bold text-xl md:text-2xl text-[#0B0B0B] text-left mb-4">
            {t("store.uploadstore.upload")}
          </h1>

          <p className="text-sm text-[#0F0A19B2]">
            {t("store.uploadstore.disc")}
          </p>

          <div className="relative borderUpload py-5 md:py-8 mt-6">
            {/* Show file upload div when not uploading and no image is present */}
            {!isUploading && (
              <div className="text-center">
                <input
                  className="absolute inset-0 w-full h-full opacity-0 z-50 cursor-pointer"
                  type="file"
                  onChange={handleFileChange}
                />
                <div>
                  <Image
                    alt="upload"
                    loading="lazy"
                    width="42"
                    height="34"
                    decoding="async"
                    className="mx-auto"
                    src="/assets/icons/upload-icon.svg"
                  />
                  <h3 className="mt-6 text-sm font-normal text-[#0B0B0B]">
                    <label htmlFor="file-upload" className="relative">
                      <span>{t("coaches.coachemodals.draganddrop")} </span>
                      <span className="text-[#3D2278] font-semibold">
                        {t("coaches.coachemodals.browse")}
                      </span>
                    </label>
                  </h3>
                </div>
              </div>
            )}

            {/* Show progress loading div when uploading */}
            {isUploading && (
              <div className="flex justify-center items-center flex-col">
                <div className="border-2 rounded-full border-[#FAFAFA] w-11 h-11 flex items-center justify-center text-[#0F0A19B2] text-xs">
                  {progress}%
                </div>
                <p className="text-[#0F0A19B2] text-center text-base my-[18px]">
                  {t("store.uploadstore.uploading")}
                </p>
                <button
                  className="border border-[#CECECE] text-[#0F0A19B2] rounded-lg py-[7px] px-4 text-center text-xs font-medium mx-auto"
                  onClick={handleCancel}
                >
                  {t("btns.cancel")}
                </button>
              </div>
            )}
          </div>

          <div className="flex flex-col md:flex-row justify-between gap-1 mt-[10px] mb-7">
            <p className="text-sm text-[#0F0A19B2]">
              {t("store.uploadstore.maximumsize")}: 280 x 90 px
            </p>
            <p className="text-sm text-[#0F0A19B2]">
              {t("store.uploadstore.bgcolor")}
            </p>
          </div>

          {/* Show uploaded image outside */}
          {imageUrl && !isUploading && (
            <div className="border border-[#E7E7E7] rounded-[10px] p-4 flex items-center justify-between gap-1 mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#E7E7E766] w-12 h-12 p-1 rounded-lg flex justify-center items-center overflow-hidden">
                  <img src={imageUrl} alt="Uploaded" className="object-cover" />
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-[#0F0A19] text-sm font-medium">
                    {fileName}
                  </p>
                  <p className="text-[#0F0A19B2] text-xs font-normal">
                    {fileSize}KB
                  </p>
                </div>
              </div>

              <button onClick={handleDelete}>
                <Image
                  src="/assets/icons/delete-icon.svg"
                  alt="delete-icon"
                  width={20}
                  height={20}
                  loading="lazy"
                />
              </button>
            </div>
          )}

          <div className="flex flex-col gap-y-4">
            <input
              type="text"
              placeholder={t("store.uploadstore.companyname")}
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 rounded-[10px] bg-[#FAFAFA] w-full"
            />

            <input
              type="text"
              placeholder={t("store.uploadstore.enteryourphone")}
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
            />

            <input
              type="text"
              placeholder={t("store.uploadstore.enteryourwebsite")}
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
            />

            <input
              type="text"
              placeholder={t("store.uploadstore.fiscalnumber")}
              className="border placeholder:text-sm placeholder:text-[#9D9D9D] px-5 py-4 border-[#E7E7E7] flex-1 w-full rounded-[10px] bg-[#FAFAFA]"
            />

            <button className="bg-[#3D2278] mt-4 text-white rounded-[10px] w-full min-h-12 md:min-h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-opacity duration-300 hover:opacity-90">
              {t("btns.submitrequest")}
            </button>

            <button
              onClick={onClose}
              className="border-[1.5px] border-[#3D2278] text-[#3D2278] rounded-[10px] w-full h-12 md:h-[52px] text-center px-3 text-sm md:text-lg tracking-[2%] font-medium transition-all duration-300 hover:bg-[#3D2278] hover:text-white"
            >
              {t("btns.cancel")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UploadStoreModal;
