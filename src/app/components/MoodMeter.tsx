"use client"

import React, {useState} from 'react';
import {Progress, Slider} from "@mantine/core";
import {IconHeart, IconHeartBroken} from '@tabler/icons-react';


interface MoodMeterProps {
    moodId: string
    mood: number
    updateMood: (id: string, value: number) => void
}

interface MoodSliderProps extends MoodMeterProps {
    moodId: string
    onMoodChange: (e: number) => void
}

const MoodSlider = ({moodId, mood, updateMood, onMoodChange}: MoodSliderProps) => {

    const onMoodChangeEnd = (e: number) => {
        console.log(e)
        updateMood(moodId, e)
    }

    const MOOD_MARKS = [
        {value: 0, label: 'Lass mich in Ruhe', icon: '🤬'},
        {value: 25, label: 'Sauer', icon: '😡'},
        {value: 50, label: 'Verstimmt', icon: '🙄'},
        {value: 75, label: 'Bereit zu reden', icon: '😘'},
        {value: 100, label: 'Entschuldigung!', icon: '🥰'},
    ];

    return (
        <Slider
            className={"pb-8"}

            value={mood}
            onChange={onMoodChange}
            onChangeEnd={onMoodChangeEnd}

            thumbSize={20}
            thumbChildren={mood >= 50 ? <IconHeart size="1rem"/> : <IconHeartBroken size="1rem"/>}

            min={0}
            max={100}
            step={25}
            // @ts-ignore
            label={(val) => MOOD_MARKS.find((mark) => mark.value === val).icon}
            marks={MOOD_MARKS}

            labelTransition="skew-down"
            labelTransitionDuration={150}
            labelTransitionTimingFunction="ease"
            // styles={{ markLabel: { display: 'none' } }}
        />
    )
}

const MoodMeter = ({moodId, mood = 100, updateMood}: MoodMeterProps) => {

    const [moodValue, setMoodValue] = useState(mood);
    const [inEditMode, setInEditMode] = useState(true);

    return (
        <>
            {inEditMode ?
                <MoodSlider moodId={moodId}
                            mood={moodValue}
                            onMoodChange={setMoodValue}
                            updateMood={updateMood}/> : null}
            <Progress className={"h-16"}
                      value={moodValue}
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
        </>

    )
}

export default MoodMeter;