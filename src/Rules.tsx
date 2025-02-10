const Rules = () => {
    return (
        <>
             <h1 className='text-5xl font-bold font-primary mb-24 mt-3'>Rules</h1>
             <div className="grid grid-cols-1 justify-items-center  ">
          <ol className="text-base text-left">
              <li className="mb-4"><strong>Objective</strong>: Identify and click the box that matches the color of the highlighted (pulsing) box. The buttons are disabled when a box is pulsing.</li>
              <li className="mb-4"><strong>Gameplay</strong>
                  <ol>
                      <li>The boxes will shuffle.</li>
                      <li>One box will pulse for a few seconds—this is your clue!</li>
                      <li>Click the box that you believe matches the pulsing box’s color.</li>
                  </ol>
              </li>
              <li className="mb-4"><strong>Scoring:</strong>
                  <ol>
                      <li><strong>Correct guess:</strong> +5 points</li>
                      <li><strong>Wrong guess:</strong> -5 points</li>
                  </ol>
              </li>
              
              <li className="mb-4"><strong>Continuation:</strong> The game continues until you decide to stop playing.</li>
              <li className="mb-4"><strong>Resetting the Game:</strong>: <ol>
                      <li>To reset, go to the homepage and click the Reset button.</li>
                      <li>Click the logo to return to the homepage.</li>
                  </ol>
              </li>
          </ol>


          <p className="mt-3">Good luck and have fun!</p>
      </div>
        </>
      
    )
    }

    export default Rules;