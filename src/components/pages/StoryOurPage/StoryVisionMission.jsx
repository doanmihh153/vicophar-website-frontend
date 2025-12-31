"use client";

import React from "react";
import Image from "next/image";
import { storyVisionMission } from "@/data/storyPage";
import { VisionMissionIcon, CoreValuesIcon } from "@/assets/icons";

export default function StoryVisionMission() {
    return (
        <section className="py-10 tablet:py-16 desktop:py-20 pt-20 desktop:pt-24 -mb-20 tablet:-mb-32 desktop:-mb-40 relative z-10">
            <div className="vico-container">
                {/* Grid 12 cột giống StoryIntro */}
                <div className="grid grid-cols-1 desktop:grid-cols-12 gap-4 desktop:gap-6">
                    {/* BÊN TRÁI - 6 cột, 2 hàng */}
                    <div className="desktop:col-span-6 space-y-6">
                        {/* Hàng 1: Hình ảnh */}
                        <div className="relative h-[300px] tablet:h-[400px] desktop:h-[450px] rounded-lg overflow-hidden">
                            <Image
                                src="/imgs/storyour/nha-may-san-xuat-thuoc.webp"
                                alt="Vicophar - Tầm nhìn và Sứ mệnh"
                                fill
                                className="object-cover object-center"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                                priority
                            />
                        </div>

                        {/* Hàng 2: Cam kết */}
                        <div>
                            <h2 className="text-h2 font-bold text-vico-green mb-4 uppercase">
                                VICOPHAR VIỆT NAM - CAM KẾT
                            </h2>
                            <div className="space-y-4">
                                <p className="text-body font-normal text-vico-text text-justify">
                                    <strong className="font-bold text-vico-gray-900">
                                        Tận tâm - Uy tín:
                                    </strong>{" "}
                                    Hành động với toàn bộ tâm huyết và trách
                                    nhiệm trong từng sản phẩm.
                                </p>
                                <p className="text-body font-normal text-vico-text text-justify">
                                    <strong className="font-bold text-vico-gray-900">
                                        Chuyên nghiệp - Gắn kết:
                                    </strong>{" "}
                                    Mỗi thành viên Vicophar là một mắt xích
                                    trong hệ thống vận hành hiệu quả, gắn bó và
                                    phát triển.
                                </p>
                                <p className="text-body font-normal text-vico-text text-justify">
                                    <strong className="font-bold text-vico-gray-900">
                                        Hướng đến cộng đồng và phát triển bền
                                        vững:
                                    </strong>{" "}
                                    Cam kết vì sức khỏe cộng đồng, đồng thời
                                    nâng cao giá trị cho cổ đông, khách hàng và
                                    xã hội.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* BÊN PHẢI - 6 cột, chia làm 2 cột nhỏ (mỗi cột 3 cols) */}
                    <div className="desktop:col-span-6 grid grid-cols-1 desktop:grid-cols-6 gap-4 desktop:gap-6 desktop:grid-rows-1">
                        {/* Cột 1: Tầm nhìn + Sứ mệnh - 3 cols */}
                        <div className="desktop:col-span-3 flex flex-col items-center h-full">
                            {/* Icon tròn cố định 172x172 - nằm trên */}
                            <div className="hidden desktop:flex w-[172px] h-[172px] bg-vico-green rounded-full items-center justify-center shadow-lg -mb-20 z-10 relative shrink-0">
                                <VisionMissionIcon className="h-20 w-20 text-white" />
                            </div>

                            {/* Card Content - chiếm full 3 cột, nằm dưới icon */}
                            <div className="w-full bg-white rounded-2xl shadow-[0px_10px_40px_rgba(13,176,97,0.14)] px-4 pb-4 pt-8 desktop:pt-24 border-4 border-white flex-1">
                                {/* Tầm Nhìn */}
                                <h2 className="text-center text-h2 font-bold text-vico-green mb-4 uppercase">
                                    TẦM NHÌN
                                </h2>
                                <p className="text-body font-normal text-vico-text text-justify">
                                    {storyVisionMission.vision.content}
                                </p>
                                <div className="h-4"></div>
                                {/* Sứ Mệnh */}
                                <h2 className="text-center text-h2 font-bold text-vico-green mb-4 uppercase">
                                    SỨ MỆNH
                                </h2>
                                <p className="text-body font-normal text-vico-text text-justify">
                                    {storyVisionMission.mission.content}
                                </p>
                            </div>
                        </div>

                        {/* Cột 2: Giá trị cốt lõi - 3 cols */}
                        <div className="desktop:col-span-3 flex flex-col items-center h-full">
                            {/* Icon tròn cố định 172x172 - nằm trên */}
                            <div className="hidden desktop:flex w-[172px] h-[172px] bg-vico-green rounded-full items-center justify-center shadow-lg -mb-20 z-10 relative shrink-0">
                                <CoreValuesIcon className="h-20 w-20 text-white" />
                            </div>

                            {/* Card Content - chiếm full 3 cột, nằm dưới icon */}
                            <div className="w-full bg-white rounded-2xl shadow-[0px_10px_40px_rgba(13,176,97,0.14)] px-4 pb-6 pt-8 desktop:pt-24 border-4 border-white flex-1">
                                {/* Title */}
                                <h2 className="text-center text-[1.5rem] tablet:text-[2rem] font-bold text-vico-green mb-4 uppercase leading-tight">
                                    GIÁ TRỊ CỐT LÕI
                                </h2>

                                {/* Core Values List */}
                                <div className="space-y-4">
                                    {storyVisionMission.coreValues.values.map(
                                        (value, index) => (
                                            <p
                                                key={index}
                                                className="text-body font-normal text-vico-text text-justify"
                                            >
                                                <strong className="font-bold text-vico-gray-900">
                                                    {value.title}
                                                </strong>{" "}
                                                {value.description}
                                            </p>
                                        )
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
