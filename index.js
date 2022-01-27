// Your Code Here+
let leftOrRight  = window.prompt('Do you head left or right?')
console.log(leftOrRight)
if(leftOrRight === 'left')
{
    let followOrContinue = window.prompt(`You come across a stray cat. 
It scampers off down a small hole, just large enough for you to crawl through. 
Do you follow it, or continue on your path (follow OR continue)`)
    if (followOrContinue === 'follow') 
    {
        let stayOrSpreadWord = window.prompt('You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.')
        if(stayOrSpreadWord === 'stay') 
        {
            window.prompt('You live happily amongs the cats for the rest of your days.')
        } 
        else if (stayOrSpreadWord === 'spread the word') 
        {
            window.alert('After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.')
        }

    }else if (followOrContinue === 'continue')
    {
        let ladderOrStaircase = window.prompt('You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?')
        if (ladderOrStaircase === 'ladder')
        {
            window.alert('After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.')
        }
        else if(ladderOrStaircase=== 'staircase')
        {
            window.alert('After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.')

        }
    }
} else if(leftOrRight === 'right') {
    let pastOrStay = window.prompt('You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Do you run past or stay? (past OR stay)')
    switch (pastOrStay)
    {
        case 'past' :
            let stayOrRun = window.prompt('The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:')
            break
        case 'stay' :
             window.prompt('After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?')
            break

    }
}