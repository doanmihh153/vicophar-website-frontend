"use client";

import React from "react";

export default function StoryTechnology() {
    return (
        <section className="pb-10 pt-32 tablet:pb-16 tablet:pt-48 desktop:pt-60 bg-white">
            <div className="vico-container text-center">
                <h2 className="text-h2 font-bold text-vico-green mb-4 uppercase">
                    CÔNG NGHỆ
                </h2>
                <p className="text-body text-center font-normal text-vico-text max-w-3xl mx-auto mb-10">
                    Các sản phẩm của Vicophar hiện nay được sản xuất tại nhà máy
                    dược phẩm, đạt chuẩn GMP của bộ Y tế
                </p>

                <div className="relative w-full max-w-2xl mx-auto">
                    <img
                        src="/imgs/storyour/GMP-VICOPHAR-01.svg"
                        alt="Vicophar - Nhà máy sản xuất đạt chuẩn GMP Bộ Y tế"
                        className="w-full h-auto"
                        loading="lazy"
                    />
                </div>
            </div>
        </section>
    );
}
