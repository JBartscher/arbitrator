"use client"

import React from 'react';
import {Progress} from "@mantine/core";


const MoodMeter = ({value = 100}: { value: number }) => {
    return (

        <Progress className={"h-16"}
                  value={value}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  styles={{
                      bar: {
                          backgroundSize: "4.25rem 4.25rem",
                          backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 50%, transparent 15%, transparent)",
                          animation: "moveltr 4000ms linear infinite"
                      }
                  }}
        />

    )
}

export default MoodMeter;