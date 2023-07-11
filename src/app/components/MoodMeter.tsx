"use client"

import React, {useEffect, useState} from 'react';
import {Button, Progress, rem, Slider} from "@mantine/core";
import {Heart, Heartbeat, HeartBroken, Settings} from "tabler-icons-react";
import NavButton from "@/app/components/NavButton";


interface MoodMeterProps {
    name: string
    namePartner: string
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
        try {
            updateMood(moodId, e)
        } catch (e) {
            console.log(e)
        }

    }

    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const MOOD_MARKS_DESKTOP = [
        {value: 0, label: 'Lass mich!', icon: '🤬'},
        {value: 25, label: 'Sauer', icon: '😡'},
        {value: 50, label: 'Verstimmt', icon: '🙄'},
        {value: 75, label: 'Bereit zu reden', icon: '😘'},
        {value: 100, label: 'Entschuldigung!', icon: '🥰'},
    ];

    const MOOD_MARKS_MOBILE = [
        {value: 0, icon: 'Lass mich!', label: '🤬'},
        {value: 25, icon: 'Sauer', label: '😡'},
        {value: 50, icon: 'Verstimmt', label: '🙄'},
        {value: 75, icon: 'Bereit zu reden', label: '😘'},
        {value: 100, icon: 'Entschuldigung!', label: '🥰'},
    ];


    return (
        <Slider
            className={"pb-8 pt-8 h-24"}

            value={mood}
            onChange={onMoodChange}
            onChangeEnd={onMoodChangeEnd}

            thumbSize={24}
            thumbChildren={mood >= 50 ? <Heart color={moodColor.primary} size={rem(48)}/> :
                <HeartBroken color={moodColor.primary} size={rem(48)}/>}

            min={0}
            max={100}
            step={25}
            // @ts-ignore
            label={(val) => windowSize[0] >= 768 ? MOOD_MARKS_DESKTOP.find((mark) => mark.value === val).icon : MOOD_MARKS_MOBILE.find((mark) => mark.value === val).icon}
            // @ts-ignore
            marks={windowSize[0] >= 768 ? MOOD_MARKS_DESKTOP : MOOD_MARKS_MOBILE}

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

const MoodMeter = ({name, namePartner, moodId, mood = 100, updateMood}: MoodMeterProps) => {

    const [moodValue, setMoodValue] = useState(mood);
    const [inEditMode, setInEditMode] = useState(false);
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
            <div className={"flex flex-row justify-between"}>
                <NavButton btnTxt={"Was ich an dir Liebe"} to={`/${name}/was-wir-aneinander-haben`}
                           icon={<Heartbeat size="1rem"/>}/>
                <Button variant="filled"
                        onClick={() => {
                            setInEditMode(!inEditMode)
                        }} leftIcon={<Settings size="1rem"/>}>Ändern</Button>
            </div>
            {inEditMode ?
                <MoodSlider moodId={moodId}
                            mood={moodValue}
                            onMoodChange={setMoodValue}
                            updateMood={updateMood}
                            moodColor={color}
                            name={name}
                            namePartner={namePartner}/> :
                <div className={"min-h-full"}/>}
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
            <div className={"flex flex-row justify-center pt-32"}>
                <NavButton btnTxt={`Wie ist ${namePartner} drauf?`} to={`/${namePartner.toLowerCase()}`}
                           icon={<Heart size="2rem"/>}/>
            </div>
        </>

    )
}

export default MoodMeter;