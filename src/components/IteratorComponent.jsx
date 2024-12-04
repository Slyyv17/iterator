// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Iterator from "../utils/Iterator";
import Footer from "./Footer";

// eslint-disable-next-line react/prop-types
const IteratorComponent = ({ items }) => {
    const [iterator] = useState(new Iterator(items));
    const [currentSong, setCurrentSong] = useState(null);
    const [message, setMessage] = useState("");

    const handleNext = () => {
        if (iterator.hasNext()) {
            setCurrentSong(iterator.next());
            setMessage("");
        } else {
            setMessage("No more songs to display.");
        }
    };

    const handlePrevious = () => {
        if (iterator.index > 0) {
            setCurrentSong(iterator.previous());
            setMessage("");
        } else {
            setMessage("No previous songs to display.");
        }
    };

    const handleReset = () => {
        iterator.reset();
        setCurrentSong(null);
        setMessage("Songs have been reset.");
    };

    return (
        <main className="flex flex-col items-center justify-center w-full gap-2 p-4 h-fit">
            <h2 className="text-4xl font-bold text-center text-white">
                Iterator Design Pattern
            </h2>

            {/* Display current song details */}
            {currentSong ? (
                <div className="flex flex-col items-center justify-center text-center">
                    <img
                        src={currentSong.image}
                        alt={`${currentSong.title} album cover`}
                        className="object-cover w-64 h-64 rounded-md"
                    />
                    <h3 className="mt-2 text-2xl font-semibold">{currentSong.title}</h3>
                    <p className="text-lg text-gray-600">{currentSong.artiste}</p>
                    <audio
                        controls
                        className="mt-4"
                        src={currentSong.audioSrc}
                    >
                        Your browser does not support the audio element.
                    </audio>
                </div>
            ) : (
                <p className="text-lg text-gray-600">No song selected</p>
            )}

            {/* Buttons */}
            <div className="flex items-center justify-center gap-4 p-4 w-fit h-fit">
                <button
                    className="w-24 p-2 text-lg text-white capitalize bg-green-500 border-none rounded h-fit hover:bg-green-700"
                    onClick={handleNext}
                >
                    Next
                </button>
                <button
                    className="w-24 p-2 text-lg text-white capitalize bg-blue-500 border-none rounded h-fit hover:bg-blue-700"
                    onClick={handlePrevious}
                >
                    Previous
                </button>
                <button
                    className="w-24 p-2 text-lg text-white capitalize bg-red-700 border-none rounded h-fit hover:bg-red-900"
                    onClick={handleReset}
                >
                    Reset
                </button>
            </div>

            {message && <p className="text-lg text-red-600">{message}</p>}

            {/* Footer */}
            <Footer />
        </main>
    );
};

export default IteratorComponent;
