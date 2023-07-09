"use client"

import React, {useEffect, useState} from 'react';
import {Progress, rem, Slider} from "@mantine/core";
import {IconHeart, IconHeartBroken} from '@tabler/icons-react';


interface MoodMeterProps {
    moodId: string
    mood: number
    updateMood: (id: string, value: number) => void
}

interface MoodSliderProps extends MoodMeterProps {
    moodId: string
    moodColor: { primary: string, secondary: string }
    onMoodChange: (e: number) => void
}

const MoodSlider = ({moodId, mood, moodColor, updateMood, onMoodChange}: MoodSliderProps) => {

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

            thumbSize={24}
            thumbChildren={mood >= 50 ? <IconHeart color={moodColor.primary} size={rem(48)}/> :
                <IconHeartBroken color={moodColor.primary} size={rem(48)}/>}

            min={0}
            max={100}
            step={25}
            // @ts-ignore
            label={(val) => MOOD_MARKS.find((mark) => mark.value === val).icon}
            marks={MOOD_MARKS}

            labelTransition="skew-down"
            labelTransitionDuration={150}
            labelTransitionTimingFunction="ease"

            styles={{
                bar: {
                    transition: "background-color 1s ease-out",
                    backgroundColor: `${moodColor.primary}`
                },
                thumb: {
                    transition: "background-color 1s ease-out",
                    border: `2px solid ${moodColor.primary}`,
                    padding: rem(0),
                    backgroundColor: `${moodColor.secondary}`
                },
            }}
        />
    )
}

const MoodMeter = ({moodId, mood = 100, updateMood}: MoodMeterProps) => {

    const [moodValue, setMoodValue] = useState(mood);
    const [inEditMode, setInEditMode] = useState(true);
    const [color, setColor] = useState({primary: '#489380', secondary: '#77dfa9'});

    const MOOD_COLORS = {
        "good": {primary: '#489380', secondary: '#77dfa9'},
        "medium": {primary: '#EB8014', secondary: '#fdbf68'},
        "bad": {primary: '#D75050', secondary: '#e96d75'}
    }

    useEffect(() => {
        if (moodValue > 70) {
            setColor(MOOD_COLORS.good)
            return
        }
        if (moodValue > 40) {
            setColor(MOOD_COLORS.medium)
            return
        }
        setColor(MOOD_COLORS.bad)
    }, [moodValue])

    return (
        <>
            {inEditMode ?
                <MoodSlider moodId={moodId}
                            mood={moodValue}
                            onMoodChange={setMoodValue}
                            updateMood={updateMood} moodColor={color}/> : null}
            <Progress className={"h-16"}
                      value={moodValue}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      styles={{
                          root: {
                              transition: "background-color 1s ease-out",
                              backgroundColor: `${color.secondary}`
                          },
                          bar: {
                              backgroundSize: "4.25rem 4.25rem",
                              backgroundImage: "linear-gradient(90deg, rgba(255, 255, 255, 0.05) 50%, transparent 15%, transparent)",
                              animation: "moveltr 4000ms linear infinite",
                              transition: "background-color 1s ease-out",
                              backgroundColor: `${color.primary}`
                          }
                      }}
            />
        </>

    )
}

export default MoodMeter;