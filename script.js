const $ = selector => document.querySelector(selector);

// MathML roots keep the vinculum aligned with tall, stacked fractions.
// These helpers are used only by the Mechanical Components & Assemblies bank.
function componentMathRoot(mathml) {
  return `<math class="mathml-root" xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mrow>${mathml}</mrow></msqrt></math>`;
}

function componentFractionRoot(numerator, denominator) {
  return componentMathRoot(`<mrow><mo>(</mo><mfrac><mrow>${numerator}</mrow><mrow>${denominator}</mrow></mfrac><mo>)</mo></mrow>`);
}

function componentMathFraction(numerator, denominator) {
  return `<math class="mathml-root" xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow>${numerator}</mrow><mrow>${denominator}</mrow></mfrac></math>`;
}

function componentExpressionRoot(expression) {
  return componentMathRoot(`<mrow><mo>(</mo><mrow>${expression}</mrow><mo>)</mo></mrow>`);
}

// Question banks are deliberately stored in the site.  Nothing is read from
// the source text files when a visitor takes a quiz.
const banks = {
  basic: [
    {
      id: '1701004', complexity: 'Medium',
      text: 'Determine the maximum distance from the edge of the part to the edge of the hole.',
      image: 'Screenshots and Questions/Questions/Basic Engineering Practice Questions/problem 1 image.png',
      choices: ['1.2425', '1.2675', '1.2625', '1.2375'], answer: 2,
      blocks: [
        { text: 'Calculate the resultant condition boundary of the internal feature. The maximum edge distance will be at the bottom edge when the holes have the smallest diameter.' },
        { text: 'Edge Distance= Basic Dimension + Position tolerance- (MMC-Smallest size/2)' },
        { text: 'Edge Distance = 2+0.010-(1.5-0.0050)/2' },
        { text: 'Edge Distance = 1.2625' }
      ],
      reference: ''
    },
    {
      id: '1701005', complexity: 'Easy',
      text: 'Which one of the following is an example of an extensive property?',
      choices: ['Temperature (T)', 'Mass (m)', 'Specific volume (v)', 'Pressure (P)'], answer: 1,
      blocks: [
        { text: 'An extensive property is one that depends on the quantity of matter that is being evaluated (meaning it is mass dependent).' },
        { text: 'Temperature is an intensive property. The temperature of a system is the same as the temperature of any specific point within the system (thus not dependent on the mass of the system).' },
        { text: 'Mass is an extensive property. The mass of a system is not the same as if you take a specific portion of the mass of the same system.' },
        { html: 'Specific volume is an intensive property. Several specific parameters are inherently intensive since mass is divided out. Specific volume:<br><span class="math">v = <span class="fraction"><span>volume</span><span>mass</span></span></span>' },
        { text: 'Pressure is an intensive property. The pressure of a system is the same as the pressure of any specific point within the system (thus not dependent on the mass of the system).' }
      ],
      reference: ''
    },
    {
      id: '1701006', complexity: 'Easy',
      text: 'Which of the following is not a unitless quantity?',
      choices: ['Engineering strain (&epsilon;)', 'Specific gravity (SG)', 'Coefficient of static friction (&mu;<sub>s</sub>)', 'Polar moment of inertia (J)'], answer: 3,
      blocks: [
        { text: 'Engineering strain is the difference in length divided by the original length of the specimen. Thus, it does not have any units.' },
        { text: 'Specific gravity is the comparison of a specific fluid&rsquo;s density to the density of another specific fluid (in most cases it is compared to water.) Thus, it does not have any units.' },
        { text: 'The coefficient of static friction is a coefficient and does not carry any units.' },
        { html: 'The polar moment of inertia is dependent on the body that is being analyzed, but it is dependent on the term of (length)<sup>4</sup>. Thus, it does have units.' }
      ],
      reference: ''
    },
    {
      id: '1701010', complexity: 'Medium',
      text: 'The following symbol is found on a surface of a drawing for a specific part that a foundry intends to produce. Based on this symbol how many inches must the foundry overcast this surface to eventually have it machined down to the correct size?',
      image: 'Screenshots and Questions/Questions/Basic Engineering Practice Questions/problem 4 image.png',
      choices: ['0.12', '0.18', '0.21', '0.24'], answer: 1,
      blocks: [
        { html: 'Refer to the <i>NCEES PE Mechanical Reference Handbook:</i> Interpretation of Technical Drawings: Symbols for Drawings.' },
        { text: 'The symbol indicates that 4.5 mm must be machined off the part. This indicates the amount the part must be overcast.' },
        { text: 'First convert 4.5 mm to cm:' },
        { math: '4.5 mm &times; <span class="fraction"><span>1 cm</span><span>10 cm</span></span> = 0.45 cm' },
        { text: 'Convert to inches:' },
        { math: '1 cm = 0.394 in' },
        { math: '0.45 cm &times; <span class="fraction"><span>0.394 in</span><span>1 cm</span></span> = 0.177 in' },
        { text: 'The answer is most nearly 0.18 in' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Interpretation of Technical Drawings > Symbols for Drawings'
    },
    {
      id: '1701015', complexity: 'Medium',
      html: 'A steel alloy has a fracture toughness of 80 ksi&radic;in. This can be approximated in SI units as:',
      choices: ['90 Pa&radic;m', '90 kPa&radic;m', '90 MPa&radic;m', '90 N&radic;m'], answer: 2,
      blocks: [
        { html: 'The proper units for fracture toughness in the SI system:<br>MPa&radic;m' },
        { text: 'From the PE Reference Handbook, we can utilize the conversion factor for psi to Pa.' },
        { math: 'K<sub>IC</sub> = 80 ksi&radic;in = 80x10<sup>3</sup> psi&radic;in &there4; 80x10<sup>3</sup> psi&radic;in <span class="fraction"><span>6895 Pa</span><span>1 psi</span></span> = 5.516x10<sup>8</sup> Pa&radic;in' },
        { text: 'Analogously, we can utilize the conversion on Pg. 2 for inches to meters.' },
        { math: '1in<span class="fraction"><span>0.0254m</span><span>1 in</span></span> &there4; &radic;1 in <span class="radical">&radic;<span class="radicand"><span class="fraction"><span>0.0254m</span><span>1 in</span></span></span></span><sup>1</sup>&frasl;<sub>2</sub> = 1&radic;in <span class="fraction"><span>0.159&radic;m</span><span>1&radic;in</span></span>' },
        { text: 'thus, we see:' },
        { math: 'K<sub>IC</sub> = 5.516x10<sup>8</sup> Pa&radic;in <span class="fraction"><span>0.159&radic;m</span><span>1&radic;in</span></span> &asymp; 88x10<sup>6</sup> Pa&radic;m' },
        { math: 'Or, 90x10<sup>6</sup> Pa&radic;m' },
        { math: 'Or, 90 MPa&radic;m' },
        { text: 'Thus, the correct answer is C.' }
      ],
      reference: 'NCEES FE Reference Handbook, "Properties of Materials.", p. 2'
    },
    {
      id: '1701016', complexity: 'Hard',
      text: 'A municipality is considering the construction of a parking garage. The construction cost is $5 million, and it will require $1 million of maintenance every 5 years during its 20-year lifespan. At the end of its life, demolition is expected to cost $5 million. Revenue from parking permits is projected to be $750,000 per year for the first decade and $1.2 million per year for the second decade. What is the net present value of this project given a discount rate of 5%?',
      choices: ['$2.5 million', '$2.7 million', '$6.3 million', '$6.5 million'], answer: 1,
      blocks: [
        { html: 'Refer to <i>NCEES PE Mechanical Reference Handbook:</i> Economic Analysis: Nomenclature and Definitions.' },
        { image: 'Screenshots and Questions/Solutions/Basic Engineering Practice/problem 6 image solution.png', alt: 'Parking garage cash-flow diagram' },
        { text: 'NPV of each component:' },
        { text: 'Construction:\n− $ 5 million' },
        { text: 'Maintenance:' },
        { math: '− $ 1 million &times; <span class="fraction"><span>P</span><span>F(n = 5, &nbsp; i = 5%)</span></span> − $ 1 million &times; <span class="fraction"><span>P</span><span>F(n = 10,i = 5%)</span></span> − $ 1 million &times; <span class="fraction"><span>P</span><span>F(n = 15,i = 5%)</span></span> =' },
        { math: '− $ 0.7835 million − $ 0.6139 million − $ 0.4810 million = − $ 1.8784 million' },
        { text: 'Demolition:' },
        { math: '− $ 5 million &times; <span class="fraction"><span>P</span><span>F(n = 20, &nbsp; i = 5%)</span></span> = − $ 5 million &times; 0.3769 = − $ 1.8845 million' },
        { text: 'Revenue:' },
        { math: '$ 1.2 million &times; <span class="fraction"><span>P</span><span>A(n = 20, &nbsp; i = 5%)</span></span> − ($ 1.2 million − $ 0.75 million) &times; <span class="fraction"><span>P</span><span>A(n = 10,i = 5%)</span></span> =' },
        { math: '$ 1.2 million &times; 12.4622 − $ 0.45 million &times; 7.7217 = $ 11.480 million' },
        { text: 'Total:' },
        { math: '− $ 5 million − $ 1.8784 million − $ 1.8845 million + $ 11.480 million = $ 2.72 million' },
        { text: 'Answer A includes an extra maintenance payment at year 20.' },
        { text: 'Answer B is correct.' },
        { text: 'Answer C uses incorrect discounting of second decade revenues.' },
        { text: 'Answer D does not use discounting.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Economic Analysis > Nomenclature and Definitions'
    },
    {
      id: '1701017', complexity: 'Hard',
      text: 'An investor pays $95 to buy a bond that pays $100 at maturity in 10 years. The investor also receives $2 per year in interest payments. What is the investor’s annualized rate of return?',
      choices: ['1.8%', '2.0%', '2.4%', '2.6%'], answer: 3,
      blocks: [
        { html: 'Refer to <i>NCEES PE Mechanical Reference Handbook:</i> Economic Analysis: Nomenclature and Definitions.' },
        { text: 'Diagram:' },
        { image: 'Screenshots and Questions/Solutions/Basic Engineering Practice/problem 7 image solution 1.jpg', alt: 'Bond cash-flow diagram' },
        { text: 'NPV of each component:' },
        { text: 'Purchase:\n− $ 95' },
        { text: 'Interest:\n$ 2 · P/A(n = 10,i = ?)' },
        { text: 'Maturity:\n$ 100 · P/F(n = 10,i = ?)' },
        { text: 'Total:\n− $ 95 + $ 2 · P/A(n = 10,i = ?) + $ 100 · P/F(n = 10,i = ?) = 0' },
        { text: 'Solve by guess & check and linear interpolation:' },
        { text: 'Guess & Check:' },
        { image: 'Screenshots and Questions/Solutions/Basic Engineering Practice/problem 7 image solution 2.jpg', alt: 'Rate-of-return interpolation table' },
        { text: 'Interpolate:' },
        { math: 'y = mx+b; m = <span class="fraction"><span>− $ 3.53 − $ 5</span><span>3% − 2%</span></span> = − $ 8.53/%;' },
        { math: 'y = − 8.53 <span class="fraction"><span>$</span><span>%</span></span>(ROR − 2%) + $ 5 = 0' },
        { math: 'ROR = 2.58% /yr.' },
        { html: 'Notes: In this case, the rate of return can be estimated by summing a rate of return from the interest payments<br><span class="math">(<span class="fraction"><span>$2/yr</span><span>$95</span></span> = 2.11%/yr)</span><br>and the maturity<br><span class="math">¹⁰√<span style="border-top: 1px solid;">$ 100/$ 95−1</span> = 0.51%/yr): 2.11%/yr +0.51%/yr = 2.62%/yr.</span>' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Economic Analysis > Nomenclature and Definitions'
    },
    {
      id: '1701019', complexity: 'Medium',
      text: 'What is the maximum amount of slack (days) of activities in the following project workflow?',
      table: '<table class="question-data-table workflow-table"><thead><tr><th>Activity</th><th>Duration (days)</th><th>Predecessors</th></tr></thead><tbody><tr><td>A</td><td>2</td><td>None (start)</td></tr><tr><td>B</td><td>1</td><td>A</td></tr><tr><td>C</td><td>3</td><td>A</td></tr><tr><td>D</td><td>4</td><td>B</td></tr><tr><td>E</td><td>2</td><td>B</td></tr><tr><td>F</td><td>2</td><td>C</td></tr><tr><td>G</td><td>1</td><td>D</td></tr><tr><td>H</td><td>3</td><td>E, F</td></tr><tr><td>I</td><td>2</td><td>F</td></tr><tr><td>J</td><td>3</td><td>H, I</td></tr><tr><td>K</td><td>2</td><td>G, H</td></tr><tr><td>L</td><td>4</td><td>G, J</td></tr><tr><td>M</td><td>1</td><td>K, L</td></tr></tbody></table>',
      choices: ['5', '4', '3', '2'], answer: 0,
      blocks: [
        { text: 'Based on the analysis completed in the chart below, the maximum allowable slack is 5 days. Therefore, A is the correct answer.' },
        { table: '<table class="solution-workflow-table"><thead><tr><th>Activity</th><th>Duration<br>(days)</th><th>Predecessors</th><th>Early<br>Start<br>(ES)</th><th>Early<br>Finish<br>(EF)</th><th>Late<br>Start<br>(LS)</th><th>Late<br>Finish<br>(LF)</th><th>Slack</th></tr></thead><tbody><tr><td>A</td><td>2</td><td>None (start)</td><td>0</td><td>2</td><td>0</td><td>2</td><td>0</td></tr><tr><td>B</td><td>1</td><td>A</td><td>2</td><td>3</td><td>4</td><td>5</td><td>2</td></tr><tr><td>C</td><td>3</td><td>A</td><td>2</td><td>5</td><td>2</td><td>5</td><td>0</td></tr><tr><td>D</td><td>4</td><td>B</td><td>3</td><td>7</td><td>8</td><td>12</td><td>5</td></tr><tr><td>E</td><td>2</td><td>B</td><td>3</td><td>5</td><td>5</td><td>7</td><td>2</td></tr><tr><td>F</td><td>2</td><td>C</td><td>5</td><td>7</td><td>5</td><td>7</td><td>0</td></tr><tr><td>G</td><td>1</td><td>D</td><td>7</td><td>8</td><td>12</td><td>13</td><td>5</td></tr><tr><td>H</td><td>3</td><td>E, F</td><td>7</td><td>10</td><td>7</td><td>10</td><td>0</td></tr><tr><td>I</td><td>2</td><td>F</td><td>7</td><td>9</td><td>8</td><td>10</td><td>1</td></tr><tr><td>J</td><td>3</td><td>H, I</td><td>10</td><td>13</td><td>10</td><td>13</td><td>0</td></tr><tr><td>K</td><td>2</td><td>G, H</td><td>10</td><td>12</td><td>15</td><td>17</td><td>5</td></tr><tr><td>L</td><td>4</td><td>G, J</td><td>13</td><td>17</td><td>13</td><td>17</td><td>0</td></tr><tr><td>M</td><td>1</td><td>K, L</td><td>17</td><td>18</td><td>17</td><td>18</td><td>0</td></tr></tbody></table>' },
        { text: 'Slack = LS-ES or LF-EF;  LF=EF-t' },
        { text: 'Procedure to calculate LF and LS.' },
        { text: 'Once the ES and EF are calculated. The LF and LS are calculated starting at the bottom of the table, activity M. The value of D activity comes from LS from activity G.' },
        { text: 'To tabulate the LF:' },
        { text: 'The Value of EF must go to LF and work backward from Activity M to A subtracting duration "days".' },
        { text: 'For Example:' },
        { text: 'Activity M' },
        { text: 'LF=EF=18 and LS=LF-t=18-1=17.' },
        { text: 'This value  "17" is placed a the predecessor "L" and "K" and so on.' },
        { text: 'To Tabulate LS:' },
        { text: '"It is recommended to perform the task separately or use the graphic tools because of the multiple predecessors in activities M, L, K, J and H.' },
        { text: 'At a determined activity, the lowest LF gets chosen to calculate the activity LS"' }
      ],
      reference: ''
    },
    {
      id: '1701023', complexity: 'Easy',
      text: 'Under this condition, the part is dimensioned to yield a higher weighing part while remaining within tolerance.',
      choices: ['Statistical Tolerance Condition', 'Maximum Material Condition', 'Projected Tolerance Condition', 'Least Material Condition'], answer: 1,
      blocks: [
        { html: 'Refer to definitions of MMC and LMC in the <i>NCEES FE Reference Handbook,</i> v. 10.0, pg. 441.' }
      ],
      reference: ''
    },
    {
      id: '1701027', complexity: 'Medium',
      text: 'A piece of machinery has a purchase value of $12,000 and a salvage value of $2,000 after 5 years. Calculate the book value on year 4 using the straight-line method of depreciation, d = 15%.',
      choices: ['$4,000', '$2,000', '$10,000', '$2,400'], answer: 0,
      blocks: [
        { html: 'Refer to the formula for the straight-line method in the <i>NCEES PE Mechanical Reference Handbook:</i> Economic Analysis: Depreciation. &nbsp;The question asks how much has yet to be depreciated after four years. &nbsp;Depreciation in each year is multiplied by four years, then subtracted from the initial cost:' },
        { math: 'D<sub>j</sub> = <span class="fraction"><span>C − S<sub>n</sub></span><span>n</span></span>' },
        { math: 'BV = initial cost − &sum; D<sub>j</sub>' },
        { math: 'BV<sub>SL</sub> = $ 12,000 − 4(<span class="fraction"><span>$ 12,000 − $2,000</span><span>5</span></span>) = $ 4,000' },
        { text: 'Therefore, answer A is correct.' },
        { text: 'Answer B is the annual depreciation amount.' },
        { text: 'Answer C is the total depreciation after four years.' },
        { text: 'Answer D neglects the salvage value.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Economic Analysis > Depreciation'
    },
    {
      id: '1701028', complexity: 'Easy',
      text: 'A freshman engineering student is saving for a down payment on a new car after graduation. If the interest rate is 6% and the student is depositing $2,000 per year, how much will the student have at graduation in 5 years?',
      choices: ['$11,270', '$11,274', '$10,974', '$11,276'], answer: 1,
      blocks: [
        { html: 'Refer to formula Uniform Series Compound Amount in the <i>NCEES PE Mechanical Reference Handbook:</i> Economic Analysis: Economic Factor Tables.' },
        { math: 'F = $2,000( F / A, i%, n)' },
        { math: '= $2,000( F / A, 6%, 5)' },
        { math: '= $2,000(5.6371)' },
        { math: '= $11,274.20' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Economic Analysis > Economic Factor Tables'
    },
    {
      id: '1701029', complexity: 'Easy',
      text: 'A freshman engineering student would like to have $10,000 for a down payment on a new car after graduation. If the interest rate is 6%, how much should be deposited per year to have enough money at graduation in 5 years?',
      choices: ['$1,774', '$2,453', '$1,798', '$1,621'], answer: 0,
      blocks: [
        { html: 'Refer to formula Uniform Series Sinking Fund Formula in the <i>NCEES PE Mechanical Reference Handbook:</i> Economic Analysis: Economic Factor Tables.' },
        { math: 'A = $10,000( A / F, i%, n)' },
        { math: '&nbsp;&nbsp;&nbsp;&nbsp;= $10,000 ( A / F, 6%, 5)' },
        { math: '&nbsp;&nbsp;&nbsp;&nbsp;= $10,000( 0.1774)' },
        { math: '&nbsp;&nbsp;&nbsp;&nbsp;= $1,774' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Economic Analysis > Economic Factor Tables'
    },
    {
      id: '1701030', complexity: 'Medium',
      text: 'A W-beam is required to support a moment of 250 ft-kip. The beam must be equal to or less than 17 in tall. Using a factor of safety of 1.67, what is the lightest beam that may be used? Assume the beam is made of A992 material with yield strength of 50 ksi.',
      choices: ['W12 × 79', 'W14 × 68', 'W16 × 40', 'W16 × 67'], answer: 3,
      blocks: [
        { text: 'Determine the section modulus required to support the moment (NCEES PE Mechanical Reference Handbook: Stress Analysis: Beams).' },
        { math: '<i>σ</i><sub>y</sub> = <span class="fraction"><span>M</span><span>S</span></span> &rarr; S = <span class="fraction"><span>M × FOS</span><span><i>σ</i><sub>y</sub></span></span> = <span class="fraction"><span>250,000 ft × lbf <span class="fraction"><span>12 in</span><span>1 ft</span></span> × 1.67</span><span>50,000 psi</span></span> = 100.2 in<sup>3</sup>' },
        { text: 'Look up the structural properties in the NCEES PE Mechanical Reference Handbook: Structural Properties and find a beam that meets the requirements.' },
        { text: 'A W16 × 67 beam is 16.3 in tall and has a section modulus of 117 in³. It is the lightest beam meeting the requirements given in the problem statement. A W16 × 40 beam has a section modulus less than 100.2, so it does NOT meet the design requirement. A W14 × 68 satisfies all design requirements but is heavier than a W16 × 67. A W12 × 79 satisfies all design requirements but is heavier than a W16 × 67 and a W14 × 68.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Structural Properties<br>NCEES PE Mechanical Reference Handbook > Stress Analysis > Beams'
    },
    {
      id: '1701031', complexity: 'Easy',
      html: 'Which AISC channel from the list below has the following properties?<br><br>Depth: 101.6 mm<br>Area: 1,374 mm<sup>2</sup><br>Weight: 10.8 kg/m',
      choices: ['C 100 × 10.8', 'C 10 × 15.3', 'C 4 × 5.4', 'C 4 × 7.25'], answer: 3,
      blocks: [
        { text: 'Convert the given properties to Imperial units and find the channel from the list given in the NCEES PE Mechanical Reference Handbook: Structural Properties.' },
        { text: 'Conversions may be found in the NCEES PE Mechanical Reference Handbook: Engineering Terms and Symbols.' },
        { text: 'Depth:' },
        { math: '101.6 mm × <span class="fraction"><span>1 in</span><span>25.4 mm</span></span> = 4 in' },
        { text: 'Area:' },
        { math: '1,374 mm<sup>2</sup> × (<span class="fraction"><span>1 in</span><span>25.4 mm</span></span>)<sup>2</sup> = 2.13 in<sup>2</sup>' },
        { text: 'Weight:' },
        { math: '10.8 <span class="fraction"><span>kg</span><span>m</span></span> × (<span class="fraction"><span>2.205 lbm</span><span>1 kg</span></span>)(<span class="fraction"><span>1 m</span><span>3.281 ft</span></span>) = 7.25 <span class="fraction"><span>lbm</span><span>ft</span></span>' },
        { text: 'Therefore, the channel is C 4 × 7.25. (Note: C 100 × 10.8 is not an AISC shape.)' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Engineering Terms and Symbols<br>NCEES PE Mechanical Reference Handbook > Structural Properties'
    },
    {
      id: '1701032', complexity: 'Medium',
      text: 'Steel slabs measuring 1,300 mm × 2,500 mm × 100 mm are used as test weights for the load testing of an overhead crane. Assume the slabs are made of structural steel with a density of 7,850 kg/m³. The crane has a rated capacity of 10 metric tonnes (10,000 kg) and must be load tested with a total test load between 100% and 110% of its rated capacity, in accordance with the applicable testing requirements. Determine the minimum whole number of steel slabs required to satisfy the load-test requirement.',
      choices: ['1', '4', '6', '8'], answer: 1,
      blocks: [
        { text: 'Determine the mass of each deadweight. Mass is found in the NCEES PE Mechanical Reference Handbook: Properties of Materials: Material Properties.' },
        { math: 'm = <i>ρ</i> × V = 7,800 <span class="fraction"><span>kg</span><span>m<sup>3</sup></span></span>(1.3 m × 2.5 m × 0.1 m) = 2,535 kg = 2.535 ton' },
        { text: 'Calculate the load-test range.' },
        { math: 'P<sub>rated</sub> × 100% ≤ LT ≤ P<sub>rated</sub> × 110% &rarr; 10 tons ≤ LT ≤ 11 tons' },
        { text: 'Determine the required number of weights.' },
        { math: 'n = <span class="fraction"><span>10 tons</span><span>2.535 tons</span></span> = 3.94 ≈ 4' },
        { text: 'Check to ensure four weights are not too many.' },
        { math: 'm = 4 × 2.535 tons = 10.14 tons ≤ 11 tons' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1701033', complexity: 'Easy',
      html: 'The following equation is the definition of what geometric property?<br><br><img src="Screenshots and Questions/Solutions/Basic Engineering Practice/problem 16 solution image.svg" width="37" height="45" alt="square root of I over A" style="vertical-align:middle">',
      choices: ['The second moment of area', 'The radius of gyration', 'The section modulus', 'The parallel axis theorem'], answer: 1,
      blocks: [
        { text: 'The second moment of area is' },
        { math: 'I<sub>x</sub> = ∫ y<sup>2</sup>dA' },
        { text: 'The radius of gyration is' },
        { html: '<img src="Screenshots and Questions/Solutions/Basic Engineering Practice/problem 16 solution image.svg" width="37" height="45" alt="square root of I over A" style="vertical-align:middle">' },
        { text: 'The section modulus is' },
        { math: '<span class="fraction"><span>I</span><span>c</span></span>' },
        { text: 'The parallel axis theorem is' },
        { math: 'I&prime;<sub>x</sub> = I<sub>xc</sub> + d<sub>y</sub><sup>2</sup>A.' },
        { text: 'Therefore, the given equation is for the radius of gyration.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Mensuration of Areas and Volumes > Properties of Shapes'
    },
    {
      id: '1701034', complexity: 'Easy',
      html: 'A securement plan is being developed for a roadster, which is to be rocketed into orbit. The maximum expected acceleration force is not expected to exceed 35 m/s<sup>2</sup>. The roadster weighs 1,250 kg. Assuming a factor of safety of 1.50, what is the maximum force that should be accounted for in the securement plan?',
      choices: ['43.75 kN', '65,625 kg', '14,766 lbf', '9,835 lbm'], answer: 2,
      blocks: [
        { math: 'F = ma × FOS = 1,250 kg × 35 <span class="fraction"><span>m</span><span>s<sup>2</sup></span></span> × 1.5 = 65,625 N' },
        { html: 'Convert to the units required in the answer (unit conversions found in the <i>NCEES PE Mechanical Reference Handbook</i>: Engineering Terms and Symbols).' },
        { math: '65,625 N × 0.225 <span class="fraction"><span>lbf</span><span>N</span></span> = 14,766 lbf' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Engineering Terms and Symbols'
    },
    {
      id: '1701036', complexity: 'Easy',
      html: 'Basic Engineering Practice (Interpretation of Technical Drawings)<br><img src="Screenshots and Questions/Questions/Basic Engineering Practice Questions/problem 18 image.png" alt="Hydraulic schematic symbols" style="display:block;max-width:min(100%,520px);height:auto;margin:18px 0"><br>The above graphic is part of a hydraulic schematic. What is the meaning of the symbols shown in the schematic?',
      choices: ['An electric motor and an oil pump', 'A gearbox and an oil motor', 'A combustion engine and an air compressor', 'An electric air compressor'], answer: 0,
      blocks: [
        { html: 'The circle with the <i>M</i> is an electric motor (item [<i>aa</i>] in reference) and the circle with an arrow is a pump, with fixed capacity and one direction of flow (item [<i>k</i>] in reference). The arrow is filled in (item [<i>d</i>] in reference), so the unit is for oil.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Interpretation of Technical Drawings > Symbols for Drawings'
    },
    {
      id: '1701038', complexity: 'Easy',
      html: 'What is the radius of gyration for a member with the below properties?<br><br>Area = 11.7 in<sup>2</sup><br><br>Height = 11.9 in<br><br>I<sub>x</sub> = 307 in<sup>4</sup><br><br>S<sub>x</sub> = 51.5 in<sup>3</sup><br><br>Z<sub>x</sub> = 57.0 in<sup>3</sup>',
      choices: ['26.2 in', '5.95 in', '5.12 in', '3.42 in'], answer: 2,
      blocks: [
        { text: 'The radius of gyration is defined as the square root of the moment of inertia divided by the area.' },
        { html: '<img src="assets/problem-19-radius-gyration.svg" width="340" height="62" alt="r equals square root of I over A equals square root of 307 inches to the fourth over 11.7 inches squared equals 5.12 inches" style="vertical-align:middle">' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Mensuration of Areas and Volumes > Properties of Shapes'
    },
    {
      id: '1702042', complexity: 'Medium',
      html: 'For the rectangle shown, the radius of gyration r<sub>x</sub> with respect to its base is:',
      image: 'Screenshots and Questions/Questions/Basic Engineering Practice Questions/problem 20 image.png',
      choices: [
        'r<sub>x</sub> = <span class="fraction"><span>h</span><span><span class="radical">&radic;<span class="radicand">7</span></span></span></span>',
        'r<sub>x</sub> = <span class="fraction"><span>h</span><span><span class="radical">&radic;<span class="radicand">3</span></span></span></span>',
        'r<sub>x</sub> = <span class="fraction"><span>h</span><span><span class="radical">&radic;<span class="radicand">8</span></span></span></span>',
        'r<sub>x</sub> = <span class="fraction"><span>h</span><span><span class="radical">&radic;<span class="radicand">5</span></span></span></span>'
      ], answer: 1,
      blocks: [
        { text: 'Answer: B' },
        { text: 'Solution:' },
        { text: 'Radius of gyration of an area:' },
        { math: 'r<sub>x</sub><sup>2</sup> = <span class="fraction"><span>I<sub>x</sub></span><span>A</span></span> = <span class="fraction"><span><span class="fraction"><span>1</span><span>3</span></span>bh<sup>3</sup></span><span>bh</span></span> = <span class="fraction"><span>h<sup>2</sup></span><span>3</span></span>' },
        { math: 'r<sub>x</sub> = <span class="fraction"><span>h</span><span><span class="radical">&radic;<span class="radicand">3</span></span></span></span>' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Mensuration of Areas and Volumes > Properties of Shapes'
    },
    {
      id: '1703002', complexity: 'Medium',
      html: 'Determine the unknown material in which the cube of material, seen below, is the result of experiencing a shear stress of 1.86 Mpsi (where 5a=6b=2c ).',
      image: 'Screenshots and Questions/Questions/Basic Engineering Practice Questions/problem 21 image.png',
      choices: ['Steel', 'Aluminum', 'Brass', 'Copper'], answer: 2,
      blocks: [
        { text: 'The shear strain is the angle of deformation from the original right angle and can be calculated using the tangent and the known ratio of the triangle.' },
        { math: '<i>γ</i> = tan<sup>−1</sup>(b/c)' },
        { math: '6b=2c, therefore, b/c=1/3 and <i>γ</i>=0.322' },
        { math: '<i>γ</i>=<i>τ</i>/G' },
        { math: 'G = 1.86 Mpsi / 0.322 = 5.78 Mpsi' },
        { html: 'Refer to “Table 1 – <i>NCEES PE Mechanical Reference Handbook</i>: Properties of Materials: Material Properties' },
        { text: 'The material with the closest modulus of rigidity is brass with a value of 5.8 Mpsi.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design > Shear Stress - Strain<br>NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1703003', complexity: 'Easy',
      text: 'What primary alloying ingredients comprise AISI 4340 steel?',
      choices: ['C 0.4%, Ni 1.8%, Mo 0.25%', 'C 4%, Cr 0.5%, Mo 0.25%', 'C 4%, Ni 1.8%, Cr 0.95%, Mo 0.25%', 'C 0.4%, Ni 1.8%, Cr 0.50%, Mo 0.25%'], answer: 3,
      blocks: [
        { html: 'AISI 4340 steel is a nickel-chromium-molybdenum alloy steel commonly used for high-strength applications. Its typical alloy composition includes:<ul><li>Carbon (C): approximately 0.40%</li><li>Nickel (Ni): approximately 1.8%</li><li>Chromium (Cr): approximately 0.50–0.80%</li><li>Molybdenum (Mo): approximately 0.25%</li></ul>' }
      ],
      reference: 'NNCEES PE Mechanical Handbook > Machine Design and Materials > Relationship Between Hardness and Tensile Strength'
    },
    {
      id: '1703009', complexity: 'Easy',
      text: 'The stress-strain curves of four materials are shown below. Which material would be best described as strong and tough?',
      image: 'Screenshots and Questions/Questions/Basic Engineering Practice Questions/problem 23 image.png',
      choices: ['I', 'II', 'III', 'IV'], answer: 2,
      blocks: [
        { text: 'I – Soft and weak' },
        { text: 'II – Weak and brittle' },
        { text: 'III – Strong and tough' },
        { text: 'IV – Strong and brittle' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Stress Analysis > Stress-Strain Diagrams'
    },
    {
      id: '1703010', complexity: 'Easy',
      text: 'A typical stress-strain curve for steel is shown. Indicate the point that is closest to the yield point.',
      image: 'Screenshots and Questions/Questions/Basic Engineering Practice Questions/problem 24 image.png',
      choices: ['I', 'II', 'III', 'IV'], answer: 0,
      blocks: [
        { text: 'I – Yield Point' },
        { text: 'II – Nothing of note' },
        { text: 'III – Ultimate strength' },
        { text: 'IV – Fracture point' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Stress Analysis > Stress-Strain Diagrams'
    },
    {
      id: '1703014', complexity: 'Easy',
      text: 'A material has been tested, and the engineering stresses and percent strain at various points are shown in the following table. What is most nearly the elastic modulus?',
      image: 'Screenshots and Questions/Questions/Basic Engineering Practice Questions/problem 25 image.png',
      choices: ['30 × 10<sup>6</sup> psi', '24.8 × 10<sup>6</sup> psi', '17.5 × 10<sup>6</sup> psi', '3 × 10<sup>6</sup> psi'], answer: 0,
      blocks: [
        { text: 'Choose the elastic limit:' },
        { math: 'E = stress/strain' },
        { math: 'E = 60,000/0.002 = 30 × 10<sup>6</sup> psi' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Stress Analysis > Stress-Strain Diagrams'
    },
    {
      id: '1703015', complexity: 'Medium',
      html: 'A steel bar that is 6.0 in long with a diameter of 0.75 in is compressed by an axial load of 50,000 lb. The uncompressed cross-sectional area is 0.442 in<sup>2</sup>. The material has a modulus of elasticity of 30 × 10<sup>6</sup> lb/in<sup>2</sup>, and a Poisson’s ratio of 0.30. The compressed cross-sectional area is most nearly which of the following?',
      choices: ['0.442 in<sup>2</sup>', '0.443 in<sup>2</sup>', '0.445 in<sup>2</sup>', '0.447 in<sup>2</sup>'], answer: 1,
      blocks: [
        { math: 'Longitudinal strain = <span class="fraction"><span>F</span><span>EA</span></span>' },
        { math: '<span class="fraction"><span>50,000</span><span>(30 × 10<sup>6</sup>) × 0.442</span></span> = 0.00377' },
        { math: 'Lateral strain = Longitudinal strain × Poisson’s ratio' },
        { math: '0.00377 × 0.30 = 0.00113' },
        { math: 'Diameter 2 = diameter 1 × (1 + lateral strain)' },
        { math: '0.75 × (1 + 0.00113) = 0.751' },
        { math: 'Area 2 = <span class="fraction"><span>π 0.751<sup>2</sup></span><span>4</span></span> = 0.443 in<sup>2</sup>' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Strength of Materials > Uniaxial Loading and Deformation'
    },
    {
      id: '1703016', complexity: 'Easy',
      text: 'A steel test specimen is loaded with a force that results in a stress higher than the yield point, but less than the ultimate strength. The specimen is then unloaded. The residual strain in the specimen is most nearly:',
      choices: ['Zero', 'Less than the strain under load', 'Equal to the strain under load', 'More than the strain under load'], answer: 1,
      blocks: [
        { text: 'A. Only true if the specimen was loaded under the elastic limit' },
        { text: 'B. True' },
        { text: 'C. False--neglects elastic recovery' },
        { text: 'D. False' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Stress Analysis > Stress-Strain Diagrams'
    },
    {
      id: '1703017', complexity: 'Medium',
      html: 'A test specimen is a 6.0-in cylinder with a diameter of 0.75 in. The material has a modulus of elasticity of 28 × 10<sup>6</sup> psi and a shear modulus of 11.5 × 10<sup>6</sup> psi. The specimen is subjected to a compressive load, which reduces the length by 0.020 in. What is the increase in diameter?',
      choices: ['5.43 × 10<sup>−4</sup> in', '3.33 × 10<sup>−3</sup> in', '7.23 × 10<sup>−4</sup> in', '0.217 in'], answer: 0,
      blocks: [
        { text: 'Calculate Poisson’s ratio:' },
        { math: 'G = <span class="fraction"><span>E</span><span>2(1 + <i>ν</i>)</span></span>' },
        { math: '<i>ν</i> = <span class="fraction"><span>28 × 10<sup>6</sup></span><span>2(11.5 × 10<sup>6</sup>)</span></span> − 1' },
        { math: 'Longitudinal strain = <span class="fraction"><span>0.02</span><span>6</span></span> = 3.33 × 10<sup>−3</sup>' },
        { math: 'Lateral strain = 3.33 × 10<sup>−3</sup> (0.217) = 7.23 × 10<sup>−4</sup>' },
        { math: 'Δ Diameter = 7.23 × 10<sup>−4</sup> (0.75) = 5.43 × 10<sup>−4</sup>' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, Section 2.10.4'
    },
    {
      id: '1703018', complexity: 'Easy',
      text: 'Which of the following best describes Poisson’s ratio?',
      choices: ['The change in gauge length of a specimen (in the direction of the applied stress) divided by its original gauge length.', 'The ratio of stress to strain when deformation is totally elastic. Also, a measure of the stiffness of a material', 'Deformation that is nonpermanent—that is, totally recoverable upon release of an applied stress', 'For elastic deformation, the negative ratio of lateral and axial strains that result from an applied axial stress.'], answer: 3,
      blocks: [
        { text: 'A. Engineering strain' },
        { text: 'B . Modulus of elasticity' },
        { text: 'C . Elastic deformation' },
        { text: 'D . Poisson’s ratio' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Strength of Materials > Uniaxial Loading and Deformation'
    },
    {
      id: '1703021', complexity: 'Easy',
      text: 'Which of the following AISI-SAE steel grades has a carbon content between 0.20% and 0.55%?',
      choices: ['1017', '902', '4140', '1018'], answer: 2,
      blocks: [
        { html: 'The last two digits of a steel grade represent the carbon content in hundredths of a percent (<i>NCEES PE Mechanical Reference Handbook</i>: Material Properties: Relationship Between Hardness and Tensile Strength)' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Material Properties > Relationship Between Hardness and Tensile Strength'
    },
    {
      id: '1703023', complexity: 'Medium',
      html: 'What value is closest to the true strain of 304 stainless steel at its yield point?',
      choices: ['1.00 × 10<sup>−3</sup>', '1.20 × 10<sup>−3</sup>', '1.06 × 10<sup>−3</sup>', '1.35 × 10<sup>−3</sup>'], answer: 2,
      blocks: [
        { html: 'Find the modulus of elasticity and yield strength of 304 steel in the NCEES <i>PE Mechanical Reference Handbook</i>: Properties of Materials: Material Properties' },
        { math: 'E = 28,000 ksi' },
        { math: 'yield = 30 ksi' },
        { text: 'Find the strain value in:' },
        { math: 'E = <span class="fraction"><span><i>σ</i></span><span><i>ε</i></span></span>' },
        { math: '<i>ε</i> = <span class="fraction"><span>30 ksi</span><span>28,000 ksi</span></span> = 0.00107' },
        { text: 'Using the equation for true strain, we find:' },
        { math: '<i>ε</i><sub>T</sub> = ln (1 + <i>ε</i>)' },
        { math: '<i>ε</i><sub>T</sub> = ln (1 + 0.00107)' },
        { math: '<i>ε</i><sub>T</sub> = 0.00106' },
        { text: 'A different more practical approach is that the true strain at the yield point of 304 stainless steel is generally in the range of approximately 0.001 to 0.0015. Among the options provided, the closest value to the typical true strain at the yield point for 304 stainless steel is:' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Basic Engineering Practice, Properties of Materials > Material Properties'
    },
    {
      id: '1703027', complexity: 'Hard',
      html: 'A cube of steel is compressed hydrostatically such that the strain in all directions is<br><i>ε</i><sub>x</sub> = <i>ε</i><sub>y</sub> = <i>ε</i><sub>z</sub> = 0.2%<br>. What is the hydrostatic stress (pressure) within the cube?',
      choices: ['330 MPa', '400 MPa', '1.0 GPa', '1.2 GPa'], answer: 2,
      blocks: [
        { text: 'Steel: Young’s modulus E = 200 GPa, Poisson’s ratio nu = 0.3' },
        { text: 'Using Hooke’s Law using Young’s Modulus & Poisson’s ratio:' },
        { math: '<i>ε</i><sub>x</sub> = <span class="fraction"><span>1</span><span>E</span></span>(<i>σ</i><sub>x</sub> − <i>ν</i>(<i>σ</i><sub>y</sub> + <i>σ</i><sub>z</sub>))' },
        { math: 'Since <i>ε</i><sub>x</sub> = <i>ε</i><sub>y</sub> = <i>ε</i><sub>z</sub>, <i>σ</i><sub>x</sub> = <i>σ</i><sub>y</sub> = <i>σ</i><sub>z</sub>' },
        { math: '<i>ε</i><sub>x</sub> = <span class="fraction"><span>1</span><span>E</span></span>(<i>σ</i><sub>x</sub> − 2<i>ν</i><i>σ</i><sub>x</sub>) = <span class="fraction"><span><i>σ</i><sub>x</sub></span><span>E</span></span>(1−2<i>ν</i>)' },
        { math: '<i>σ</i><sub>x</sub> = <span class="fraction"><span>E<i>ε</i><sub>x</sub></span><span>1−2<i>ν</i></span></span> = <span class="fraction"><span>200 GPa · 0.002</span><span>1−2×0.3</span></span> = 1.0 GPa' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties<br>NCEES PE Mechanical Reference Handbook > Strength of Materials > Hooke\'s Law'
    },
    {
      id: '1703029', complexity: 'Medium',
      html: 'What is the conductivity of a 1000-ft-, 12-gauge wire (d = 0.0808 in) with a resistance of 1<br><i>Ω</i><br>?',
      choices: [
        '2.34 × 10<sup>6</sup> <span class="fraction"><span>S</span><span>in</span></span>',
        '3.25 × 10<sup>6</sup> <span class="fraction"><span>S</span><span>in</span></span>',
        '2.64 × 10<sup>7</sup> <span class="fraction"><span>S</span><span>in</span></span>',
        '2.08 × 10<sup>6</sup> <span class="fraction"><span>S</span><span>in</span></span>'
      ], answer: 0,
      blocks: [
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook</i>: Material Properties: Electrical Properties.' },
        { text: 'Using the resistivity of a material equation:' },
        { math: '<i>ρ</i> = <span class="fraction"><span>R × A</span><span>L</span></span> = <span class="fraction"><span>1<i>Ω</i> × (<span class="fraction"><span>π</span><span>4</span></span> × (0.0808in)<sup>2</sup>)</span><span>1,000 ft × <span class="fraction"><span>12 in</span><span>1 ft</span></span></span></span> = 4.273 × 10<sup>−7</sup> <i>Ω</i> × in' },
        { text: 'Conductivity is the reciprocal of resistivity.' },
        { math: '<i>σ</i> = 1/(<i>ρ</i>) = <span class="fraction"><span>1</span><span>4.273 × 10<sup>−7</sup><i>Ω</i> × in</span></span> = 2.34 × 10<sup>6</sup> <span class="fraction"><span>S</span><span>in</span></span>' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Material Properties > Electrical Properties'
    },
    {
      id: '1703030', complexity: 'Easy',
      text: 'Which of the following describes the property of a material that corresponds with a material’s ability to return to its original form after a load has been applied and removed?',
      choices: ['Tensile strength', 'Fatigue', 'Elasticity', 'Creep'], answer: 2,
      blocks: [
        { text: 'Tensile strength is the material’s ability to withstand pulling or stretching forces. Fatigue is a time-dependent failure under cyclic load. Creep is time-dependent deformation under load. Therefore, elasticity is correct.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1703031', complexity: 'Easy',
      text: 'Which of the following describes the property of a material that corresponds with how easily a material can be scratched or indented?',
      choices: ['Toughness', 'Hardness', 'Strength', 'Durability'], answer: 1,
      blocks: [
        { text: 'Toughness is the ability of a material to absorb energy and plastically deform without fracturing. Strength is the ability of a material to withstand an applied force. Durability is the ability of a material to withstand wear and tear through weathering and corrosive attack. Therefore, hardness is correct.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1703033', complexity: 'Easy',
      text: 'Which of the following is the primary bond that yields a large number of free electrons?',
      choices: ['Ionic bond', 'Covalent bond', 'Metallic bond', 'Polar covalent bond'], answer: 2,
      blocks: [
        { text: 'Ionic, covalent, and polar covalent bonds are not primary bonds that yield large numbers of free electrons.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1703034', complexity: 'Easy',
      text: 'Which of the following describes the property of a material that corresponds with a material’s ability to withstand environmental attack and decay?',
      choices: ['Corrosion resistance', 'Capacitance', 'Thermal conductivity', 'Density'], answer: 0,
      blocks: [
        { text: 'Capacitance is the charge-carrying capacity of an insulating material. Thermal conductivity is how well a material conducts heat. Density is the mass per unit volume of a material. Therefore, corrosion resistance is correct.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1703035', complexity: 'Easy',
      text: 'Which of the following describes the property of a material that corresponds with susceptibility to being plastically deformed by applying pressure?',
      choices: ['Toughness', 'Strength', 'Resilience', 'Malleability'], answer: 3,
      blocks: [
        { text: 'Toughness is related to a material’s ability to withstand occasional high stresses without fracturing. Strength is a material’s ability to withstand an applied force. Resilience is a material’s ability to absorb and release strain energy without permanent deformation. Therefore, malleability is correct.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1703036', complexity: 'Easy',
      text: 'Which type of material is able to absorb and release strain energy without permanent deformation?',
      choices: ['Resilient', 'Ductile', 'Tough', 'Brittle'], answer: 0,
      blocks: [
        { text: 'Ductile materials will deform and elongate. Tough materials are able to withstand occasional hard stresses without fracturing. Brittle materials can only support a small amount of strain before failure. Therefore, resilient is correct.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1703037', complexity: 'Easy',
      text: 'Which of the following describes how well a material conducts heat?',
      choices: ['Thermal conductivity', 'Resilience', 'Density', 'Electrical conductivity'], answer: 0,
      blocks: [
        { text: 'Resilience is a material’s ability to absorb and release strain energy without permanent deformation. Density is a material’s mass per unit volume. Electrical conductivity is a measure of how well a material conducts electricity. Therefore, thermal conductivity is correct.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1703038', complexity: 'Easy',
      html: 'A drive shaft for a racecar was machined out of a forged and annealed blank of 4130 steel with a modulus of elasticity of 29 Mpsi. In its annealed state, it has a yield strength of 65 ksi, and tensile strength of 95 ksi. Before final machining, the part is heated back up to ~1,600°F, quenched, and tempered at ~1,000°F. After this, its tensile strength is 150 ksi, and yield strength is 140 ksi. In its quenched and tempered state, what is most nearly its modulus of elasticity?',
      choices: ['42.6 Mpsi', '14.5 Mpsi', '45.8 Mpsi', '29.0 Mpsi'], answer: 3,
      blocks: [
        { html: 'The modulus of elasticity of a material is a representation of the strength of the bonds between atoms in the material. Because heat treating doesn’t change the atomic makeup of the crystal structure of the material, modulus elasticity is unchanged and is most nearly the typical modulus of elasticity of steel in NCEES <i>PE Mechanical Reference Handbook</i>: Properties of Materials: Material Properties.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1704006', complexity: 'Medium',
      html: 'I. True stress is smaller than engineering stress for compressive forces.<br><br>II. Based on a tensile stress strain curve, the modulus of toughness is larger for the true stress and strain verse the engineering stress and strain.<br><br>Which of the above statements is always true?',
      choices: ['Only I is true.', 'Only II is true.', 'Both I and II are true', 'Neither I and II are true.'], answer: 2,
      blocks: [
        { text: 'Statement 1: True stress is smaller than engineering stress. True stress relates to the load applied to the area at that instantaneous moment. Engineering stress, however, applies to the load applied to the original area. So, when the specimen is loaded, the area will increase, and the true stress will therefore decrease. Statement 1 is true.' },
        { text: 'Statement 2: The modulus of toughness is the area underneath the stress-strain curve just before fracture occurs. Since the value for modulus of toughness is directly related to the area underneath the curve, the true stress strain will have a higher value than the engineering stress strain.' }
      ],
      reference: 'NCEES Mechanical Engineering, V2.0, Chapter 2, Machine Design and Materials, 2.10.5 Uniaxial Loading and Deformation.'
    },
    {
      id: '1704038', complexity: 'Easy',
      html: 'Which statement is true about the modulus of elasticity, <i>E</i>?',
      choices: ['It is the slope of the stress-strain curve in the linearly elastic region.', 'It is the ratio of stress to volumetric strain.', 'Its value depends only on the temperature of the material.', 'It is the same as the rupture modulus.'], answer: 0,
      blocks: [
        { text: 'The modulus of elasticity is the slope of the stress-strain diagram in the linearly elastic region.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Strength of Materials > Uniaxial Loading and Deformation'
    },
    {
      id: '1708006', complexity: 'Easy',
      text: 'Given the chart below, which quenching media material should be used to quickly quench a high-carbon steel from austenite to martensite?',
      image: 'Screenshots and Questions/Questions/Basic Engineering Practice Questions/problem 44 image.png',
      choices: ['Air', 'Oil', 'Water', 'Brine'], answer: 3,
      blocks: [
        { text: 'From the curves shown above, all the quenching media start in the austenite phase, but brine is the only option that reaches an end phase of martensite. Additionally, brine is the quickest quenching media (it takes the shortest time to quench the steel.) Therefore, the answer is D.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1708017', complexity: 'Easy',
      html: 'At what percent-weight carbon and temperature is Iron-Iron carbide completely liquid?',
      choices: ['1% carbon and 1200°C', '1.5% carbon and 1400°C', '4% carbon and 1200°C', '4% carbon and 1000°C'], answer: 2,
      blocks: [
        { text: 'The Iron-Iron Carbide Phase Diagram shows the phases of the mixture. Only answer C is in the completely liquid section of the diagram.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Material Properties > Binary Phase Diagrams'
    },
    {
      id: '1708019', complexity: 'Easy',
      text: 'What material test/mechanical property would be best suited for selecting a steel for use in environments where extreme cold can be a factor?',
      choices: ['Endurance limit', 'Fracture toughness', 'Charpy impact test', 'Hardness test'], answer: 2,
      blocks: [
        { text: 'The Charpy impact test measures a material’s ability to absorb energy during fracture, which helps determine the ductile-to-brittle transition temperature (DBTT). Many steels experience a transition from ductile failure (toughness) to brittle failure (catastrophic fracture) at low temperatures. The lower the DBTT, the better the steel performs in cold conditions without becoming brittle. The Charpy impact test is the best choice because it determines the temperature at which steel transitions from ductile to brittle behavior, which is critical in extreme cold environments.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Impact Testing'
    },
    {
      id: '1708020', complexity: 'Easy',
      text: 'What material test/mechanical property would be best suited for selecting a steel for Armor plate is that is designed to be resistant to penetration from projectiles:',
      choices: ['Fatigue Life', 'Creep resistance', 'Conductivity', 'Hardness'], answer: 3,
      blocks: [
        { text: 'Hardness is a measure of resistance to penetration.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Material Properties > Material Hardness'
    },
    {
      id: '1708022', complexity: 'Medium',
      text: 'A company needs to use a wide-flange beam in an area that is prone to corrosion. It is decided that aluminum of grade 6061-T6 will be used. The dimension of the beam will be identical to a W24 × 68 beam. How much will the new beam weigh if a 7 ft beam is to be used?',
      choices: ['120 lb.', '165 lb.', '250 lb.', '476 lb.'], answer: 1,
      blocks: [
        { text: 'See NCEES PE Mechanical Reference Handbook: Structural Properties.' },
        { text: 'A W24 × 68 beam has a cross-sectional area of 20.1 in². This can be multiplied by the beam length to determine volume:' },
        { math: '7 ft × <span class="fraction"><span>12 in</span><span>1 ft</span></span> = 84 in' },
        { math: '20.1 in<sup>2</sup> × 84 in = 1,688.4 in<sup>3</sup>' },
        { text: 'See NCEES PE Mechanical Reference Handbook: Properties of Materials: Material Properties.' },
        { text: 'The specific weight of 6061 aluminum is given as 0.098 lb/in³. This can be used to find the weight of the beam:' },
        { math: '1,688.4in<sup>3</sup> × 0.098 <span class="fraction"><span>lb</span><span>in<sup>3</sup></span></span> = 165.4 lb' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties<br>NCEES PE Mechanical Reference Handbook > Structural Properties'
    },
    {
      id: '1708026', complexity: 'Medium',
      html: 'At assembly, an aluminum locating tool needs to have a steel pin installed in it. The OD of the pin is 3.215 mm. The diameter of the hole is 3.192 mm. What, most nearly, must the minimum temperature of an oven be in order to heat the tool such that the steel pin can be installed without a press? The room where the oven is located has a controlled temperature of 17°C.',
      choices: ['322°C', '550°C', '305°C', '567°C'], answer: 0,
      blocks: [
        { math: 'CTE aluminum <i>CTE</i><sub>Al</sub> = 23.6 × 10<sup>−6</sup> 1/C' },
        { math: 'Δ<i>D</i> required = 3.215 mm − 3.192 mm = 0.023 mm' },
        { math: 'Δ<i>D</i> = <i>D</i> × <i>CTE</i><sub>Al</sub> × Δ<i>T</i> = 3.192 mm × 23.6 × 10<sup>−6</sup> 1/C × Δ<i>T</i> = 0.023 mm' },
        { math: 'Δ<i>T</i> = 305°C' },
        { math: '<i>T</i><sub>oven</sub> = 305°C + 17°C = 322°C' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1708029', complexity: 'Easy',
      text: 'Choose the correct methodology of hazard elimination for a process in order of decreasing effectiveness',
      choices: [
        '1. Design to eliminate the hazard 2. Alert users/operators of hazard via sign 3. Physical guard over hazard 4. Personal protective equipment worn during use/operation',
        '1. Design to eliminate the hazard 2. Physical guard over hazard 3. Alert users/operators of hazard via sign 4. Personal protective equipment worn during use/operation',
        '1. Design to eliminate the hazard 2. Personal protective equipment worn during use/operation 3. Physical guard over hazard 4. Alert users/operators of hazard via sign',
        '1. Personal protective equipment worn during use/operation 2. Design to eliminate the hazard 3. Alert users/operators of hazard via sign 4. Physical guard over hazard'
      ], answer: 1,
      blocks: [],
      reference: 'NCEES PE Reference Handbook > Elements of Machine Design Methodologies'
    },
    {
      id: '20251011', complexity: 'Medium',
      html: 'A uniform 12-ft beam weighing 300 lb is simply supported at both ends. A 600-lb point load is applied 4 ft from the left support. Determine the reactions at the left and right supports.<br><br>Let:<ul><li><i>R</i><sub>A</sub> = reaction at the left support</li><li><i>R</i><sub>B</sub> = reaction at the right support</li></ul>Note: The beam’s weight acts at the center (6 ft from either end).',
      choices: [
        '<i>R</i><sub>A</sub> = 500 lb<br><i>R</i><sub>B</sub> = 300 lb',
        '<i>R</i><sub>A</sub> = 400 lb<br><i>R</i><sub>B</sub> = 250 lb',
        '<i>R</i><sub>A</sub> = 550 lb<br><i>R</i><sub>B</sub> = 350 lb',
        '<i>R</i><sub>A</sub> = 600 lb<br><i>R</i><sub>B</sub> = 400 lb'
      ], answer: 2,
      blocks: [
        { text: 'Calculate the equivalent point load for the beam\'s weight.' },
        { text: 'The equivalent point load is 600 lb at the beam’s midpoint.' },
        { text: 'Apply the sum of moments about the left support and solve for reaction at right support.' },
        { math: '∑M<sub>A</sub> = −300 lb × 6 ft − 600 lb × 4 ft + RB × (12 ft)' },
        { math: 'R<sub>B</sub> = 350 lb' },
        { text: 'Apply the sum of vertical forces and find reaction force at left support.' },
        { math: 'R<sub>A</sub> = +300 lb + 600 lb − 350 lb' },
        { math: 'R<sub>A</sub> = 550 lb' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Statics > Equilibrium'
    },
    {
      id: '20251013', complexity: 'Hard',
      html: 'A mechanical engineer is evaluating two design alternatives for a new production line:<ul><li>Option A: Initial cost = $250,000; Annual operating cost = $40,000; Expected life = 10 years</li><li>Option B: Initial cost = $400,000; Annual operating cost = $20,000; Expected life = 10 years</li></ul>Assume a discount rate of 8% and no salvage value for either option.<br><br>Using a present worth of costs analysis, compute the total present worth of costs for each option (initial cost plus the present value of the annual operating costs).<br><br>Which of the following values is the lower present worth of costs, and therefore represents the more economical alternative?',
      choices: ['$518,403.48', '$578,679.55', '$456,233.24', '$534,201.74'], answer: 0,
      blocks: [
        { text: 'NPV = Initial cost + Present value of annual operating costs' },
        { html: 'Present value of an annuity (<i>PVA</i>) formula:' },
        { math: 'PVA = PMT × <span class="fraction"><span>[1 − (1 + i)<sup>−n</sup>]</span><span>i</span></span>' },
        { text: 'Where:' },
        { text: 'Initial cost = upfront expense of the option' },
        { text: 'Annual cost (<i>C</i>): annual operating cost for each option' },
        { text: 'Discount rate (<i>r</i>): rate used to discount future cash flows to their present value (8% or 0.08 in this case)' },
        { text: 'Number of periods (<i>n</i>): expected life of the project (10 yrs)' },
        { text: 'The NPV calculation involves discounting the annual operating costs back to their present value and adding the initial cost. The formula for the present value of an annuity (a series of equal payments over a period) is used for the annual operating costs.' },
        { text: 'Option A:' },
        { text: 'Initial cost = $250,000' },
        { text: 'Annual operating cost = $40,000' },
        { text: 'Discount rate (<i>r</i>) = 0.08' },
        { text: 'Number of periods (<i>n</i>) = 10' },
        { text: 'Calculate present value of annual operating costs:' },
        { math: 'PV<sub>annuity</sub> = 40,000 × <span class="fraction"><span>[1 − (1 + 0.08)<sup>−10</sup>]</span><span>0.08</span></span>' },
        { math: '= 40,000 × <span class="fraction"><span>(1 − 0.463193)</span><span>0.08</span></span>' },
        { math: '= 40,000 × <span class="fraction"><span>0.536807</span><span>0.08</span></span>' },
        { math: '= 40,000 × 6.710087' },
        { math: '= $268,403.48' },
        { text: 'Calculate NPV for option A:' },
        { math: 'NPV<sub>A</sub> = $250,000 + $268,403.48' },
        { math: '= $518,403.48' },
        { text: 'Option B:' },
        { text: 'Initial cost = $400,000' },
        { text: 'Annual operating cost = $20,000' },
        { text: 'Discount rate (<i>r</i>) = 0.08' },
        { text: 'Number of periods (<i>n</i>) = 10' },
        { text: 'Calculate present value of annual operating costs:' },
        { math: 'PV<sub>annuity</sub> = 20,000 × <span class="fraction"><span>[1 − (1 + 0.08)<sup>−10</sup>]</span><span>0.08</span></span>' },
        { math: '= 20,000 × <span class="fraction"><span>(1 − 0.463193)</span><span>0.08</span></span>' },
        { math: '= 20,000 × <span class="fraction"><span>0.536807</span><span>0.08</span></span>' },
        { math: '= 20,000 × 6.710087' },
        { math: '= $134,201.74' },
        { text: 'Calculate NPV for option B:' },
        { math: 'NPV<sub>B</sub> = 400,000 + 134,201.74' },
        { math: '= $534,201.74' },
        { text: 'Based on the calculations, option A has a lower NPV ($518,403.48) compared to option B ($534,201.74). Therefore, the mechanical engineer should select option A, as it represents a lower overall cost over the 10-yr lifespan when considering the time value of money, more economical alternative' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Economic Analysis > Economic Factor Tables'
    },
    {
      id: '20251015', complexity: 'Medium', numeric: true,
      html: 'A slider moves along a straight guide. Its velocity is <i>v</i>(<i>t</i>) = 3<i>t</i><sup>2</sup> − 12<i>t</i> + 9 (unit/sec). Determine the net displacement of the slider from <i>t</i> = 0 to <i>t</i> = 3 sec.',
      choices: [], answer: '0',
      blocks: [
        { math: 'Δ<i>s</i> = ∫<sub>0</sub><sup>3</sup> <i>v</i>(<i>t</i>)d<i>t</i> + <i>x</i><sub>t₀</sub> = ∫<sub>0</sub><sup>3</sup> (3<i>t</i><sup>2</sup> − 12<i>t</i> + 9)d<i>t</i>, where <i>x</i><sub>t₀</sub> = 0' },
        { math: '= [<i>t</i><sup>3</sup> − 6<i>t</i><sup>2</sup> + 9<i>t</i>]<sub>0</sub><sup>3</sup> = 27 − 54 + 27 = 0' },
        { text: 'Although the slider was moving, its net displacement = 0, meaning it returned to its original position after 3 sec.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, v1.0.5 > Machine Design and Materials > Laws of Motion'
    },
    {
      id: '20251200', complexity: 'Easy',
      text: 'What is this type of table typically used for?',
      image: 'Screenshots and Questions/Questions/Basic Engineering Practice Questions/problem 54 image.png',
      choices: ['Failure tree analysis (FTA)', 'Risk assessment', 'Failure mode and effects analysis (FMEA)', 'Process improvement'], answer: 2,
      blocks: [
        { text: 'This table is typically used for FMEA. It logically shows a processes step and potential failure mode and is a good visual determining which failure modes are critical for product success.' }
      ],
      reference: ''
    },
    {
      id: '20251205', complexity: 'Easy',
      text: 'Real-world problems are often complex and can incorporate varying fields of engineering and expertise. Passenger safety during a car crash is a problem for which it is difficult to predict strengths and weaknesses. What is one method typically used more than others for taking a problem and breaking it down into smaller, less complex, computable elements to help solve the overall problem?',
      choices: ['FEA (finite element analysis)', 'Crash tests with visual data', 'Kirchoff theory', 'Nondestructive testing'], answer: 0,
      blocks: [
        { text: 'Finite element analysis (FEA) is a method used to analyze an object’s behavior or predict its behavior in specific environments based on engineering calculations. For example, FEA can be used in the automotive world to predict structural capabilities during crash testing. It can divide a complex shape into smaller, simpler elements to more accurately compute different values of stress, strain, heat transfer, and other factors. This analysis suggests that a higher-degree polynomial yields a more accurate result.' }
      ],
      reference: ''
    },
    {
      id: '20251206', complexity: 'Medium',
      html: 'Determine the critical buckling load (<i>P</i><sub>cr</sub>) of a sch 80 NPS 2 steel pipe column with a length (<i>L</i>) of 5 ft. For boundary conditions, assume pinned-pinned.',
      choices: ['55 × 10<sup>3</sup> lb', '69 × 10<sup>3</sup> lb', '581 × 10<sup>3</sup> lb', '654 × 10<sup>3</sup> lb'], answer: 1,
      blocks: [
        { html: 'Use Euler\'s formula: <i>P</i><sub>cr</sub> = <span class="fraction"><span>π<sup>2</sup><i>EI</i></span><span>(<i>KL</i>)<sup>2</sup></span></span>' },
        { text: 'Substitute the values found in the NCEES schedule 80 stable and table and the “Approximate Value of Effective Length Factor, K” table :' },
        { math: 'Section 1.9 Pipe and Tube Data, <i>I</i> = .868 in<sup>4</sup>, <i>E</i> = 29,000 Ksi' },
        { math: '<i>P</i><sub>cr</sub> = <span class="fraction"><span>π<sup>2</sup><i>EI</i></span><span>(<i>KL</i>)<sup>2</sup></span></span> = <span class="fraction"><span>(π<sup>2</sup>)(29,000,000)(0.868)</span><span>(1)(60)<sup>2</sup></span></span>' },
        { math: '= 69,010 lb = 69 × 10<sup>3</sup> lb' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, V 2.0 > Basic Engineering Practice > Pipe and Tube Data\nNCEES PE Mechanical Reference Handbook, V2.0 > Machine Design and Materials > Intermediate- and Long-Length-Column Determination > Long Columns'
    },
    {
      id: '20251207', complexity: 'Medium',
      html: 'Determine the critical buckling stress (<i>σ</i><sub>cr</sub>) of a sch. 80 NPS 2 steel pipe column with a length (<i>L</i>) of 5 ft. For boundary conditions, assume pinned-pinned.',
      choices: ['47 kpsi', '53 kpsi', '84 kpsi', '237 kpsi'], answer: 0,
      blocks: [
        { html: 'Use the following formula: <i>σ</i><sub>cr</sub> = <span class="fraction"><span><i>P</i><sub>cr</sub></span><span><i>A</i></span></span> = <span class="fraction"><span>π<sup>2</sup><i>E</i></span><span>(<span class="fraction"><span><i>Kl</i></span><span><i>r</i></span></span>)<sup>2</sup></span></span>' },
        { html: 'Substitute the values found in the NCEES schedule 80 steel pipe table and the “Approximate Value of Effective Length Factor, <i>K</i>” table, and <i>E</i> = 29,000 ksi:' },
        { math: '<i>σ</i><sub>cr</sub> = <span class="fraction"><span><i>P</i><sub>cr</sub></span><span><i>A</i></span></span> = <span class="fraction"><span>π<sup>2</sup><i>E</i></span><span>(<span class="fraction"><span><i>Kl</i></span><span><i>r</i></span></span>)<sup>2</sup></span></span> = <span class="fraction"><span>(π<sup>2</sup>)(29,000 <i>ksi</i>)</span><span>(<span class="fraction"><span>(1)(60 <i>in</i>)</span><span>0.766 <i>in</i></span></span>)<sup>2</sup></span></span>' },
        { math: '<i>σ</i><sub>cr</sub> = 47 <i>kpsi</i>' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, v 2.0 > Basic Engineering Practice > Pipe and Tube Data\nNCEES PE Mechanical Reference Handbook, v 2.0 > Machine Design and Materials > Intermediate- and Long-Length-Column Determination > Long Columns'
    },
    {
      id: '20251208', complexity: 'Easy',
      html: 'See the following excerpt from OSHA Safety and Health Regulations for Construction 1926 Subpart L App A Scaffold Specifications:<br><br><b>1926 Subpart L App A(1)(d)</b><br>Guardrails shall be as follows:<br><br><b>1926 Subpart L App A(1)(d)(i)</b><br>Toprails shall be equivalent in strength to 2-inch by 4-inch lumber; or 1¼ inch × 1½ inch structural angle iron; or 1 inch .070 inch wall steel tubing; or 1.990 inch .058 inch wall aluminum tubing.<br><br><b>1926 Subpart L App A(1)(d)(ii)</b><br>Midrails shall be equivalent in strength to 1 inch by 6 inch lumber; or ¼ inch × 1½ inch structural angle iron; or 1 inch .070 inch wall steel tubing; or 1.990-inch × 0.058-inch wall aluminum tubing.<br><br><b>1926 Subpart L App A(1)(d)(iii)</b><br>Toeboards shall be equivalent in strength to 1 inch by 4 inch lumber; or 1¼ inch × ¼ inch structural angle iron; or 1 inch .070 inch wall steel tubing; or 1.990 inch × .058 inch wall aluminum tubing.<br><br><b>1926 Subpart L App A(1)(d)(iv)</b><br>Posts shall be equivalent in strength to 2-inch by 4-inch lumber; or ¼ inch × ¼ inch × 1½ structural angle iron; or 1 inch × .070 inch wall steel tubing; or 1.990-inch × 0.058-inch wall aluminum tubing.<br><br><b>1926 Subpart L App A(1)(d)(v)</b><br>Distance between posts shall not exceed 8 feet.<br><br><b>1926 Subpart L App A(1)(e)</b><br>Overhead protection shall consist of 2 inch nominal planking laid tight, or ¾-inch plywood.<br><br><b>1926 Subpart L App A(1)(f)</b><br>Screen installed between toeboards and midrails or toprails shall consist of No. 18 gauge U.S. Standard wire one inch mesh.<br><br>A 1¼ in × 1¼ in × 2/8 in structural angle iron compliant for use as a guardrail material for use as top rails, midrails, and toeboards?',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'OSHA regulation language states that 1-1/4 in × 1-1/4 in × 1/8 in structural angle iron is equivalent to lumber. A 1/8-inch-thicker piece of iron will still have an equivalent value to the lumber, if not more, than the regulation requires, which will hold up in OSHA’s view of the regulation.' }
      ],
      reference: 'OSHA Safety and Health Regulations for Construction 1926 Subpart L App A Scaffold Specifications'
    },
    {
      id: '20251209', complexity: 'Easy',
      html: 'See the following excerpt from OSHA 1910.66: Powered Platforms, Manlifts, and Vehicle-Mounted Work Platforms:<br><br><b>1910.66(f)(3)(ii)</b><br>Transportable outriggers.<br><br><b>1910.66(f)(3)(ii)(A)</b><br>Transportable outriggers may be used as a method of suspension for ground rigged working platforms where the point of suspension does not exceed 300 feet (91.5 m) above a safe surface. Tie-in guide system(s) shall be provided which meet the requirements of paragraph (e)(2) of this section.<br><br><b>1910.66(f)(3)(ii)(B)</b><br>Transportable outriggers shall be used only with self-powered, ground rigged working platforms.<br><br><b>1910.66(f)(3)(ii)(C)</b><br>Each transportable outrigger shall be secured with a tie-down to a verified anchorage on the building during the entire period of its use. The anchorage shall be designed to have a stability factor of not less than four against overturning or upsetting of the outrigger.<br><br><b>1910.66(f)(3)(ii)(D)</b><br>Access to and egress from the working platform shall be from and to a safe surface below the point of suspension.<br><br><b>1910.66(f)(3)(ii)(E)</b><br>Each transportable outrigger shall be designed for lateral stability to prevent roll-over in the event an accidental lateral load is applied to the outrigger. The accidental lateral load to be considered in this design shall be not less than 70 percent of the rated load of the hoist.<br><br><b>1910.66(f)(3)(ii)(F)</b><br>Each transportable outrigger shall be designed to support an ultimate load of not less than four times the rated load of the hoist.<br><br><b>1910.66(f)(3)(ii)(G)</b><br>Each transportable outrigger shall be so located that the suspension wire ropes for two point suspended working platforms are hung parallel.<br><br><b>1910.66(f)(3)(ii)(H)</b><br>A transportable outrigger shall be tied-back to a verified anchorage on the building with a rope equivalent in strength to the suspension rope.<br><br><b>1910.66(f)(3)(ii)(1)</b><br>The tie-back rope shall be installed parallel to the centerline of the outrigger.<br><br>According to this regulation, what is the design ultimate load an outrigger must be capable of supporting in conjunction with a 1,500-lb rated load hoist?',
      choices: ['4,000 lb', '5,000 lb', '6,000 lb', '7,000 lb'], answer: 2,
      blocks: [
        { text: 'Use 1010.66(f)(3)(ii)(F) from the excerpt above and multiply the rated load of the hoist by 4 to satisfy the factor of safety and the ultimate load of 6,000 lb.' }
      ],
      reference: 'OSHA 1910.66: Powered Platforms, Manlifts, and Vehicle-Mounted Work Platforms'
    },
    {
      id: '20251210', complexity: 'Easy',
      html: 'Consider the two definitions below taken from OSHA 1910.66: Powered Platforms, Manlifts, and Vehicle-Mounted Work Platforms:<br><br>“Primary brake means a brake designed to be applied automatically whenever power to the prime mover is interrupted or discontinued.”<br><br>“Secondary brake means a brake designed to arrest the descent of the suspended or supported equipment in the event of an overspeed condition.”<br><br>According to these definitions and engineering judgment, which of the two brakes would seem to have been designed for an emergency or loss of power?',
      choices: ['Primary brake', 'Secondary brake'], answer: 0,
      blocks: [
        { text: 'The primary brake is designed to apply automatically when power is interrupted or lost, which directly corresponds to an emergency or loss-of-power condition.\nThe secondary brake activates only during an overspeed condition, not specifically due to power loss.\n\nTherefore, the brake designed for an emergency or loss of power is the primary brake.' }
      ],
      reference: ''
    },
    {
      id: '20251211', complexity: 'Medium',
      html: 'According to ASTM specifications for steel bolts, which ASTM designation number fits a design constraint of 1¾-in bolt with a minimum proof strength of 55 kpsi, and minimum tensile strength of 90 kpsi?',
      choices: ['A325, type 2', 'A307', 'A325, type 3', 'A449'], answer: 3,
      blocks: [
        { text: 'According to the NCEES ASTM Specifications for Steel Bolts table, A449 is the designation number for a steel bolt to fit a design constraint of 1¾-in bolt with a minimum proof strength of 55 kpsi, and minimum tensile strength of 90 kpsi.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Joints and Fasteners > Tension Connections—External Loads > Table: ASTM Specifications for Steel Bolts'
    },
    {
      id: '91703029', complexity: 'Easy',
      text: 'Which of the following describes the property of a material that corresponds with resistance to pushing or squeezing?',
      choices: ['Capacitance', 'Brittleness', 'Compressive strength', 'Tensile strength'], answer: 2,
      blocks: [
        { text: 'Capacitance is the charge-carrying capacity of an insulating material. Brittle materials are strong in compression but not in tension. Brittle materials break easily. Tensile strength is the material’s ability to withstand pulling or stretching forces. Therefore, compressive strength is correct.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Material Properties > Electrical Properties'
    },
    {
      id: '91704040', complexity: 'Easy',
      text: 'Which is the correct formula for strain?',
      choices: [
        '<i>ε</i> = <span class="fraction"><span><i>L</i> + δ</span><span><i>L</i></span></span>',
        '<i>ε</i> = <span class="fraction"><span><i>L</i> + δ</span><span>δ</span></span>',
        '<i>ε</i> = <span class="fraction"><span>δ</span><span><i>L</i> + δ</span></span>',
        '<i>ε</i> = <span class="fraction"><span>δ</span><span><i>L</i></span></span>'
      ], answer: 3,
      blocks: [
        { text: 'Strain is defined as the elongation, δ, per unit length, L.' }
      ],
      reference: ''
    },
    {
      id: '1706008', complexity: 'Medium',
      text: 'A 10-hp motor spinning at 3,000 rpm outputs to a single plate clutch with OD 10 in and ID 2 in. If the friction material has a friction coefficient of 0.45, what is the force required on the clutch plate? Assume uniform wear theory.',
      choices: ['50 lbf', '75 lbf', '100 lbf', '150 lbf'], answer: 1,
      blocks: [
        { text: 'First calculate shaft output torque of the motor.' },
        { text: 'Refer to the NCEES PE Mechanical Handbook: Mechanical Components: Belts, Pulleys, and Chain Drives.' },
        { math: 'HP = <span class="fraction"><span>T &times; n</span><span>63,025</span></span>' },
        { math: '10 hp = <span class="fraction"><span>T &times; 3,000 rpm</span><span>63,025</span></span>' },
        { math: 'T = 210.083 in &minus; lb' },
        { text: 'Use input torque to determine force via the clutch equation.' },
        { text: 'Refer to the NCEES PE Mechanical Handbook: Mechanical Components: Clutches and Brakes.' },
        { text: 'However, a single-plate clutch actually has two friction interfaces, which is why n = 2 appears in the torque equation. The clutch plate is sandwiched between the flywheel and the pressure plate, creating two contact surfaces transmitting torque.' },
        { text: 'See  Below illustration\n\nEngine' },
        { image: 'Screenshots and Questions/Solutions/Power Transmission/problem 9 image solution.png', alt: 'Single-plate clutch friction interfaces' },
        { text: 'Transmission Side' },
        { math: 'T = <span class="fraction"><span>Ff</span><span>4</span></span> (D + d) &ast; n' },
        { math: '210.083 in &minus; lb = <span class="fraction"><span>F &times; 0.45</span><span>4</span></span> (10 in + 2 in)&ast;2' },
        { math: 'F = 77.5 lb' }
      ],
      reference: 'NCEES PE Mechanical Handbook > Mechanical Components > Clutches and Brakes\n\nNCEES PE Mechanical Handbook > Mechanical Components > Belts, Pulleys, and Chain Drives'
    },
    {
      id: '1706009', complexity: 'Medium',
      text: 'A deep groove ball bearing with a C rating of 500 lbs is used on a motor output shaft spinning 5,000 rpm. If the radial load on the bearing is 200 lbs, what is the expected design life of the bearing in hours?',
      choices: ['25 hours', '52 hours', '70 hours', '105 hours'], answer: 1,
      blocks: [
        { text: 'For solution, use bearing life regression equation given in the NCEES PE Mechanical Reference Handbook: Mechanical Components: Bearings.' },
        { math: 'C = PL<sup>(<span class="fraction"><span>1</span><span>a</span></span>)</sup>' },
        { text: 'C is given at 500 lbs' },
        { text: 'P is given at 200 lbs' },
        { text: 'The problem states that this is a ball bearing, so a = 3.' },
        { text: 'Rewrite the formula to solve for L:' },
        { math: 'C = PL<sup>(<span class="fraction"><span>1</span><span>a</span></span>)</sup>' },
        { math: 'log(<span class="parenthetical"><span class="fraction"><span>C</span><span>P</span></span></span>) = log(L<sup><span class="fraction"><span>1</span><span>a</span></span></sup>)' },
        { math: 'log(C) &minus; log(P) = <span class="fraction"><span>1</span><span>a</span></span> &ast;log(L)' },
        { math: '10<sup>a&ast;(log(C)&minus;log(P))</sup> = L' },
        { math: 'L = 10<sup>3&ast;(log(500)&minus;3&ast;log(200))</sup> = 15.625 Mrev' },
        { text: 'The life is expected to be 15.625 million revolutions.' },
        { text: 'Now convert revolutions to hours given the motor speed of 5,000 rpm.' },
        { math: '<span class="fraction"><span>15,625,000 revs</span><span>5,000 rpm &times; <span class="fraction"><span>60 min</span><span>1 hr</span></span></span></span> = 52.08 hr &asymp; 52 hours' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Mechanical Components > Bearings'
    },
    {
      id: '1706011', complexity: 'Hard',
      html: 'A journal bearing has a journal diameter of 6 in and a length of 5 in. The bushing hole diameter is 6.01 in. The lubricant is SAE grade 60 oil at 150&deg; F. The shaft is carrying 1,800 lbf and rotates at 1,000 rpm. The coefficient of friction is most nearly which of the following?',
      choices: ['0.001', '0.016', '0.033', '0.065'], answer: 2,
      blocks: [
        { text: 'Coefficient of friction equation:' },
        { math: 'f = 2&pi;<sup>2</sup><span class="fraction"><span>&mu;N</span><span>P</span></span><span class="fraction"><span>r</span><span>c</span></span>' },
        { html: 'First calculate the load per unit of projected area P. Journal diameter is given as 6 in, so journal radius is half that at 3 in. No direct equation for projected area is given, but the concept should be known to most engineers and is seen in &ldquo;Failure by Crushing of Rivet or Member (Bearing Stress)&rdquo; in the <i>NCEES PE Mechanical Reference Handbook: Joints and Fasteners: Bolts.</i> Projected area is described.' },
        { math: 'P = <span class="fraction"><span>F</span><span>2rl</span></span> = <span class="fraction"><span>1,800 lbf</span><span>2 &times; 3 in &times; 5 in</span></span> = 60 psi' },
        { text: 'Next convert the shaft speed from rpm to rps:' },
        { math: '1,000 <span class="fraction"><span>rev</span><span>min</span></span> &times; <span class="fraction"><span>1 min</span><span>60 sec</span></span> = 16.667 <span class="fraction"><span>rev</span><span>sec</span></span>' },
        { text: 'Determine absolute viscosity of SAE 60 oil at 150&deg;F.' },
        { html: 'This can be found on the &ldquo;Oil Viscosity Temperature Chart&rdquo; in the <i>NCEES PE Mechanical Reference Handbook: Properties of Materials: Engine Oil Viscosity Classification and Properties.</i>' },
        { text: 'From the chart the SAE 60 line is most closely intersected at 150&deg;F at:' },
        { math: '10&mu;,reyns = 10 &times; 10<sup>&minus;6</sup> reyns' },
        { text: 'Determine radial clearance c. Note that capital letters refer to Bushing diameter or radius, the book does not explicitly list this.' },
        { math: 'c = <span class="fraction"><span>(D &minus; d)</span><span>2</span></span> = R &minus; r' },
        { math: 'c = <span class="fraction"><span>6.01 in &minus; 6 in</span><span>2</span></span> = 0.005 in' },
        { text: 'Now plug all variables into the equation:' },
        { math: 'f = 2&pi;<sup>2</sup><span class="fraction"><span>&mu;N</span><span>P</span></span><span class="fraction"><span>r</span><span>c</span></span>' },
        { math: 'f = 2&pi;<sup>2</sup><span class="fraction"><span>10 &times; 10<sup>&minus;6</sup> reyns &times; 16.667 rps</span><span>60 psi</span></span><span class="fraction"><span>3in</span><span>0.005 in</span></span>' },
        { math: 'f = 0.033' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Engine Oil Viscosity Classification and Properties\n\nNCEES PE Mechanical Reference Handbook: Joints and Fasteners: Bolts\n\nNCEES PE Mechanical Reference Handbook > Mechanical Components > Bearings'
    },
    {
      id: '1706012', complexity: 'Medium',
      text: 'To reduce a motor shaft spinning at 200 rpm to 50 rpm, gears with a diametral pitch of 7 are used. If the pinion gear has 25 teeth, the center distance between the pinion shaft and gear shaft is most nearly which of the following?',
      choices: ['3.57 in', '8.93 in', '14.29 in', '17.85 in'], answer: 1,
      blocks: [
        { text: 'First begin by calculating the pitch-circle diameter for the pinion.' },
        { html: 'Refer to &ldquo;Involute Gear Tooth Nomenclature&rdquo; in the <i>NCEES PE Mechanical Reference Handbook:</i> Mechanical Components: Gears.' },
        { math: 'p<sub>d</sub> = <span class="fraction"><span>N</span><span>d</span></span>' },
        { math: 'd = <span class="fraction"><span>N</span><span>p<sub>d</sub></span></span>' },
        { math: 'd = <span class="fraction"><span>25 teeth</span><span>7 teeth/in</span></span> = 3.57 in' },
        { text: 'Given the input and output speeds, we can calculate the gear ratio and the number of teeth on the gear.' },
        { math: '<span class="fraction"><span>200rpm</span><span>50rpm</span></span> = <span class="fraction"><span>N<sub>gear</sub></span><span>N<sub>pinion</sub></span></span>' },
        { math: '<span class="fraction"><span>200rpm</span><span>50rpm</span></span> = <span class="fraction"><span>N<sub>gear</sub></span><span>25 teeth</span></span>' },
        { math: 'N<sub>gear</sub> = 100 teeth' },
        { text: 'Now calculate the pitch circle diameter for the gear using the same equation as for the pinion.' },
        { math: 'd = <span class="fraction"><span>N</span><span>p<sub>d</sub></span></span>' },
        { math: 'd = <span class="fraction"><span>100 teeth</span><span>7 teeth/in</span></span> = 14.29 in' },
        { text: 'Use center distance between gears equation to calculate answer:' },
        { html: 'Refer to &ldquo;Involute Gear Tooth Nomenclature&rdquo; in the NCEES <i>PE Mechanical Reference Handbook:</i> Mechanical Components: Gears.' },
        { math: 'C = <span class="fraction"><span>d<sub>1</sub> + d<sub>2</sub></span><span>2</span></span>' },
        { math: 'C = <span class="fraction"><span>3.57 in + 14.29 in</span><span>2</span></span> = 8.93 in' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Mechanical Components > Gears'
    },
    {
      id: '1706013', complexity: 'Easy',
      text: 'A belt drive is used to power a mechanical component on a tractor. If the flat urethane belt slips in its typical application, which of the following would NOT be a strategy to address this?',
      choices: ['Switch to timing belt configuration', 'Reconfigure to increase angle of wrap', 'Switch to a leather belt', 'Include a belt tensioner'], answer: 2,
      blocks: [
        { text: 'Flat belt slip occurs when the frictional force between the belt and pulley is insufficient to transmit the required torque. Common strategies to reduce or eliminate slips focus on increasing frictional engagement or providing positive drive.' },
        { text: 'A. Switch to a timing belt configuration - Valid strategy' },
        { text: 'A timing belt provides positive engagement through teeth and does not rely on friction, effectively eliminating slip.' },
        { text: 'B. Reconfigure to increase angle of wrap - Valid strategy' },
        { text: 'Increasing the wrap angle increases the contact area between the belt and pulley, improving frictional grip and reducing slip.' },
        { text: 'D. Include a belt tensioner - Valid strategy' },
        { text: 'A tensioner increases belt tension, thereby increasing the normal force at the pulley and thereby increasing the frictional capacity.' },
        { text: 'C. Switch to a leather belt - NOT a valid strategy' },
        { text: 'Leather belts generally have lower, less consistent friction coefficients than modern urethane belts, especially in outdoor or agricultural environments where moisture, temperature variation, and wear are present. Switching to leather would not reliably address slipping and may worsen it' }
      ],
      reference: ''
    },
    {
      id: '1706020', complexity: 'Easy',
      html: 'A gear set contains a spur pinion with the following properties:<br><br><i>d</i> = 6 in<br><br>&phi; = 20&deg;<br><br>If a torque of 2,500 in-lb is applied to the spur pinion, determine the tangential force on the pinion.',
      choices: ['1,500 lb', '1,200 lb', '1,000 lb', '833 lb'], answer: 3,
      blocks: [
        { math: 'F<sub>t</sub> = <span class="fraction"><span>2T</span><span>d</span></span> = <span class="fraction"><span>2 &times; 2,500 in &times; lb</span><span>6 in</span></span> = 833 lb' }
      ],
      reference: 'Design of Machine Elements'
    },
    {
      id: '1706021', complexity: 'Medium',
      html: 'A gear set contains a spur and pinion with the following properties for the spur:<br><br>Pitch Circle Diameter: d = 6 in<br><br>Pressure Angle @ Pitch Point: &Oslash; = 20&deg;<br><br>If a torque of 2,500 in-lb is applied to the spur by the pinion, determine the separating force on the spur gear.',
      choices: ['833 lb', '416 lb', '303 lb', '208 lb'], answer: 2,
      blocks: [
        { html: 'Standard spur and pinion gears are a subset of beveled gears, where the bevel angle, &gamma;=0. Thus, we see the separating force is equivalent to:' },
        { math: 'r<sub>av</sub> = <span class="fraction"><span>d</span><span>2</span></span>' },
        { math: 'W<sub>t</sub> = <span class="fraction"><span>T</span><span>r<sub>av</sub></span></span> = <span class="fraction"><span>2,500in &times; lb</span><span>6 in/2</span></span> = 833 lb' },
        { math: 'W<sub>r</sub> = W<sub>t</sub> &times; tan (&Oslash;) cos (&gamma;) = 833 &times; tan (20&deg;) cos(0&deg;) = 303 lb' }
      ],
      reference: ''
    },
    {
      id: '1706022', complexity: 'Medium',
      html: 'A gear set contains a spur pinion with the following properties:<br><br><i>d</i> = 6 in<br><br>&phi; = 20&deg;<br><br>If a torque of 2,500 in-lb is applied to the spur pinion, determine the total force on the spur gear tooth.',
      choices: ['833 lb', '416 lb', '886 lb', '303 lb'], answer: 2,
      blocks: [
        { math: 'F<sub>t</sub> = <span class="fraction"><span>2T</span><span>d</span></span> = <span class="fraction"><span>2 &times; 2,500 in &times; lb</span><span>6 in</span></span> = 833 lb' },
        { math: 'F<sub>r</sub> = F<sub>t</sub> &times; tan(&phi;) = 833 &ast;tan(20&deg;) = 303 lb' },
        { math: 'F<sub>total</sub> = <span class="radical">&radic;<span class="radicand">F<sub>t</sub><sup>2</sup> + F<sub>r</sub><sup>2</sup></span></span> = <span class="fraction"><span>F<sub>t</sub></span><span>cos(&phi;)</span></span> = <span class="fraction"><span>833</span><span>cos(20)</span></span> = 886 lb' }
      ],
      reference: ''
    },
    {
      id: '1706024', complexity: 'Medium',
      text: 'A square key with side dimensions of 0.302 in is to be used to key a gear onto a 1.5-in-diameter shaft. If the shaft and key are made of the same material having an allowable shear stress of 9,500 psi, determine the minimum length of the square key if 4,350 in-lb of torque is transmitted.',
      choices: ['2.00 in', '2.25 in', '2.50 in', '2.75 in'], answer: 1,
      blocks: [
        { text: 'From Section 2.16.4 Power Transmission/2.16.4.1 Shaft and Axles (for Solid Shafts), keyways' },
        { math: '<span class="fraction"><span>S<sub>y</sub></span><span>n</span></span> = <span class="fraction"><span>F</span><span>t&ast;l</span></span>' },
        { text: 'Safety factors are n = 1 and T = torque = F*r = F*d/2' },
        { math: '<span class="fraction"><span>S<sub>y</sub></span><span>n</span></span> = <span class="fraction"><span>2&ast;T/d</span><span>t&ast;l</span></span>' },
        { math: '<span class="fraction"><span>9,500 <span class="fraction"><span>lb</span><span>in<sup>2</sup></span></span></span><span>1</span></span> = <span class="fraction"><span>2&ast;4,350 <span class="fraction"><span>in</span><span>lb</span></span></span><span>1.5 in&ast;0.302&ast;l</span></span>' },
        { math: 'l = <span class="fraction"><span>2&ast;4,350 <span class="fraction"><span>in</span><span>lb</span></span></span><span>(1.5 in) &times; 0.305 in &times; 9,500 psi</span></span> = 2.02 in' },
        { text: 'The correct size will be the next standard size up.' },
        { text: 'In this case 2.25 in' }
      ],
      reference: 'NCEES PE Mechanical Handbook V2.0, Chapter 2, Machine Design and Materials 2.16.4.1 Power Transmission, Shaft and Axles and Keyways'
    },
    {
      id: '1706025', complexity: 'Medium',
      text: 'A square key with side dimensions of 0.3 in and a length of 2 in is to be used to key a gear onto a 1.5-in-diameter shaft. If the shaft and key are made of the same material, having an allowable shear stress of 9,500 psi, determine the torque that is transmitted by the key.',
      choices: ['4,275 in-lb', '4,340 in-lb', '6,550 in-lb', '3,020 in-lb'], answer: 0,
      blocks: [
        { math: 'S<sub>s</sub> = <span class="fraction"><span>&tau;</span><span>bLr</span></span>' },
        { text: 'Where: &tau; = torque' },
        { text: 'r = radius' },
        { text: 'b = side length of key' },
        { text: 'L = length of key' },
        { math: '&tau; = L &times; r &times; b &times; S<sub>s</sub> = 2 in &times; 0.75 in &times; 0.3 in &times; 9,500 psi = 4,275 inlb' }
      ],
      reference: ''
    },
    {
      id: '1706026', complexity: 'Hard',
      text: 'A 14-in-diameter pulley rotates with a speed of 1,200 rpm and transmits 4 hp. The belt is 1 in wide by 0.125 in thick and is made of leather with a density of 0.035 lbm/in³. If the coefficient of friction between the belt and pulley is 0.28 and the angle of contact is 180 degrees, find the stress in the belt.',
      choices: ['70 psi', '140 psi', '240 psi', '480 psi'], answer: 3,
      blocks: [
        { math: 'v = r&omega; = 7 in &times; (1,200 rpm) &times; <span class="fraction"><span>1 ft</span><span>12 in</span></span> &times; <span class="fraction"><span>2&pi;rad</span><span>1 rev</span></span> &times; <span class="fraction"><span>1 min</span><span>60 s</span></span> = 73.3 ft/s' },
        { text: 'For the centrifugal force of a belt, reference Pg. 181 of the PE Reference Handbook V. 1-7. We see' },
        { math: 'F<sub>c</sub> = mv<sup>2</sup>' },
        { html: 'where <i>m</i> is the mass per unit length of the belt and <i>v</i> is the velocity. Thus we see the mass per unit length is:' },
        { math: 'm = <span class="fraction"><span>&rho;<sub>belt</sub> Volume<sub>belt</sub></span><span>L<sub>belt</sub></span></span> = <span class="fraction"><span>&rho;<sub>belt</sub>L<sub>belt</sub>w<sub>belt</sub>t<sub>belt</sub></span><span>L<sub>belt</sub></span></span> = &rho;<sub>belt</sub>w<sub>belt</sub>t<sub>belt</sub>' },
        { html: 'where w<sub>belt</sub> and t<sub>belt</sub> are the width and the thickness of the belt. Combining this result with the <i>F<sub>c</sub></i> formula and the velocity result from above, we see:' },
        { math: 'F<sub>c</sub> = &rho;wtv<sup>2</sup> = <span class="fraction"><span>0.035 lbm</span><span>in<sup>3</sup></span></span>(<span class="fraction"><span>12 in</span><span>ft</span></span>)<sup>3</sup> &times; 1in &times; 0.125 in (<span class="fraction"><span>1 ft</span><span>12 in</span></span>)<sup>2</sup>(<span class="fraction"><span>73.3 ft</span><span>s</span></span>)<sup>2</sup>[<span class="fraction"><span>1 lbf &minus; s<sup>2</sup></span><span>32.2 lbm &minus; ft</span></span>] = 8.76 lbf' },
        { text: 'The power equation is shown on Pg. 179 of the PE Reference Handbook (V. 1-7).' },
        { math: 'Power = Fv' },
        { text: ', where F = Force and v = velocity.' },
        { text: 'We must consider the constant force causing the motion is due to the tension side of the belt-pulley system. By combining the power equation with the belt centrifugal force equation on Pg.181, we can see the following:' },
        { text: 'Belt Centrifugal Force Equation' },
        { math: '<span class="fraction"><span>F<sub>1</sub> &minus; F<sub>c</sub></span><span>F<sub>2</sub> &minus; F<sub>c</sub></span></span> = e<sup>&mu;&Oslash;</sup>' },
        { text: 'Or, analogously, we see the tension side force is:' },
        { math: 'F<sub>1</sub> = F<sub>c</sub> + (F<sub>2</sub> &minus; F<sub>c</sub>) e<sup>&mu;&Oslash;</sup>' },
        { text: 'The driving force across the pulley is the resultant force from the tension side less the slack side:' },
        { math: 'Power = Fv = (F<sub>1</sub> &minus; F<sub>2</sub>)v = [(F<sub>c</sub> + (F<sub>2</sub>&minus;F<sub>c</sub>)e<sup>&mu;&Oslash;</sup>)&minus;F<sub>2</sub>)v][<span class="fraction"><span>1 hp</span><span>550 ft &minus; lbf sec</span></span>]' },
        { math: 'F<sub>2</sub> = F<sub>c</sub> + <span class="fraction"><span>550(Power)</span><span>(e<sup>&mu;&Oslash;</sup>&minus;1)v</span></span> = 8.76lbf + <span class="fraction"><span>(550 ft &minus; lbf / sec / hp)4hp</span><span>(e<sup>&mu;&Oslash;</sup>&minus;1)&times;73.3</span></span> = 30.04 lb' },
        { math: 'F<sub>1</sub> = F<sub>c</sub> + (F<sub>2</sub> &minus; F<sub>c</sub>)e<sup>&mu;&Oslash;</sup> = 8.76 lbf + (30.04 lbf &minus; 8.76 lbf)e<sup>0.28&pi;</sup> = 60.05 lbf' },
        { math: '&sigma; = <span class="fraction"><span>F<sub>1</sub></span><span>wt</span></span> = <span class="fraction"><span>60.05 lbf</span><span>1in &times; 0.125 in</span></span> = 480.4 psi' }
      ],
      reference: ''
    },
    {
      id: '1706030', complexity: 'Medium',
      text: 'A single-row ball bearing is rotated at 1,750 rpm and has a dynamic basic-load rating of 14.00 kN. A radial load of 1,500 N is applied to the bearing. What is the expected lifetime of the bearing?',
      choices: ['2.8 hrs', '464,593 hrs', '225,844 hrs', '7,743 hrs'], answer: 3,
      blocks: [
        { text: 'Using the equation from 2.16.2.1 section' },
        { math: 'C = P&ast;L<sup><span class="fraction"><span>1</span><span>a</span></span></sup>' },
        { text: 'Where a=3, P=1,500N and C=14.00KN. &nbsp;Expressing the equation in a function of L, the following is obtained.' },
        { math: 'L<sub>10</sub> = (<span class="fraction"><span>10<sup>6</sup></span><span>n<sub>rpm</sub>(60 <span class="fraction"><span>min</span><span>hr</span></span>)</span></span>)(<span class="fraction"><span>C<sub>r</sub></span><span>P<sub>r</sub></span></span>)<sup>3</sup> = (<span class="fraction"><span>10<sup>6</sup></span><span>1,750 rpm (60 <span class="fraction"><span>min</span><span>hr</span></span>)</span></span>)(<span class="fraction"><span>14.00 kN</span><span>1.5 kN</span></span>)<sup>3</sup> = 7,743 hr' }
      ],
      reference: 'NCEES PE Mechanical Handbook V2.0> Chapter 2 Machine Design and Materials > 2.16 Mechanical Components >2.16.21 Bearings'
    },
    {
      id: '1706031', complexity: 'Medium',
      html: 'A 2-4 Acme-threaded power screw is operated with the following parameters: d<sub>major</sub> = 2.00 in, d<sub>minor</sub> = 1.72 in, number of starts = 1, and lead = 0.25 in/rev. What is the minimum coefficient of friction for this power screw to be self-locking?',
      choices: ['0.05', '0.10', '0.15', '0.30'], answer: 0,
      blocks: [
        { html: 'A power screw is self-locking if tan &theta; &le; f.' },
        { math: 'L = &pi;d<sub>m</sub> tan &theta;' },
        { text: 'Rearrange the equation and solve for tan θ.' },
        { math: 'tan &theta; = <span class="fraction"><span>L</span><span>&pi;d<sub>m</sub></span></span>' },
        { html: 'Calculate d<sub>m</sub>.' },
        { math: 'd<sub>m</sub> = <span class="fraction"><span>d<sub>major</sub> + d<sub>minor</sub></span><span>2</span></span> = <span class="fraction"><span>2.00 in + 1.72 in</span><span>2</span></span> = 1.86 in' },
        { text: 'Solve the above equation.' },
        { math: 'tan &theta; = <span class="fraction"><span>0.25 in</span><span>&pi; &times; 1.86 in</span></span> = 0.043 &asymp; 0.05' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Mechanical Components > Power Screws'
    },
    {
      id: '1706033', complexity: 'Medium',
      text: 'A given single plate clutch with an OD of 7 in and ID of 4 in has friction material with a friction coefficient of 0.5. The friction material has a max pressure of 30 psi. The difference in normal force for this clutch between uniform pressure and uniform wear is most nearly:',
      choices: ['200 lb.', '560 lb.', '770 lb.', '1,200 lb.'], answer: 0,
      blocks: [
        { text: 'Use clutch equations to determine axial force under uniform pressure and uniform wear conditions' },
        { text: '[Section 2.16.7, clutches and brakes]' },
        { text: 'Uniform wear' },
        { math: 'F = <span class="fraction"><span>&pi;p<sub>max</sub>d</span><span>2</span></span>(D &minus; d)' },
        { math: 'F = <span class="fraction"><span>&pi;(30 psi)4 in</span><span>2</span></span>(7 in &minus; 4 in)' },
        { math: 'F<sub>uw</sub> = 565.49 lb' },
        { text: 'Uniform pressure' },
        { math: 'F = <span class="fraction"><span>&pi;p<sub>max</sub></span><span>4</span></span>(D<sup>2</sup> &minus; d<sup>2</sup>)' },
        { math: 'F = <span class="fraction"><span>&pi;(30 psi)</span><span>4</span></span>((7 in)<sup>2</sup> &minus; (4 in)<sup>2</sup>)' },
        { math: 'F<sub>up</sub> = 777.54 lb' },
        { text: 'Subtract and determine the difference:' },
        { math: '777.54 lb &minus; 565.49 lb' },
        { math: '&Delta;F = 212.06 lb = 200 lb' }
      ],
      reference: ''
    },
    {
      id: '1706034', complexity: 'Easy',
      text: 'An electrical motor rated for 20 amps and 240 volts has an electrical motor efficiency of 85%. The mechanical motor output in watts is most nearly:',
      choices: ['2000 W.', '3800 W.', '4080 W.', '4800 W.'], answer: 2,
      blocks: [
        { text: 'Use equations for electrical power to determine motor power output' },
        { text: '[Section 1.10.7.2, power, p. 82]' },
        { math: 'P = IV' },
        { math: 'P = 20 amp &times; 240 volt' },
        { math: 'P = 4800 watts' },
        { text: 'Convert the motor output to mechanical power.' },
        { text: '[PE Mechanical Reference Handbook 2.0, Section 1.10.7, pg. 87]' },
        { math: '&eta;<sub>m</sub>P<sub>elec</sub> = P<sub>mech</sub>' },
        { math: 'P<sub>mech</sub> = 0.85 &times; 4800 watts' },
        { math: 'P<sub>mech</sub> = 4080 watts' }
      ],
      reference: ''
    },
    {
      id: '1706035', complexity: 'Medium',
      text: 'A single-cylinder motor is producing 25 ft-lb of torque at 3300 rpm. If the attached generator is outputting 10 kW, the electric generator efficiency is most nearly:',
      choices: ['50%', '75%.', '85%.', '95%.'], answer: 2,
      blocks: [
        { text: 'Determine output shaft hp of the motor' },
        { text: '[Section 2.16.6.2, shaft horsepower relationship, p.190]' },
        { math: 'HP = <span class="fraction"><span>T &times; n</span><span>63,025</span></span>' },
        { math: 'HP = <span class="fraction"><span>25 ft-lb (12 in/1 ft)(3300 rpm)</span><span>63,025</span></span>' },
        { math: 'HP = 15.71 hp' },
        { text: 'Convert horsepower to watts' },
        { text: '[Section 1.1, engineering terms and symbols, p.1]' },
        { math: '1 hp &times; 745.7 = 1 watt' },
        { math: '15.71 hp &times; 745.7 = W' },
        { math: 'W = 11713.49 watts' },
        { text: 'Calculate efficiency' },
        { text: '[Section 1.10.7.5, electrical power, p.87]' },
        { math: '&eta;<sub>G</sub>P<sub>mech</sub> = P<sub>elec</sub>' },
        { math: '&eta;<sub>G</sub> = <span class="fraction"><span>P<sub>elec</sub></span><span>P<sub>mech</sub></span></span>' },
        { math: '&eta;<sub>G</sub> = <span class="fraction"><span>10 kW</span><span>11713 w(1 kW/1000 W)</span></span>' },
        { math: '&eta;<sub>G</sub> = 0.854 = 85%' }
      ],
      reference: ''
    },
    {
      id: '1706036', complexity: 'Easy',
      text: 'A direct current 5-hp motor with 95% efficiency draws 10 amps at full load. The motor voltage is most nearly:',
      choices: ['120 volts.', '180 volts.', '300 volts.', '390 volts.'], answer: 3,
      blocks: [
        { html: 'It should be known that DC motors are only single phased and the power factor of a DC motor is 100%. Therefore, we can use equations from the NCEES <i>PE Mechanical Reference Handbook:</i> Electrical Concepts of Motors: Torques.' },
        { math: 'I<sub>amps</sub> = <span class="fraction"><span>P<sub>hp</sub>(746)</span><span>V&eta;(pf)</span></span>' },
        { math: '10 amp = <span class="fraction"><span>5 hp(746)</span><span>V(0.95)(1)</span></span>' },
        { math: 'V = <span class="fraction"><span>5 hp(746)</span><span>(10 amp)0.95(1)</span></span>' },
        { math: 'V = 392.63 volts' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Electrical Concepts of Motors > Torques'
    },
    {
      id: '1706037', complexity: 'Medium',
      text: 'A two-sided clutch must be designed to fit inside a 10 in diameter housing. The inner diameter of the clutch is limited to 3 in. The clutch axial force is applied on each side by six springs that have an equivalent spring constant of 300 lb/in. When the clutch is engaged, the springs are compressed 0.6 in from their free length. What value is closest to the maximum torque that the clutch can support? Assume uniform pressure and a friction coefficient of 0.3 for the clutch plate.',
      choices: ['190 in-lb', '320 in-lb', '380 in-lb', '641 in-lb'], answer: 2,
      blocks: [
        { html: 'First, determine the axial force into the clutch plate using “Spring Energy” from the NCEES <i>PE Mechanical Reference Handbook:</i> Mechanical Components: Springs.' },
        { math: 'F<sub>s</sub> = kx' },
        { math: 'F<sub>s</sub> = 300 lb/in &times; 0.6 in' },
        { math: 'F<sub>s</sub> = 180 lb' },
        { html: 'Next, determine the torque output of the friction surface using “clutches and brakes” from the NCEES <i>PE Mechanical Reference Handbook:</i> Mechanical Components: Clutches and Brakes.' },
        { math: 'T = <span class="fraction"><span>Ff</span><span>3</span></span> &times; <span class="fraction"><span>(D<sup>3</sup> &minus; d<sup>3</sup>)</span><span>(D<sup>2</sup> &minus; d<sup>2</sup>)</span></span>' },
        { math: 'T = <span class="fraction"><span>180 lb &times; 0.3</span><span>3</span></span> &times; <span class="fraction"><span>((10 in)<sup>3</sup> &minus; (3 in)<sup>3</sup>)</span><span>((10 in)<sup>2</sup> &minus; (3 in)<sup>2</sup>)</span></span>' },
        { math: 'T = 192.46 in&minus;lb' },
        { text: 'The clutch is two-sided, so the torque must be multiplied by the number of friction surfaces.' },
        { math: 'T<sub>F</sub> = T &times; n' },
        { math: 'T<sub>F</sub> = 192.46 in&minus;lb &times; 2 sides' },
        { math: 'T<sub>F</sub> = 384.92 in&minus;lb = 380 in&minus;lb' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Mechanical Components > Clutches and Brakes<br><br>NCEES PE Mechanical Reference Handbook > Mechanical Components > Springs'
    },
    {
      id: '1706038', complexity: 'Medium',
      html: 'The brake caliper shown in Figure 1 must generate sufficient braking torque to resist a 55 ft-lb torque at one wheel. The brake disk has an inner friction radius of 4 in. and an outer friction radius of 9 in. The brake lining has a coefficient of friction of 0.42, and uniform wear is assumed.<br><br>A single brake pad contacts approximately one-quarter of the circumference of the brake disk. This angular coverage does not affect the torque equation; it is provided only to illustrate the pad geometry. The caliper applies the required normal force through two 1.5-in.-diameter hydraulic pistons acting on the brake pad.<br><br>Determine the hydraulic pressure required in the pistons to produce the braking torque.',
      image: 'Screenshots and Questions/Questions/Power Transmission Questions/problem 27 image.jpg',
      choices: ['137 psi', '70 psi', '140 psi', '280 psi'], answer: 1,
      blocks: [
        { text: 'The uniform-wear torque equation uses the total normal force applied to the actual pad and its effective radius; therefore, an additional correction based solely on the pad’s angular area is not required. The attached document identifies the 4-in. and 9-in. pad radii and states that two 1.5-in.-diameter pistons actuate each pad.' },
        { text: 'The brake must resist a torque of:' },
        { math: 'T = 55 ft&minus;lb (12) = 660 in&minus;lb' },
        { text: 'From the figure on page 1, the brake pad extends from an inner radius of 4 in. to an outer radius of 9 in. Under the uniform-wear assumption, the effective friction radius is:' },
        { math: 'r<sub>m</sub> = <span class="fraction"><span>r<sub>o</sub> + r<sub>i</sub></span><span>2</span></span> = <span class="fraction"><span>9 + 4</span><span>2</span></span> = 6.5 in.' },
        { text: 'For one brake pad, the braking torque is:' },
        { math: 'T = &mu;Fr<sub>m</sub>' },
        { html: 'where:<br>&nbsp;&nbsp;&nbsp;&nbsp;• &mu; = 0.42<br>&nbsp;&nbsp;&nbsp;&nbsp;• F is the normal force applied to the pad<br>&nbsp;&nbsp;&nbsp;&nbsp;• r<sub>m</sub> = 6.5 in.' },
        { text: 'Solving for the required normal force:' },
        { math: 'F = <span class="fraction"><span>T</span><span>&mu;r<sub>m</sub></span></span>' },
        { math: 'F = <span class="fraction"><span>660</span><span>(0.42)(6.5)</span></span> = 241.76 lbf' },
        { text: 'Each brake pad is actuated by two hydraulic pistons, each having a diameter of 1.5 in. The total piston area acting on one pad is:' },
        { math: 'A<sub>p</sub> = 2[<span class="fraction"><span>&pi;d<sup>2</sup></span><span>4</span></span>]' },
        { math: 'A<sub>p</sub> = 2[<span class="fraction"><span>&pi;(1.5)<sup>2</sup></span><span>4</span></span>] = 3.534 in<sup>2</sup>' },
        { text: 'Rounding to the nearest available answer:' },
        { math: 'p &asymp; 70' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook. V2.0 > Elements of Machine Design and Methodologies > Belts Pulleys and Chain'
    },
    {
      id: '1706039', complexity: 'Medium',
      text: 'A given single-plate clutch with an outer diameter of 7 in and an inner diameter of 4 in has friction material with a friction coefficient of 0.3. Axial normal force is 600 lb. What value is closest to the difference in torque for this clutch between uniform pressure and uniform wear?',
      choices: ['12 in-lb', '24 in-lb', '48 in-lb', '106 in-lb'], answer: 0,
      blocks: [
        { html: 'Use clutch equations to determine the maximum torque under uniform pressure and uniform wear conditions. Determine the torque output of the friction surface using NCEES <i>PE Mechanical Reference Handbook:</i> Mechanical Components: Clutches and Brakes' },
        { math: 'T = <span class="fraction"><span>Ff</span><span>3</span></span> &times; <span class="fraction"><span>(D<sup>3</sup> &minus; d<sup>3</sup>)</span><span>(D<sup>2</sup> &minus; d<sup>2</sup>)</span></span>' },
        { math: 'T = <span class="fraction"><span>600 lb &times; 0.3</span><span>3</span></span> &times; <span class="fraction"><span>((7 in)<sup>3</sup> &minus; (4 in)<sup>3</sup>)</span><span>((7 in)<sup>2</sup> &minus; (4 in)<sup>2</sup>)</span></span>' },
        { math: 'T = 507.27 in&minus;lb' },
        { html: 'Use input torque to determine the force via the clutch equation from “clutches and brakes” in the <i>NCEES PE Mechanical Reference Handbook:</i> Mechanical Components: Clutches and Brakes: T = <span class="fraction"><span>Ff</span><span>4</span></span> &times; (D + d)' },
        { math: 'T = <span class="fraction"><span>600 lb &times; 0.3</span><span>4</span></span> &times; (7 in + 4 in)' },
        { math: 'T = 495 in&minus;lb' },
        { text: 'Subtract and determine the difference' },
        { math: '&Delta;T = 507.27 in&minus;lb &minus; 495 in&minus;lb' },
        { math: '&Delta;T = 12.27 in&minus;lb &asymp; 12 in&minus;lb' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Mechanical Components > Clutches and Brakes<br><br>NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies: Belts > Pulleys and Chain Drives'
    },
    {
      id: '1706040', complexity: 'Easy',
      text: 'An electrical motor rated for 15A and 120V has an electrical motor efficiency of 90%. What value is closest to the mechanical motor output in horsepower (hp)?',
      choices: ['2.2 hp', '3.5 hp', '1,620 hp', '1,800 hp'], answer: 0,
      blocks: [
        { html: 'Use the equations for electrical power from “power” in the NCEES <i>PE Mechanical Reference Handbook,</i> v. 1.3, p. 85 to determine motor power output.' },
        { math: 'P = IV' },
        { math: 'P = 15A &times; 120V' },
        { math: 'P = 1,800W' },
        { html: 'Convert the motor output to mechanical power using “Mechanical Power” in the NCEES <i>PE Mechanical Reference Handbook:</i> Electrical Concepts of Motors: Basic Circuits.' },
        { math: '&eta;<sub>m</sub>P<sub>elec</sub> = P<sub>mech</sub>' },
        { math: 'P<sub>mech</sub> = 0.9 &times; 1,800 W' },
        { math: 'P<sub>mech</sub> = 1,620W' },
        { html: 'Convert watts to horsepower using the table from the NCEES <i>PE Mechanical Reference Handbook:</i> <i>Engineering Terms and Symbols.</i>' },
        { math: '1 hp &times; 745.7 = 1W' },
        { math: '<span class="fraction"><span>1,620W</span><span>745.7</span></span> = hp' },
        { math: 'hp = 2.17 hp = 2.2 hp' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Electrical Concepts of Motors > Basic Circuits<br><br>NCEES PE Mechanical Reference Handbook > Engineering Terms and Symbols'
    },
    {
      id: '1706041', complexity: 'Medium',
      html: 'A 10 hp motor running at 3300 rpm has a 50-tooth gear with a 5 in pitch diameter and ½ in width mounted to the output shaft. Assuming a Lewis form factor of 0.4, what value is closest to the maximum bending stress in the gear tooth?',
      choices: ['1,000 psi', '1,900 psi', '3,800 psi', '4,500 psi'], answer: 2,
      blocks: [
        { html: 'Begin with calculating the pitch line velocity from “spur gears” in the NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Mechanical Components' },
        { math: 'V = <span class="fraction"><span>&pi;dn</span><span>12</span></span>' },
        { math: 'V = <span class="fraction"><span>&pi; &times; 5 in &times; 3,300 rpm</span><span>12</span></span> = 4,319.69 ft/min' },
        { text: 'Use the V calculated to determine transmitted load:' },
        { math: 'W<sub>t</sub> = <span class="fraction"><span>33,000 H</span><span>V</span></span>' },
        { math: 'W<sub>t</sub> = <span class="fraction"><span>33,000 &times; 10 hp</span><span>4,319.69 ft/min</span></span> = 76.39 lbf' },
        { text: 'The maximum bending stress in the gear teeth requires that the diametral pitch be known.' },
        { math: 'P<sub>d</sub> = <span class="fraction"><span>N</span><span>d</span></span>' },
        { math: 'P<sub>d</sub> = <span class="fraction"><span>50 teeth</span><span>5 in</span></span> = 10 teeth/in' },
        { html: 'Now, use the equation for maximum bending stress in a gear tooth from “spur gears” in the NCEES <i>PE Mechanical Reference Handbook:</i> Elements of MAchine Design and Methodologies: Mechanical Components' },
        { math: '&sigma; = <span class="fraction"><span>W<sub>t</sub>P<sub>d</sub></span><span>FY</span></span>' },
        { math: '&sigma; = <span class="fraction"><span>76.39 lbf &times; <span class="fraction"><span>10 teeth</span><span>1 in</span></span></span><span>0.5 in &times; 0.4</span></span> = 3,819.72 psi &asymp; 3,800 psi' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Mechanical Components'
    },
    {
      id: '1706042', complexity: 'Hard',
      text: 'A radial ball bearing has a static load rating of 7,500 lbf based on a million-revolution life. The inner ring rotates with no shock loading. The bearing design case stipulates a 6,500 lbf radial load and a 3,500 lbf thrust load. What is most nearly the expected service life in revolutions?',
      choices: ['280,000 rev', '560,000 rev', '1,100,000 rev', '1,600,000 rev'], answer: 2,
      blocks: [
        { html: 'Begin by finding the ratio of radial to thrust loading, <i>V</i> = 1.0 since the inner ring rotates.' },
        { math: '<span class="fraction"><span>F<sub>a</sub></span><span>VF<sub>r</sub></span></span> &gt; e' },
        { math: '<span class="fraction"><span>F<sub>a</sub></span><span>VF<sub>r</sub></span></span> = <span class="fraction"><span>3,500 lbf</span><span>1.0 &times; 6,500 lbf</span></span> = 0.538' },
        { math: 'e = 0.513(<span class="fraction"><span>F<sub>a</sub></span><span>C<sub>0</sub></span></span>)<sup>0.236</sup> = 0.513(<span class="fraction"><span>3,500 lbf</span><span>7,500 lbf</span></span>)<sup>0.236</sup> = 0.429' },
        { text: 'Because the e value is lower, X = 0.56 and Y is calculated below:' },
        { math: 'Y = 0.840(<span class="fraction"><span>F<sub>a</sub></span><span>C<sub>0</sub></span></span>)<sup>&minus;0.247</sup> = 0.840(<span class="fraction"><span>3,500 lbf</span><span>7,500 lbf</span></span>)<sup>&minus;0.247</sup> = 1.014' },
        { text: 'Use equation or equivalent radial load:' },
        { math: 'P<sub>eq</sub> = XVF<sub>r</sub> + YF<sub>a</sub>' },
        { math: 'P<sub>eq</sub> = 0.56 &times; 1.0 &times; 6,500 lbf + 1.014 &times; 3,500 lbf' },
        { math: 'P<sub>eq</sub> = 7,188.97 lbf' },
        { text: 'Use bearing life regression equation:' },
        { math: 'C = PL<sup>(<span class="fraction"><span>1</span><span>a</span></span>)</sup>' },
        { math: '<span class="fraction"><span>C</span><span>P</span></span> = L<sup>(<span class="fraction"><span>1</span><span>a</span></span>)</sup>' },
        { math: '(<span class="fraction"><span>C</span><span>P</span></span>)<sup>a</sup> = L' },
        { math: '(<span class="fraction"><span>7,500 lbf</span><span>7,188.97 lbf</span></span>)<sup>3</sup> &times; 10<sup>6</sup> = L' },
        { math: 'L = 1,135,489 rev' }
      ],
      reference: 'Section 2.16.2.1 “Ball/Roller Bearing Selection” in NCEES PE Mechanical Reference Manual'
    },
    {
      id: '1706044', complexity: 'Hard',
      text: 'A steel shaft with a diameter of 4 inches has a yield stress of 56,000 psi. A key will be fabricated from a 7/8-inch square steel stock, which has a yield stress of 75,000 psi. The allowable shear stress is specified as half of the material\'s yield stress. What is the necessary length of the key to ensure its strength matches that of the shaft? Use a safety factor of 1.2 (in shear)?',
      choices: ['3.7 in', '6.5 in', '8.9 in', '9.8 in'], answer: 1,
      blocks: [
        { text: 'First, determine the torsional stress in the shaft:' },
        { math: '&tau; = <span class="fraction"><span>Tr</span><span>J</span></span>' },
        { math: 'J = <span class="fraction"><span>&pi;a<sup>4</sup></span><span>2</span></span> = (<span class="fraction"><span>&pi;(2 in)<sup>4</sup></span><span>2</span></span>) = 25.13 in<sup>4</sup>' },
        { math: '&tau; = <span class="fraction"><span>S<sub>y</sub></span><span>2</span></span> = <span class="fraction"><span>Tr</span><span>J</span></span>' },
        { math: '<span class="fraction"><span>56,000 psi</span><span>2</span></span> = <span class="fraction"><span>T &times; 2 in</span><span>25.13 in<sup>4</sup></span></span>' },
        { math: 'T = 351,858 in&minus;lbf' },
        { text: 'Convert torque to force:' },
        { math: 'T = Fr' },
        { math: '351,858 in&minus;lbf = F &times; 2 in' },
        { math: 'F = 175,929 lbf' },
        { text: 'Determine the sheer stress that the key can withstand given the safety factor required:' },
        { math: '&tau; = <span class="fraction"><span>S<sub>y</sub></span><span>2</span></span>' },
        { math: '&tau;<sub>allowable</sub> = <span class="fraction"><span>(<span class="fraction"><span>S<sub>y</sub></span><span>2</span></span>)</span><span>FS</span></span> = <span class="fraction"><span>(<span class="fraction"><span>75,000 psi</span><span>2</span></span>)</span><span>1.2</span></span> = 31,250 psi' },
        { text: 'Knowing the max shear stress for the key and the input force from the shaft, calculate the key length:' },
        { math: '&tau;<sub>allowable</sub> = <span class="fraction"><span>F</span><span>A</span></span>' },
        { math: '31,250 psi = <span class="fraction"><span>175,929 lbf</span><span>A</span></span>' },
        { math: 'A = 5.629 in<sup>2</sup> = width &times; length' },
        { math: 'Length = <span class="fraction"><span>5.629 in<sup>2</sup></span><span><span class="fraction"><span>7</span><span>8</span></span> in</span></span> = 6.43 in' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, v. 2.0, Chapter 2, Section 2.11 Stress Analysis'
    },
    {
      id: '1706045', complexity: 'Medium',
      text: 'A straight-cut spur gear has a pitch diameter of 4.00 in, a face width of 1.5 in, 45 teeth, and a Lewis form factor of 0.44. Bending stress at the tooth root is limited to 45,000 psi. What is the allowable tangential load per tooth? Disregard additional stress factors.',
      choices: ['1,500 lbf', '2,600 lbf', '3,800 lbf', '11,000 lbf'], answer: 1,
      blocks: [
        { math: 'p<sub>d</sub> = <span class="fraction"><span>N</span><span>d</span></span> = <span class="fraction"><span>45 teeth</span><span>4 in</span></span> = 11.25' },
        { text: 'Lewis equation used for maximum bending stress in a gear tooth:' },
        { math: '&sigma; = <span class="fraction"><span>W<sub>t</sub>P<sub>d</sub></span><span>FY</span></span>' },
        { math: '45,000 psi = <span class="fraction"><span>W<sub>t</sub> &times; 11.25 in<sup>&minus;1</sup></span><span>1.5 in &times; 0.44</span></span>' },
        { math: 'W<sub>t</sub> = 2,640 lbf' }
      ],
      reference: 'Section 2.16.5.2 “Involute Gear Tooth Nomenclature” in the NCEES PE Mechanical Reference Handbook'
    },
    {
      id: '1706046', complexity: 'Medium',
      text: 'A 10-in-diameter gear is mated to a 4-in-diameter pinion to form a gear set. The 10-in-diameter gear is spinning at 1,475 rpm and 45 hp is applied to the 4-in-diameter pinion. How much torque is being applied to the pinion?',
      choices: ['45 ft-lb', '65 ft-lb', '80 ft-lb', '105 ft-lb'], answer: 1,
      blocks: [
        { math: '<span class="fraction"><span>diam<sub>gear</sub></span><span>diam<sub>pinion</sub></span></span> = <span class="fraction"><span>n<sub>pinion</sub></span><span>n<sub>gear</sub></span></span>' },
        { math: '<span class="fraction"><span>10 in</span><span>4 in</span></span> = <span class="fraction"><span>n<sub>pinion</sub></span><span>1,475 rpm</span></span>' },
        { math: 'n<sub>pinion</sub> = 3,687.5 rpm' },
        { text: 'Calculate pitch circle velocity, which is the same for both the gear and pinion:' },
        { math: 'V = <span class="fraction"><span>&pi;dn</span><span>12</span></span> = <span class="fraction"><span>&pi; &times; 10 in &times; 1,475 rpm</span><span>12 in/ft</span></span> = 3,861.5 ft/min' },
        { text: 'Calculate transmitted load:' },
        { math: 'W<sub>t</sub> = <span class="fraction"><span>33,000 H</span><span>V</span></span> = <span class="fraction"><span>33,000 &times; 45 hp</span><span>3,861.5 ft/min</span></span>' },
        { text: 'Calculate torque:' },
        { math: 'T = Fr = F<span class="fraction"><span>d<sub>pinion</sub></span><span>2</span></span>' },
        { math: 'T = 384.56 lbf &times; <span class="fraction"><span>4 in</span><span>2</span></span> = 769.123 in&minus;lbf = 64.09 ft&minus;lbf' }
      ],
      reference: 'Section 2.16.5.2 “Involute Gear Tooth Nomenclature” in the NCEES PE Mechanical Reference Handbook'
    },
    {
      id: '1706047', complexity: 'Medium',
      text: 'A shaft spins at 30 rpm through a 3.5-in-wide journal bearing. The shaft diameter is 1.5 in and the journal radial clearance is 0.001 in. The friction coefficient is 0.005 and the pressure that must be supported is 300 psi. What viscosity of oil is needed for the bearing in this design?',
      choices: ['2.1E-4 reyn', '1.7E-4 reyn', '0.7E-4 reyn', '0.1E-4 reyn'], answer: 0,
      blocks: [
        { math: 'f = 2&pi;<sup>2</sup><span class="fraction"><span>&mu;N</span><span>P</span></span><span class="fraction"><span>r</span><span>c</span></span>' },
        { math: '0.005 = 2&pi;<sup>2</sup>[<span class="fraction"><span>&mu; &times; 30 rpm</span><span>300 psi</span></span>][<span class="fraction"><span>0.75 in</span><span>0.001 in</span></span>]<span class="fraction"><span>1</span><span>60 sec/min</span></span> &nbsp;|&nbsp; &mu; = 2.03 E&minus;4' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, Machine Design and Material Chapter 2'
    },
    {
      id: '1706050', complexity: 'Medium',
      html: 'What is the lead angle of a 3/8-in UNF bolt that experiences an efficiency of 75% and a raise torque of 6 in-lbf under a load of 680 lbf?',
      choices: ['4.53°', '2.17°', '3.12°', '1.75°'], answer: 1,
      blocks: [
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Mechanical Components for power screws and the NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Joints and Fasteners for bolt dimensions.' },
        { text: 'Find the mean diameter and lead. (Note: Lead may be calculated in two different ways. Both solutions have been given here. The differences between the results are due to rounding errors.)' },
        { math: 'L = N &times; p = 1 &times; <span class="fraction"><span>1</span><span>24 tpi</span></span> = 1 &times; <span class="fraction"><span>1</span><span>24 tpi</span></span> = 0.0417 in' },
        { math: 'L = <span class="fraction"><span>&eta; &times; 2 &times; &pi; &times; T<sub>r</sub></span><span>F</span></span> = <span class="fraction"><span>0.75 &times; 2 &times; &pi; &times; 6 in &times; lbf</span><span>680 lbf</span></span> = 0.0416 in' },
        { math: 'd<sub>m</sub> = <span class="fraction"><span>d<sub>major</sub> + d<sub>minor</sub></span><span>2</span></span> = <span class="fraction"><span>0.375 in + 0.3254 in</span><span>2</span></span> = 0.35 in' },
        { math: '&lambda; = tan<sup>&minus;1</sup>(<span class="fraction"><span>lead</span><span>&pi; &times; d<sub>m</sub></span></span>) = tan<sup>&minus;1</sup>(<span class="fraction"><span>0.0417 in</span><span>&pi; &times; 0.35 in</span></span>) = 2.172°' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Joints and Fasteners<br><br>NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Mechanical Components'
    },
    {
      id: '1706051', complexity: 'Medium',
      html: 'A shaft running at 600-rpm transmits 12 kW. Assuming the allowable shear stress in the shaft is 40 MPa, the diameter of the shaft is most nearly which of the following?<br><br>Given:<br><br><span class="math">&tau; = <span class="fraction"><span>Tr</span><span>J</span></span></span><br><br><span class="math">J<sub>shaft</sub> = <span class="fraction"><span>&pi;r<sup>4</sup></span><span>2</span></span></span><br><br><span class="math">T = <span class="fraction"><span>5250 &times; HP</span><span>rpm</span></span></span><br><br>1 kW = 1.341 HP<br><br>1 kPa = 0.145 psi<br><br>1 in = 2.54 cm',
      choices: ['50 mm', '65 mm', '29 mm', '25 mm'], answer: 2,
      blocks: [
        { math: 'T = <span class="fraction"><span>5,250 &times; HP</span><span>rpm</span></span> = 5,250 &times; <span class="fraction"><span>12 kW &times; <span class="fraction"><span>1.341 HP</span><span>1 kW</span></span></span><span>600 rpm</span></span> &times; <span class="fraction"><span>12 in</span><span>ft</span></span> = 1,690 in&minus;lb' },
        { math: '&tau; = <span class="fraction"><span>Tr</span><span>J</span></span> = <span class="fraction"><span>2Tr</span><span>&pi;r<sup>4</sup></span></span> = <span class="fraction"><span>2 &times; 1,690 in&minus;lb</span><span>&pi;r<sup>3</sup></span></span>' },
        { math: 'r<sup>3</sup> = <span class="fraction"><span>2 &times; 1,690 in&minus;lb</span><span>&pi; &times; (40 &times; 10<sup>6</sup> &times; 0.145) psi</span></span>' },
        { math: 'r = 0.57 in' },
        { math: 'd = 1.14 in = 28.96 mm' }
      ],
      reference: 'NCEES Mechanical Engineer Handbook > Chapter 1, 1.1 Engineering Terms and Symbols<br><br>NCEES Mechanical Engineer Handbook > Chapter 1, 1.10.4 Torques'
    },
    {
      id: '1706052', complexity: 'Easy',
      html: 'A stock involute gear has 18 teeth, a pitch circle diameter of 10 in, and a pressure angle of 30°. Which of the following is the base pitch of the gear?',
      choices: ['1.51 in/tooth', '6.62 in/tooth', '10.24 in/tooth', '7.32 in/tooth'], answer: 0,
      blocks: [
        { math: 'N = 18 teeth' },
        { math: 'd = 10 in' },
        { math: '&phi; = 30°' },
        { math: 'P<sub>c</sub> = <span class="fraction"><span>&pi;d</span><span>N</span></span> = <span class="fraction"><span>&pi; &times; 10 in</span><span>18 teeth</span></span> = 1.74 in/tooth' },
        { math: 'P<sub>b</sub> = P<sub>c</sub> &times; cos &phi; = (1.74 <span class="fraction"><span>in</span><span>tooth</span></span>) cos(30) = 1.51 in/tooth' }
      ],
      reference: ''
    },
    {
      id: '1706053', complexity: 'Medium',
      html: 'A motor running at 200 rpm is used to drive a shaft as shown. The motor pulley (P1; d<sub>1</sub> = 800 mm) drives an intermediate shaft containing P2 (d<sub>2</sub> = 500 mm) and P3 (d<sub>3</sub> = 900 mm). If the diameter of P4 is 150 mm, the speed of pulley 4, ignoring friction, is most nearly which of the following?',
      image: 'Screenshots and Questions/Questions/Power Transmission Questions/problem 39 image.png',
      choices: ['0.1 rpm', '21 rpm', '1,920 rpm', '37.5 rpm'], answer: 2,
      blocks: [
        { math: 'N<sub>1</sub> = 200 rpm; d<sub>1</sub> = 800 mm; d<sub>2</sub> = 500 mm; d<sub>3</sub> = 900 mm; d<sub>4</sub> = 150 mm; N<sub>4</sub> = ?' },
        { math: '<span class="fraction"><span>N<sub>4</sub></span><span>N<sub>1</sub></span></span> = <span class="fraction"><span>d<sub>1</sub> &times; d<sub>3</sub></span><span>d<sub>2</sub> &times; d<sub>4</sub></span></span>' },
        { math: '<span class="fraction"><span>N<sub>4</sub></span><span>200</span></span> = <span class="fraction"><span>800 &times; 900</span><span>500 &times; 150</span></span>' },
        { math: 'N<sub>4</sub> = 200 rpm &times; <span class="fraction"><span>800 &times; 900</span><span>500 &times; 150</span></span> = 1,920 rpm' },
        { text: 'Answer A is incorrect.' },
        { text: 'Answer B is incorrect because it inverts the gear train ratios.' },
        { text: 'Answer C is correct.' },
        { text: 'Answer D is incorrect because it neglects gears 2 and 3.' }
      ],
      reference: ''
    },
    {
      id: '1706054', complexity: 'Hard',
      text: 'A plate clutch that has a single driving plate with contact surfaces on each side is required to transmit 145 kW at 1,350 rpm. The outer diameter of the contact surfaces is 400 mm, and the inner diameter is 200 mm. The coefficient of friction is 0.4. If the shaft is under uniform pressure, what is the force applied to the shaft?',
      choices: ['8,241 N', '6,743 N', '7,576 N', '4,227 N'], answer: 0,
      blocks: [
        { math: 'P = 145 kW = 145 &times; 10<sup>3</sup>W; N = 1,350 rpm; d<sub>1</sub> = 400 mm or r<sub>1</sub> = 200 mm; d<sub>2</sub> = 200 mm or r<sub>2</sub> = 100mm; &mu; = 0.4' },
        { math: '1 kW = 1.341 HP' },
        { math: '1 lb-in = 0.11298 N-m' },
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Mechanical Components for the following equation.' },
        { math: 'HP = <span class="fraction"><span>T lb-in &times; n<sub>shaft</sub></span><span>63,025</span></span>' },
        { math: 'T lb-in = <span class="fraction"><span>P<sub>HP</sub> &times; 63,205</span><span>n<sub>shaft</sub></span></span> = <span class="fraction"><span>(P<sub>kW</sub> &times; 1.341) &times; 63,205</span><span>n<sub>shaft</sub></span></span> = <span class="fraction"><span>(145 &times; 1.341) &times; 63,205</span><span>1,350 rpm</span></span>' },
        { math: '= 9,077 lb-in' },
        { text: 'Find torque.' },
        { math: 'T = 9,077 lb-in &times; <span class="fraction"><span>(0.11298 N-m)</span><span>1 lb-in</span></span> = 1,025.61 N-m = 1,025.61 &times; 10<sup>3</sup> N-mm' },
        { text: 'For uniform pressure:' },
        { math: 'T = <span class="fraction"><span>FfN</span><span>3</span></span> &times; <span class="fraction"><span>(D<sub>o</sub><sup>3</sup> &minus; D<sub>i</sub><sup>3</sup>)</span><span>(D<sub>o</sub><sup>2</sup> &minus; D<sub>i</sub><sup>2</sup>)</span></span>' },
        { math: 'F = <span class="fraction"><span>3T</span><span>fN</span></span> &times; <span class="fraction"><span>(D<sub>o</sub><sup>2</sup> &minus; D<sub>i</sub><sup>2</sup>)</span><span>(D<sub>o</sub><sup>3</sup> &minus; D<sub>i</sub><sup>3</sup>)</span></span> = <span class="fraction"><span>3 &times; 1,025.61 &times; 10<sup>3</sup> N-mm</span><span>0.4 &times; 2</span></span> &times; <span class="fraction"><span>((400mm)<sup>2</sup> &minus; (200mm)<sup>2</sup>)</span><span>((400mm)<sup>3</sup> &minus; (200mm)<sup>3</sup>)</span></span>' },
        { math: '= 8,241 N' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Mechanical Components'
    },
    {
      id: '1706057', complexity: 'Easy',
      text: 'A small sprocket with 13 teeth drives a 1-in Type A roller chain at 150 rpm. What is the horsepower rating for the roller chain?',
      choices: ['5.8', '7.52', '5.32', '6.77'], answer: 0,
      blocks: [
        { text: 'Refer to NCEES PE Mechanical Reference Handbook: Elements of Machine Design and Methodologies: Mechanical Components.  See below illustration.' },
        { image: 'Screenshots and Questions/Solutions/Power Transmission/problem 41 solution image.png', alt: 'Horsepower ratings for 1-inch roller chain' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook v 2.0 > chapter 2: Machine Design and Materials>2.16.6 Belts, Pulleys and Chain Drives> 2.16.6.4 Horsepower Rating for Roller chain-1986'
    },
    {
      id: '1706062', complexity: 'Medium',
      text: 'A keyed 4-in diameter shaft transmits 40,000 lb-in of torque. The key is 0.75 in wide, and the material has a shear strength of 12,000 psi and a yield strength of 24,000 psi. Determine the length of the key',
      choices: ['3.8 in', '1.9 in', '4.1 in', '2.2 in'], answer: 3,
      blocks: [
        { text: 'Determine the force on the key.' },
        { math: '&tau; = Fr' },
        { math: 'F = <span class="fraction"><span>&tau;</span><span>r</span></span> = <span class="fraction"><span>40,000 lb-in</span><span>2 in</span></span> = 20,000 lb' },
        { text: 'Determine the length of the key.' },
        { text: 'Key length for shear:' },
        { math: 'S<sub>sy</sub> = <span class="fraction"><span>F</span><span>tl</span></span>' },
        { math: 'l = <span class="fraction"><span>F</span><span>tS<sub>sy</sub></span></span> = <span class="fraction"><span>20,000 lb</span><span>0.75 in &times; 12,000 psi</span></span> = 2.22 in' },
        { text: 'Key length for bending:' },
        { math: 'S<sub>y</sub> = <span class="fraction"><span>2F</span><span>tl</span></span>' },
        { math: 'l = <span class="fraction"><span>2F</span><span>tS<sub>y</sub></span></span> = <span class="fraction"><span>2 &times; 20,000 lb</span><span>0.75 in &times; 24,000 psi</span></span> = 2.22 in' }
      ],
      reference: ''
    },
    {
      id: '1706065', complexity: 'Medium',
      text: 'A clutch assembly is comprised of a shaft, 14 steel discs, and 12 bronze discs with external and internal diameters of 12 in and 10 in. If the shaft is under a uniform pressure of 150 lb and rotates at 1,200 rpm on its axis, determine the horsepower generated by the shaft if the coefficient of friction is 0.35',
      choices: ['122 hp', '138 hp', '143 hp', '112 hp'], answer: 1,
      blocks: [
        { text: 'Determine the number of pairs of surfaces in contact.' },
        { math: 'N = N<sub>steel</sub> + N<sub>bronze</sub> &minus; 1 = 14 + 12 &minus;1 = 25' },
        { text: 'Determine torque.' },
        { math: 'T = <span class="fraction"><span>FfN</span><span>3</span></span> &times; <span class="fraction"><span>(D<sub>o</sub><sup>3</sup> &minus; D<sub>i</sub><sup>3</sup>)</span><span>(D<sub>o</sub><sup>2</sup> &minus; D<sub>i</sub><sup>2</sup>)</span></span> = <span class="fraction"><span>(150lb)(0.35)(25)</span><span>3</span></span> &times; <span class="fraction"><span>((12in)<sup>3</sup> &minus; (10in)<sup>3</sup>)</span><span>((12in)<sup>2</sup> &minus; (10in)<sup>2</sup>)</span></span>' },
        { math: '= 7,238.64 lb-in' },
        { math: 'P<sub>hp</sub> = <span class="fraction"><span>Tn<sub>shaft,rpm</sub></span><span>63,025</span></span> = <span class="fraction"><span>(7,238.64lb-in)(1,200rpm)</span><span>63,025</span></span> = 137.82 hp' }
      ],
      reference: ''
    },
    {
      id: '1706066', complexity: 'Hard',
      html: 'A plate clutch that has a single driving plate with contact surfaces on each side is required to transmit 145 kW at 1,350 rpm. The outer diameter of the contact surfaces is 400 mm and the inner diameter is 200 mm. The coefficient of friction is 0.4. If the shaft is under uniform pressure, find the maximum pressure applied to the shaft.',
      choices: ['0.069 N/mm<sup>2</sup>', '0.089 N/mm<sup>2</sup>', '0.042 N/mm<sup>2</sup>', '0.076 N/mm<sup>2</sup>'], answer: 1,
      blocks: [
        { math: 'P = 145 kW = 145 &times; 10<sup>3</sup> W' },
        { math: '; N = 1,350 rpm;' },
        { math: 'd<sub>1</sub> = 400 mm or r<sub>1</sub> = 200 mm;' },
        { math: 'd<sub>2</sub> = 200 mm or r<sub>2</sub> = 100 mm' },
        { math: '; &mu; = 0.4' },
        { text: 'Find Torque.' },
        { math: 'T = <span class="fraction"><span>P<sub>kw</sub> &times; 60</span><span>2&pi;n<sub>shaft</sub></span></span> = <span class="fraction"><span>145 &times; 10<sup>3</sup>W &times; 60</span><span>2&pi; &times; 1,350 rpm</span></span> = 1,025.61N-m = 1,025.61 &times; 10<sup>3</sup>N-mm' },
        { text: 'For uniform pressure:' },
        { text: 'Since there are two contact surfaces N = 2' },
        { math: 'T = <span class="fraction"><span>FfN</span><span>3</span></span> &times; <span class="fraction"><span>(D<sub>o</sub><sup>3</sup> &minus; D<sub>i</sub><sup>3</sup>)</span><span>(D<sub>o</sub><sup>2</sup> &minus; D<sub>i</sub><sup>2</sup>)</span></span>' },
        { math: 'F = <span class="fraction"><span>3T</span><span>fN</span></span> &times; <span class="fraction"><span>(D<sub>o</sub><sup>2</sup> &minus; D<sub>i</sub><sup>2</sup>)</span><span>(D<sub>o</sub><sup>3</sup> &minus; D<sub>i</sub><sup>3</sup>)</span></span> = <span class="fraction"><span>3 &times; 1,025.61 &times; 10<sup>3</sup>N-mm</span><span>0.4 &times; 2</span></span> &times; <span class="fraction"><span>((400mm)<sup>2</sup> &minus; (200mm)<sup>2</sup>)</span><span>((400mm)<sup>3</sup> &minus; (200mm)<sup>3</sup>)</span></span>' },
        { math: '= 8,241 N' },
        { math: 'F = <span class="fraction"><span>&pi;p<sub>max</sub></span><span>4</span></span>(D<sub>o</sub><sup>2</sup> &minus; D<sub>i</sub><sup>2</sup>)' },
        { math: 'p<sub>max</sub> = <span class="fraction"><span>4F</span><span>&pi;(D<sub>o</sub><sup>2</sup> &minus; D<sub>i</sub><sup>2</sup>)</span></span> = <span class="fraction"><span>4(8,241N)</span><span>&pi;((400mm)<sup>2</sup> &minus; (200mm)<sup>2</sup>)</span></span> = 0.089 N/mm<sup>2</sup>' }
      ],
      reference: ''
    },
    {
      id: '1706069', complexity: 'Medium',
      html: 'A 120° journal bearing has a 7-in diameter, an 11-in length, and a radial clearance of 0.006 in. The lubricating fluid is SAE 10 oil with a viscosity of 2.2 &times; 10<sup>&minus;6</sup> lb-s/in<sup>2</sup>, and the bearing carries a load of 72 psi at 1,100 rpm. What is the bearing frictional torque using Petroff’s equation?',
      choices: ['112 in-lbf', '145 in-lbf', '125 in-lbf', '131 in-lbf'], answer: 2,
      blocks: [
        { math: 'N = 1,100 <span class="fraction"><span>rev</span><span>min</span></span> = 18.33 <span class="fraction"><span>rev</span><span>s</span></span>' },
        { text: 'Petroff’s equation:' },
        { math: 'T = <span class="fraction"><span>4&pi;<sup>2</sup>r<sup>3</sup>L&mu;N</span><span>c</span></span> = <span class="fraction"><span>(4&pi;<sup>2</sup>(3.5in)<sup>3</sup>(11 in)(2.2 &times; 10<sup>&minus;6</sup>))(18.33 <span class="fraction"><span>rev</span><span>s</span></span>)</span><span>0.006</span></span> = 125.138 in-lbf' }
      ],
      reference: ''
    },
    {
      id: '1706070', complexity: 'Easy',
      html: 'A solid steel shaft has a diameter of 1 in and is loaded with a torque of 10 in-lb. Find the shear stress in the outer surface of the shaft.',
      choices: ['51.02 lb/in<sup>2</sup>', '61.05 lb/in<sup>2</sup>', '47.53 lb/in<sup>2</sup>', '57.70 lb/in<sup>2</sup>'], answer: 0,
      blocks: [
        { math: 'r = 0.5 in' },
        { math: 'T = 10 in&minus;lb' },
        { text: 'The polar moment of inertia for a solid shaft is:' },
        { math: 'J<sub>s</sub>(r) = <span class="fraction"><span>&pi;r<sup>4</sup></span><span>2</span></span>' },
        { math: 'J<sub>s</sub>(r) = 0.098 in<sup>4</sup>' },
        { text: 'The shear stress at a given r is:' },
        { math: '&tau;(T,r,J<sub>s</sub>) = <span class="fraction"><span>T &times; r</span><span>J<sub>s</sub></span></span>' },
        { math: '&tau;(10&quot; in&minus;lb&quot;,0.5 in,0.098 in<sup>4</sup>) = 51.02 lb/in<sup>2</sup>' }
      ],
      reference: ''
    },
    {
      id: '1706071', complexity: 'Easy',
      html: 'A steel shaft has an outside diameter of 1 in and an inside diameter of 0.5 in. The shaft is loaded with a torque of 10 in-lb. Find the shear stress in the outer surface of the shaft.',
      choices: ['51.02 lb/in<sup>2</sup>', '54.35 lb/in<sup>2</sup>', '47.53 lb/in<sup>2</sup>', '57.70 lb/in<sup>2</sup>'], answer: 1,
      blocks: [
        { math: 'r<sub>o</sub> = 0.5 in' },
        { math: 'r<sub>i</sub> = 0.25 in' },
        { math: 'T = 10 in&minus;lb' },
        { text: 'The polar moment of inertia for a hollow shaft is:' },
        { math: 'J<sub>s</sub>(r) = <span class="fraction"><span>&pi;</span><span>2</span></span>(r<sub>o</sub><sup>4</sup> &minus; r<sub>i</sub><sup>4</sup>)' },
        { math: 'J<sub>s</sub>(r) = 0.092 in<sup>4</sup>' },
        { text: 'The shear stress at a given r is:' },
        { math: '&tau;(T,r,J<sub>s</sub>) = <span class="fraction"><span>T &times; r</span><span>J<sub>s</sub></span></span>' },
        { math: '&tau;(10 in&minus;lb,0.5in,0.092 in<sup>4</sup>) = 54.348 lb/in<sup>2</sup>' }
      ],
      reference: ''
    },
    {
      id: '1706072', complexity: 'Easy',
      html: 'A steel shaft has an outside diameter of 1 in and an inside diameter of 0.5 in. The shaft is loaded with a torque of 10 in-lb. What is the shear stress in the inner surface of the shaft?',
      choices: ['51.02 lb/in<sup>2</sup>', '54.35 lb/in<sup>2</sup>', '27.17 lb/in<sup>2</sup>', '25.51 lb/in<sup>2</sup>'], answer: 2,
      blocks: [
        { math: 'r<sub>o</sub> = 0.5 in' },
        { math: 'r<sub>i</sub> = 0.25 in' },
        { math: 'T = 10 in&minus;lb' },
        { text: 'The polar moment of inertia for a hollow shaft is:' },
        { math: 'J<sub>s</sub>(r) = <span class="fraction"><span>&pi;</span><span>2</span></span>(r<sub>o</sub><sup>4</sup> &minus; r<sub>i</sub><sup>4</sup>)' },
        { math: 'J<sub>s</sub>(r) = 0.092 in<sup>4</sup>' },
        { text: 'The shear stress at a given r is:' },
        { math: '&tau;(T,r,J<sub>s</sub>) = <span class="fraction"><span>T &times; r</span><span>J<sub>s</sub></span></span>' },
        { math: '&tau;(10 in&minus;lb,0.25 in,0.092 in<sup>4</sup>) = 27.174 lb/in<sup>2</sup>' }
      ],
      reference: ''
    },
    {
      id: '1706073', complexity: 'Easy',
      text: 'A hand crank is connected to a 5:1 gearbox. The output of the gearbox is connected to a linear stage actuated by a lead screw. The screw has 1 start, and 18 threads per inch. If the handle is turned 1 full turn, most nearly how far does the stage move?',
      choices: ['3.6 in', '0.278 in', '0.0022 in', '0.011 in'], answer: 3,
      blocks: [
        { math: '18 threads/in = 1/18 in/rev' },
        { math: '1/18 in/rev &times; (1/5 rev) = 0.011 in' }
      ],
      reference: ''
    },
    {
      id: '1706074', complexity: 'Medium',
      html: 'A 1-in diameter solid brass shaft that is 1 ft in length<br><i>(E = 16 &times; 10<sup>6</sup> lbf / in<sup>2</sup>; &nu; = 0.36)</i><br>is spinning at 120 rpm and transmits 3 hp. What is the angle of twist in the shaft (in radians)?',
      choices: ['0.033', '0.045', '0.081', '0.027'], answer: 0,
      blocks: [
        { text: 'Given that:' },
        { math: 'E<sub>brass</sub> = 16 &times; 10<sup>6</sup> lbf/in<sup>2</sup>' },
        { math: '&nu;<sub>brass</sub> = 0.36' },
        { math: 'r = 0.5 in' },
        { math: 'L = 1 ft = 12 in' },
        { math: 'P<sub>hp</sub> = 3' },
        { math: 'n<sub>rpm</sub> = 120' },
        { text: 'Shear force is:' },
        { math: 'G<sub>brass</sub>(E<sub>brass</sub>,&nu;<sub>brass</sub>) = <span class="fraction"><span>E<sub>brass</sub></span><span>2 &times; (1 + &nu;<sub>brass</sub>)</span></span>' },
        { math: 'G<sub>brass</sub>[16 &times; (10<sup>6</sup>) lbf/in<sup>2</sup>,0.36) = (5.882 &times; 10<sup>6</sup>) lbf/in<sup>2</sup>' },
        { text: 'Find torque.' },
        { math: 'T(P<sub>hp</sub>,n<sub>rpm</sub>) = <span class="fraction"><span>63,025 &times; P<sub>hp</sub></span><span>n<sub>rpm</sub></span></span>' },
        { math: 'T(3,120) = 157.6 &times; 10<sup>3</sup>' },
        { text: 'The polar moment of inertia for a solid shaft is:' },
        { math: 'J<sub>s</sub>(r) = <span class="fraction"><span>&pi;r<sup>4</sup></span><span>2</span></span>' },
        { math: 'J<sub>s</sub>(r) = 0.098 in<sup>4</sup>' },
        { text: 'Find the angle of twist in radians.' },
        { math: '&gamma;(T,L,G,J) = <span class="fraction"><span>T &times; L</span><span>G &times; J</span></span>' },
        { math: '&gamma;(1,576,12,5.882 &times; 10<sup>6</sup>,0.098 = 0.033' },
        { text: 'Answer: A' }
      ],
      reference: ''
    },
    {
      id: '1706075', complexity: 'Medium',
      html: 'A 1-ft long hollow brass shaft with an outside diameter of 1 in and an inside diameter of 0.5 in (E = 16 &times; 10<sup>6</sup> lbf/in<sup>2</sup>; &nu; = 0.36) is spinning at 120 rpm and transmits 3 hp. What is the angle of twist in the shaft (in radians)?',
      choices: ['0.035', '0.033', '0.042', '0.027'], answer: 0,
      blocks: [
        { text: 'Given that:' },
        { math: 'E<sub>brass</sub> = 16 &times; 10<sup>6</sup> lbf / in<sup>2</sup>' },
        { math: '&nu;<sub>brass</sub> = 0.36' },
        { math: 'r<sub>o</sub> = 0.5 in' },
        { math: 'r<sub>i</sub> = 0.25 in' },
        { math: 'L = 1 ft = 12 in' },
        { math: 'P<sub>hp</sub> = 3' },
        { math: 'n<sub>rpm</sub> = 120' },
        { text: 'Shear force is:' },
        { math: 'G<sub>brass</sub>(E<sub>brass</sub>,&nu;<sub>brass</sub>) = <span class="fraction"><span>E<sub>brass</sub></span><span>2 &times; (1 + &nu;<sub>brass</sub>)</span></span>' },
        { math: 'G<sub>brass</sub>[16 &times; (10<sup>6</sup>) lbf / in<sup>2</sup>,0.36) = (5.882 &times; 10<sup>6</sup>) lbf / in<sup>2</sup>' },
        { text: 'Find torque.' },
        { math: 'T(P<sub>hp</sub>,n<sub>rpm</sub>) = <span class="fraction"><span>63,025 &times; P<sub>hp</sub></span><span>n<sub>rpm</sub></span></span>' },
        { math: 'T(3,120) = 1.576 &times; 10<sup>3</sup>' },
        { text: 'The polar moment of inertia for a solid shaft is:' },
        { math: 'J<sub>s</sub>(r) = <span class="fraction"><span>&pi;</span><span>2</span></span> &times; (r<sub>o</sub><sup>4</sup> &minus; r<sub>i</sub><sup>4</sup>)' },
        { math: 'J<sub>s</sub>(r) = 0.092 in<sup>4</sup>' },
        { text: 'Find the angle of twist in radians.' },
        { math: '&gamma;(T,L,G,J) = <span class="fraction"><span>T &times; L</span><span>G &times; J</span></span>' },
        { math: '&gamma;(1,576,12,5.882 &times; 10<sup>6</sup>,0.092) = 0.035' },
        { text: 'Answer: A' }
      ],
      reference: ''
    },
    {
      id: '1706082', complexity: 'Medium',
      text: 'A single-row ball bearing carries a radial load of 5.9 kN. The equivalent radial load is 18 kN. The radial and thrust load factors are X = 1 and Y = 1.4 respectively. If only the outer ring rotates (V = 1.2) , what is most nearly the thrust load?',
      choices: ['3.5 kN', '5.0 kN', '7.8 kN', '9.3 kN'], answer: 2,
      blocks: [
        { text: 'Equivalent radial load:' },
        { math: 'P<sub>eq</sub> = X &ast; V &ast; F<sub>r</sub> + Y &ast; F<sub>a</sub>' },
        { math: 'Solve for F<sub>a</sub>: F<sub>a</sub> = (P<sub>eq</sub> &minus; X &ast; V &ast; F<sub>r</sub>) / Y' },
        { math: 'Substitute: F<sub>a</sub> = (18 kN &minus; 1.0 &ast; 1.2 &ast; 5.9 kN) / 1.4 F<sub>a</sub> = (18 &minus; 7.08) / 1.4 F<sub>a</sub> = 10.92 / 1.4 = 7.8 kN' },
        { text: 'Therefore, the thrust load is approximately 7.8 kN (Option C).' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, Section 2.16.2 “Bearings.”'
    },
    {
      id: '1706083', complexity: 'Medium',
      html: 'A belt conveyor operates at 120 ft/min. The coefficient of friction between the belt and the pulleys is 0.35. The maximum belt tension is 750 lbf. The belt wrap angle on the driving pulley is 240°. What is most nearly the power required to drive the belt?',
      choices: ['0.7 hp', '1.3 hp', '1.7 hp', '2.1 hp'], answer: 3,
      blocks: [
        { text: 'Use the equation for belt tension.' },
        { math: '<span class="fraction"><span>T<sub>1</sub></span><span>T<sub>2</sub></span></span> = e<sup>&mu;&theta;</sup>' },
        { text: 'The angle of wrap must be expressed in radians.' },
        { math: '&theta; = 240°(<span class="fraction"><span>2&pi; rad</span><span>360°</span></span>)' },
        { math: '&theta; = 4.18879 rad' },
        { text: 'Plug the wrap angle into the tension equation.' },
        { math: '<span class="fraction"><span>T<sub>1</sub></span><span>T<sub>2</sub></span></span> = e<sup>&mu;&theta;</sup>' },
        { math: 'T<sub>2</sub> = <span class="fraction"><span>T<sub>1</sub></span><span>e<sup>&mu;&theta;</sup></span></span>' },
        { math: 'T<sub>2</sub> = <span class="fraction"><span>750 lbf</span><span>e<sup>(0.35 &times; 4.18879 rad)</sup></span></span>' },
        { math: 'T<sub>2</sub> = 173.12 lbf' },
        { text: 'Use the force-horsepower relationship.' },
        { math: 'HP = <span class="fraction"><span>F &times; V</span><span>33,000</span></span>' },
        { html: 'Force <i>F</i> is the difference in the tensions <i>T</i><sub>1</sub> and <i>T</i><sub>2</sub>.' },
        { math: 'HP = <span class="fraction"><span>F &times; V</span><span>33,000</span></span>' },
        { math: 'HP = <span class="fraction"><span>(750 lbf &minus; 173.12 lbf) &times; (120 <span class="fraction"><span>ft</span><span>min</span></span>)</span><span>33,000</span></span>' },
        { math: 'HP = 2.097 hp' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, Section 2.16.6 “Belts, Pulleys, and Chain Drives.”'
    },
    {
      id: '1706085', complexity: 'Hard',
      text: 'A gearbox reduction on a large motor is used to drive a sluice gate. The system contains a square-thread power screw that is driven by the gearbox. The power screw has a mean diameter of 4 in, a pitch of 0.75 in, and 1 start. The coefficient of friction for all mating surfaces of the vertical screw is 0.15, and the friction of the gearbox and collar is zero. The gearbox ratio is 4 to 1, and the force required to lift the sluice is 25,000 lbf. What is the output torque required for the motor?',
      choices: ['2,700 in-lbf', '5,200 in-lbf', '7,500 in-lbf', '10,600 in-lbf'], answer: 0,
      blocks: [
        { text: 'Use the following equation for square-thread power screws to calculate the torque required:' },
        { math: 'T<sub>R</sub> = <span class="fraction"><span>Fd<sub>m</sub></span><span>2</span></span>(<span class="fraction"><span>L + &pi;&mu;d<sub>m</sub></span><span>&pi;d<sub>m</sub> &minus; &mu;L</span></span>) + <span class="fraction"><span>F&mu;<sub>c</sub>d<sub>c</sub></span><span>2</span></span>' },
        { text: 'Simplify the equation as seen below.' },
        { math: 'T<sub>R</sub> = <span class="fraction"><span>Fd<sub>m</sub></span><span>2</span></span>(<span class="fraction"><span>L + &pi;&mu;d<sub>m</sub></span><span>&pi;d<sub>m</sub> &minus; &mu;L</span></span>)' },
        { math: 'T<sub>R</sub> = <span class="fraction"><span>25,000 lbf &times; 4 in</span><span>2</span></span>(<span class="fraction"><span>0.75 in + (&pi; &times; 0.15 &times; 4 in)</span><span>(&pi; &times; 4 in) &minus; (0.15 &times; 0.75 in)</span></span>)' },
        { math: 'T<sub>in</sub> = T<sub>R</sub> = 10,580.44 in&minus;lbf' },
        { text: 'Given that the gear ratio is 4 to 1:' },
        { math: '<span class="fraction"><span>Torque out</span><span>Torque in</span></span> = Gear ratio' },
        { math: 'T<sub>out</sub> = <span class="fraction"><span>T<sub>in</sub></span><span>4</span></span>' },
        { math: 'T<sub>out</sub> = <span class="fraction"><span>10,580.44 in&minus;lbf</span><span>4</span></span> = 2,645.11 in&minus;lbf' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, Section 2.16.3 “Power Screws.”'
    },
    {
      id: '1706086', complexity: 'Easy', multi: true,
      text: 'All gears in the same gear train mesh must have the same ___________. Select all that apply.',
      choices: ['diameter', 'pitch-line velocity', 'root fillet radius', 'diametral pitch', 'module', 'center-to-center distance'], answer: [1, 3, 4],
      blocks: [
        { text: 'All gears must have the same diametral pitch to be able to mesh properly. Module is the inverse of diametral pitch and therefore must be the same. Pitch-line velocity must be the same or else gears will not mesh and surfaces in contact will not be at the same speed.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, Section 2.16.5.2 “Involute Gear Tooth Nomenclature.”'
    },
    {
      id: '20251012', complexity: 'Easy',
      text: 'A differential band brake is used to decelerate a rotating drum with a non-uniform tension distribution. The drum has a diameter of 12 in, and the band wraps around 270° of its circumference. The coefficient of friction between the band and the drum is 0.25, and the band width is 4 in. The brake system is configured such that the tight side tension is 200 lb, and the slack side tension is 70 lb. What is the torque provided by the band brake?',
      choices: ['225 lb-in', '780 lb-in', '350 lb-in', '425 lb-in'], answer: 1,
      blocks: [
        { text: 'Given:' },
        { html: 'Drum diameter (<i>D</i>) = 12 in' },
        { text: 'Wrap angle = 270°' },
        { text: 'Coefficient of friction = 0.25' },
        { html: 'Band width (<i>w</i>) = 4 in' },
        { html: 'Tight side tension (<i>F</i><sub>1</sub>) = 200 lb' },
        { html: 'Slack side tension (<i>F</i><sub>2</sub>) = 70 lb' },
        { text: 'Determine radius:' },
        { html: 'Drum diameter (<i>D</i>) = 12 in' },
        { html: 'Radius is <i>R = D/2</i>' },
        { math: 'R = 6 in' },
        { text: 'Determine torque:' },
        { math: 'T = (F<sub>1</sub> &minus; F<sub>2</sub>) &times; R' },
        { math: 'T = (200 lb&minus;70 lb) &times; 6 in' },
        { math: 'T = 130 lb &times; 6 in' },
        { html: '<b>Answer:</b> 780 lb-in' }
      ],
      reference: ''
    },
    {
      id: '706073', complexity: 'Medium',
      html: 'A 1-in diameter solid brass shaft (<i>E</i> = 16 &times; 10<sup>6</sup> lbf/in<sup>2</sup>; <i>&nu;</i> = 0.36) spinning at 120 rpm transmits 3 hp. What is the shear stress in the outer surface of the shaft?',
      choices: ['8,039 lb/in<sup>2</sup>', '9,082 lb/in<sup>2</sup>', '5,041 lb/in<sup>2</sup>', '4,022 lb/in<sup>2</sup>'], answer: 0,
      blocks: [
        { math: 'r = 0.5 in' },
        { text: 'Torque can be found when given horsepower (hp) and speed (rpm) by:' },
        { math: 'T = <span class="fraction"><span>63,025 &times; P<sub>hp</sub></span><span>n<sub>rpm</sub></span></span>' },
        { math: 'T = 1,576 in&ndash;lb' },
        { text: 'The polar moment of inertia for a solid shaft is:' },
        { math: 'J<sub>s</sub>(r) = <span class="fraction"><span>&pi;r<sup>4</sup></span><span>2</span></span> = <span class="fraction"><span>&pi;*0.5<sup>4</sup></span><span>2</span></span>' },
        { math: 'J<sub>s</sub> = 0.098 in<sup>4</sup>' },
        { text: 'The shear stress in the outer surface is:' },
        { math: '&tau; = <span class="fraction"><span>T &times; r</span><span>J<sub>s</sub></span></span>' },
        { math: '&tau; = <span class="fraction"><span>1,576 in&ndash;lb*0.5 in</span><span>0.098 in<sup>4</sup></span></span> = 8,038.90 l/in<sup>2</sup>' }
      ],
      reference: ''
    },
    {
      id: '91704042', complexity: 'Hard',
      text: 'A motor spinning at 7,200 rpm and producing 3 HP drives the smaller pulley of the system shown below. Assuming a factor of safety of 3, and a 0.125-in-wide key with a yield strength of 40 ksi, how long should the key be on the shaft of the larger pulley?',
      image: 'Screenshots and Questions/Questions/Power Transmission Questions/problem 58 image.gif',
      choices: ['3.91 in', '0.032 in', '0.112 in', '0.25 in'], answer: 2,
      blocks: [
        { html: 'To calculate the Full-load torque of a motor, the following formula should be used. &nbsp;NCEES PE Handbook, Chapter 1, Section 1.10.4 Torques' },
        { math: 'Full-Load Torque = T = 5,250* Horsepower/rpm' },
        { text: 'Therefore,' },
        { math: 'T<sub>m</sub> = 5250 &times; <span class="fraction"><span>HP</span><span>RPM</span></span> = 5250 &times; <span class="fraction"><span>3</span><span>7200</span></span> = 2.2 ft&ndash;lbf = 26.3 in&ndash;lbf' },
        { text: 'Motor pulley' },
        { text: 'To obtain the acting force on the pulley, the following equation is used:' },
        { html: 'T=F*d. &nbsp;The value of “d” will be the radius of the motor pulley. Solving for F,' },
        { math: 'F = <span class="fraction"><span>26.3 in&ndash;lbf</span><span>3 in</span></span> = 8.75 lbf' },
        { text: 'Larger Pulley' },
        { math: 'T = 8.75 lbf &times; 8 in = 70 in&ndash;lbf' },
        { text: 'Force at outer large pulley shaft where the key will be located:' },
        { math: 'F<sub>k</sub> = <span class="fraction"><span>70 in&ndash;lbf</span><span>0.75 in</span></span> = 93 lbf' },
        { text: 'Applying the equation in Chapter 2, Section 2.16.4.1, Shaft and Axles, Keyways' },
        { math: '<span class="fraction"><span>S<sub>y</sub></span><span>n</span></span> = <span class="fraction"><span>F</span><span>(<span class="fraction"><span>t &times; l</span><span>2</span></span>)</span></span> &ndash;&gt; <span class="fraction"><span>40000 psi</span><span>3</span></span> = <span class="fraction"><span>93 lbf</span><span>(<span class="fraction"><span>0.125 &times; l</span><span>2</span></span>)</span></span>' }
      ],
      reference: 'NCEES PE Handbook &gt; Chapter 1, Section 1.10.4 Torques<br><br>NCEES PE Mechanical Reference Handbook &gt; Chapter 2, Machine Design and Materials, Section 2.16.4.1 Shaft and Axles'
    },
    {
      id: '91706072', complexity: 'Easy',
      text: 'A leadscrew has the characteristics listed below. It is used to raise a stage vertically. A motor turns the screw 30 revolutions. Most nearly, how far did the stage travel?',
      html: 'A leadscrew has the characteristics listed below. It is used to raise a stage vertically. A motor turns the screw 30 revolutions. Most nearly, how far did the stage travel?<br><br>&mu; = .25<br><br>dm = 2.5 in<br><br>l = .375 in<br><br>Accuracy = +/&minus; 0.0025 in/ft',
      choices: ['.373 in to .377 in', '11.248 in to 11.252 in', '106.664 in to 106.67 in', '28.119 in to 28.131 in'], answer: 1,
      blocks: [
        { math: 'L = .375 in/rev &times; 30 rev = 11.25 in' },
        { math: 'Error = <span class="fraction"><span>11.25 in</span><span>12 in/ft</span></span> &times; 0.0025 in/ft = 0.0023 in' },
        { math: 'Travel = 11.25 in +/&minus; 0.0023 in = 11.2477 in to 11.2523 in' }
      ],
      reference: ''
    }
  ],
  materials: [
    {
      id: '01704041', complexity: 'Medium',
      text: 'A hollow rod has an inner radius, r₁, and an outer radius, r₂. If r₁ = r₂/2, what percentage of torque can the shaft carry in comparison to a solid shaft with the same outer diameter?',
      html: 'A hollow rod has an inner radius, r<sub>1</sub>, and an outer radius, r<sub>2</sub>. If r<sub>1</sub> = <span class="fraction"><span>r<sub>2</sub></span><span>2</span></span>, what percentage of torque can the shaft carry in comparison to a solid shaft with the same outer diameter?',
      choices: ['27 %', '55 %', '78 %', '94 %'], answer: 3,
      blocks: [
        { text: 'Torsional stress:' },
        { math: 'τ = <span class="fraction"><span>Tr</span><span>J</span></span>' },
        { math: 'T = <span class="fraction"><span>τJ</span><span>r</span></span>' },
        { text: 'Hollow shaft:' },
        { math: 'T<sub>hollow</sub> = <span class="fraction"><span>τ(<span class="fraction"><span>π</span><span>2</span></span>)(r<sub>2</sub><sup>4</sup> − r<sub>1</sub><sup>4</sup>)</span><span>r<sub>2</sub></span></span>' },
        { math: 'T<sub>solid</sub> = <span class="fraction"><span>τ(<span class="fraction"><span>π</span><span>2</span></span>)r<sub>2</sub><sup>4</sup></span><span>r<sub>2</sub></span></span>' },
        { math: '<span class="fraction"><span>T<sub>hollow</sub></span><span>T<sub>shollow</sub></span></span> = <span class="fraction"><span><span class="fraction"><span>τ(<span class="fraction"><span>π</span><span>2</span></span>)(r<sub>2</sub><sup>4</sup> − r<sub>1</sub><sup>4</sup>)</span><span>r<sub>2</sub></span></span></span><span><span class="fraction"><span>τ(<span class="fraction"><span>π</span><span>2</span></span>)r<sub>2</sub><sup>4</sup></span><span>r<sub>2</sub></span></span></span></span> = <span class="fraction"><span>r<sub>2</sub><sup>4</sup> − r<sub>1</sub><sup>4</sup></span><span>r<sub>2</sub><sup>4</sup></span></span> = <span class="fraction"><span>r<sub>2</sub><sup>4</sup> − <span class="fraction"><span>r<sub>2</sub><sup>4</sup></span><span>16</span></span></span><span>r<sub>2</sub><sup>4</sup></span></span> = <span class="fraction"><span>15 r<sub>2</sub><sup>4</sup></span><span>16r<sub>2</sub><sup>4</sup></span></span> = <span class="fraction"><span>15</span><span>16</span></span> = 0.937(94%)' }
      ],
      reference: ''
    },
    {
      id: '1701007', complexity: 'Easy',
      text: 'Given the following configuration of a long column, which value of effective length should be used for the effective slenderness ratio?',
      image: 'Screenshots and Questions/Questions/Mechanics of Materials Questions/problem 2 image.png',
      choices: ['L<sub>eff</sub> = 0.8L', 'L<sub>eff</sub> = 2.1L', 'L<sub>eff</sub> = L', 'L<sub>eff</sub> = 0.65L'], answer: 0,
      blocks: [
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook:</i> Intermediate-and Long-Length-Column Determination: Long Columns.' },
        { text: 'This end condition is fixed-pinned.' },
        { html: 'L<sub>eff</sub> = 0.8L is the effective length to use when the end conditions are fixed-pinned.' },
        { html: 'L<sub>eff</sub> = 2.1L is the effective length to use when the end conditions are fixed-free.' },
        { html: 'L<sub>eff</sub> = L is the effective length to use when the end conditions are pinned-pinned.' },
        { html: 'L<sub>eff</sub> = 0.65L is the effective length to use when the end conditions are fixed-fixed.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Intermediate-and Long-Length-Column Determination > Long Columns'
    },
    {
      id: '1701025', complexity: 'Easy',
      text: 'Failure will occur when a principal stress equals the strength of the material when using which of the following?',
      choices: ['Coulomb-Mohr Theory', 'Distortion-Energy Theory', 'Maximum-Shear-Stress Theory', 'Maximum-Normal-Stress Theory'], answer: 3,
      blocks: [{ text: 'Refer to definitions of failure theories in the NCEES PE Reference Handbook > Chapter 2. Failures, Theories, 2.13, Ductile materials, 2.13.2' }],
      reference: ''
    },
    {
      id: '1702035', complexity: 'Medium',
      text: 'A torque is applied to a stepped steel shaft of length 4 m. If one section of the shaft is 1 m long with diameter 5 cm and the remaining length has a diameter of 10 cm, what is the angle of twist across the length of the shaft under a 2 kN-m loading?',
      choices: ['0.05 degrees', '0.2 degrees', '2.8 degrees', '7.1 degrees'], answer: 2,
      blocks: [
        { math: 'ϕ = ϕ<sub>1</sub> + ϕ<sub>2</sub>' },
        { math: 'ϕ<sub>i</sub> = <span class="fraction"><span>TL<sub>i</sub></span><span>GJ<sub>i</sub></span></span>' },
        { html: '<i>G</i>: shear modulus = 80 GPa for steel (<i>NCEES PE Mechanical Reference Handbook:</i> Properties of Materials: Material Properties)' },
        { html: '<i>T</i>: applied torque' },
        { html: '<i>L</i>: shaft section length' },
        { html: '<i>J</i>: polar modulus of inertia' },
        { math: 'J<sub>1</sub> = <span class="fraction"><span>πd<sup>4</sup></span><span>32</span></span> = <span class="fraction"><span>π(0.05m)<sup>4</sup></span><span>32</span></span> = 6.136 × 10<sup>−7</sup>m<sup>4</sup>' },
        { math: 'J<sub>2</sub> = <span class="fraction"><span>πd<sup>4</sup></span><span>32</span></span> = <span class="fraction"><span>π(0.1m)<sup>4</sup></span><span>32</span></span> = 9.817 × 10<sup>−6</sup>m<sup>4</sup>' },
        { math: 'ϕ<sub>1</sub> = <span class="fraction"><span>TL<sub>1</sub></span><span>GJ<sub>1</sub></span></span> = <span class="fraction"><span>2000N − m × 1m</span><span>80 × 10<sup>9</sup>Pa × 6.136 × 10<sup>−7</sup>m<sup>4</sup></span></span> = 0.04074rad' },
        { math: 'ϕ<sub>2</sub> = <span class="fraction"><span>TL<sub>2</sub></span><span>GJ<sub>2</sub></span></span> = <span class="fraction"><span>2000N − m × 3m</span><span>80 × 10<sup>9</sup>Pa × 9.817 × 10<sup>−6</sup>m<sup>4</sup></span></span> = 0.00764rad' },
        { math: 'ϕ = ϕ<sub>1</sub> + ϕ<sub>2</sub> = 0.04074rad + 0.00764rad = 0.04838rad × <span class="fraction"><span>360degrees</span><span>2πrad</span></span> = 2.77degrees' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Stress Analysis > Torsion\n\nNCEES PE Mechanical Reference Handbook > Mensuration of Areas and Volumes > Properties of Shapes\n\nNCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1703002', complexity: 'Medium',
      text: 'Determine the unknown material in which the cube of material, seen below, is the result of experiencing a shear stress of 1.86 Mpsi (where 5a=6b=2c).',
      image: 'Screenshots and Questions/Questions/Mechanics of Materials Questions/problem 5 image.png',
      choices: ['Steel', 'Aluminum', 'Brass', 'Copper'], answer: 2,
      blocks: [
        { text: 'The shear strain is the angle of deformation from the original right angle and can be calculated using the tangent and the known ratio of the triangle.' },
        { math: 'γ = tan<sup>−1</sup>(b/c)' },
        { math: '6b=2c, therefore, b/c=1/3 and γ =0.322' },
        { math: 'γ =τ/G' },
        { math: 'G = 1.86 Mpsi / 0.322 = 5.78 Mpsi' },
        { html: 'Refer to “Table 1 – NCEES <i>PE Mechanical Reference Handbook:</i> Properties of Materials: Material Properties' },
        { text: 'The material with the closest modulus of rigidity is brass with a value of 5.8 Mpsi.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design > Shear Stress - Strain\n\nNCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1703013', complexity: 'Medium',
      text: 'A steel bar with a diameter of 2.0 in and a length of 18 in is mounted between two rigid walls as shown below. The coefficient of thermal expansion is 6.5 × 10⁻⁶ in/(in × °F) and E = 30 × 10⁶ psi. The bar was installed at a temperature of 68° F. The temperature of the bar is raised to 350° F. The stress in the steel bar at the higher temperature is most nearly:',
      html: 'A steel bar with a diameter of 2.0 in and a length of 18 in is mounted between two rigid walls as shown below. The coefficient of thermal expansion is 6.5 × 10<sup>−6</sup> in/(in × °F) and E = 30 × 10<sup>6</sup> psi. The bar was installed at a temperature of 68° F. The temperature of the bar is raised to 350° F. The stress in the steel bar at the higher temperature is most nearly:',
      image: 'Screenshots and Questions/Questions/Mechanics of Materials Questions/question 6 image.png',
      choices: ['55,000 psi', '65,000 psi', '75,000 psi', '85,000 psi'], answer: 0,
      blocks: [
        { math: 'Delta = δ t = α L ( T − T<sub>o</sub> )' },
        { text: '[deformation caused by temperature change = temperature coefficient of expansion × length of member (final temp – initial temp)]' },
        { math: 'Delta = ( 6.5 × 10<sup>−6</sup> ) × 18 in (350 − 68) = 0.033 in' },
        { text: 'Stress = force/area' },
        { math: 'Delta = force × length / (E × area)  δ = <span class="fraction"><span>PL</span><span>AE</span></span>' },
        { math: 'Stress = delta × E / length (σ = <span class="fraction"><span>δ · E</span><span>L</span></span>)' },
        { math: 'Stress = 0.033 in × ( 30 × 10<sup>6</sup> ) psi / 18 in = 55,000 psi' },
        { text: 'NCEES PE Mechanical Reference Handbook, V2.0>Chapter 2: Machine Design and Materials,> 2.10.6 Thermal' },
        { text: 'NCEES PE Mechanical Reference Handbook, V2.0>Chapter 2: Machine Design and Materials,> 2.10.5 Uniaxial Loading and Deformation' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook> Elements of Machine Design and Methodologies > Strength of Materials'
    },
    {
      id: '1703019', complexity: 'Medium',
      text: 'A railroad is using continuously welded rail. Sections of rail are made 1 mi long. If the section of rail is in a climate with an average high of 84°F and an average low of 18°F, how much room for expansion must be accounted for between the rails? The rails are made of steel.',
      choices: ['11 in', '15 in', '30 in', '45 in'], answer: 2,
      blocks: [
        { text: 'Use the equation for thermal deformation.' },
        { html: 'Refer to NCEES <i>PE Mechanical Reference Handbook:</i> Properties of Materials: Material Properties and the NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Thermal Deformations' },
        { math: 'δ<sub>t</sub> = αL(T − T<sub>0</sub>)' },
        { html: 'Use high and low as T and T<sub>0</sub>, respectively:' },
        { math: 'δ<sub>t</sub> = αL(T − T<sub>0</sub>)' },
        { math: 'δ<sub>t</sub> = 6.5 × 10<sup>−6</sup> × <span class="fraction"><span>1</span><span>°F</span></span> × (84°F − 18°F)(1 mi × <span class="fraction"><span>5280 ft</span><span>1mi</span></span> × <span class="fraction"><span>12 in</span><span>1ft</span></span>)' },
        { math: 'δ<sub>t</sub> = 27.181 in' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Thermal Deformations\n\nNCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1703020', complexity: 'Medium',
      text: 'A 1 in diameter 6061 aluminum rod that is 36” long is placed between two supports, as shown in Figure 1. There is no gap between the rod ends and the support. The rod is at an ambient temperature of 65°F. What value is the closest to the temperature that the rod would need to be heated to for it to yield in compression? Assume that the rod is supported to prevent buckling.',
      image: 'Screenshots and Questions/Questions/Mechanics of Materials Questions/problem 8 image.png',
      choices: ['100°F', '200°F', '350°F', '500°F'], answer: 2,
      blocks: [
        { html: 'Using information from the NCEES <i>PE Mechanical Reference Handbook:</i> Properties of Materials: Typical Material Properties, we can find:' },
        { math: 'E = 10,000,000 psi' },
        { math: 'α = 13.1 × 10<sup>−6</sup>' },
        { math: 'yield = 37,000 psi' },
        { html: 'Using information from the NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Uniaxial Loading and Deformation, we can find:' },
        { math: 'σ = <span class="fraction"><span>P</span><span>A</span></span>' },
        { math: 'δ = <span class="fraction"><span>PL</span><span>AE</span></span> = σ <span class="fraction"><span>L</span><span>E</span></span>' },
        { math: '<span class="fraction"><span>σ</span><span>L</span></span> = <span class="fraction"><span>σ</span><span>E</span></span> = <span class="fraction"><span>37,000 psi</span><span>10,000,000 psi</span></span> = 0.0037' },
        { math: 'δ = 0.0037 L' },
        { html: 'NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Thermal Deformations' },
        { math: 'δ<sub>t</sub> = αL(T − T<sub>0</sub>)' },
        { text: 'The deformation due the temperature change will be the same deformation due to the reaction force on the wall' },
        { math: 'δ = 0.0037 L = δ<sub>t</sub> = αL(T − T<sub>0</sub>)' },
        { text: 'Solve for T:' },
        { math: 'δ<sub>t</sub> = αL(T − T<sub>0</sub>)' },
        { math: '<span class="fraction"><span>δ<sub>t</sub></span><span>L</span></span> = α(T − T<sub>0</sub>)' },
        { math: '<span class="fraction"><span>δ<sub>t</sub></span><span>Lα</span></span> = (T − T<sub>0</sub>)' },
        { math: 'T − T<sub>0</sub> = <span class="fraction"><span>0.0037</span><span>13.1 × 10<sup>−6</sup> × <span class="fraction"><span>1</span><span>°F</span></span></span></span> = 282.44 °F' },
        { math: 'T − 65 °F = 282.44 °F' },
        { math: 'T = 347.44 °F' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, v1.9 > Elements of Machine Design and Methodologies > Thermal Deformations\n\nNCEES PE Mechanical Reference Handbook, v1.9 > Elements of Machine Design and Methodologies > Uniaxial Loading and Deformation\n\nNCEES PE Mechanical Reference Handbook, v1.9 > Properties of Materials > Typical Material Properties'
    },
    {
      id: '1703022', complexity: 'Medium',
      text: 'A 0.25 in diameter 304 stainless steel rod must be inserted into a gap 1.0000” wide. The steel rod is currently 1.0005” wide. If the steel is at an ambient temperature of 65 F, the temperature to which it must be cooled to fit the gap is most nearly?',
      choices: ['−13° F', '13° F', '32° F', '52° F'], answer: 1,
      blocks: [
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Thermal Deformation' },
        { math: 'δ<sub>t</sub> = α L(T − T<sub>0</sub>)' },
        { html: 'Find the coefficient of thermal expansion for 304 stainless steel in the NCEES <i>PE Mechanical Reference Handbook,</i> pg. 31' },
        { math: '9.60 × 10<sup>−6</sup>°F' },
        { html: '<strong>Solve for deformation length:</strong>' },
        { math: 'δ<sub>t</sub> = 1.000 in − 1.0005 in = − 0.0005 in' },
        { text: 'Reorganize the equation to solve for the temperature difference.' },
        { math: '<span class="fraction"><span>δ<sub>t</sub></span><span>αL</span></span> = (T − T<sub>0</sub>)' },
        { math: '(T − T<sub>0</sub>) = <span class="fraction"><span>−0.0005 &nbsp;in</span><span>9.60 × 10<sup>−6</sup> × 1 °F × 1.0 in</span></span>' },
        { math: '(T − T<sub>0</sub>) = − 52.08 °F' },
        { text: 'Solve for T:' },
        { math: '(T − T<sub>0</sub>) = − 52.08 °F' },
        { math: '(T − 65 °F) = − 52.08 °F' },
        { math: 'T = 12.91 °F' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Thermal Deformation'
    },
    {
      id: '1703028', complexity: 'Medium',
      text: 'An aluminum strut is positioned between two rigid walls at 300°F. As the system cools to 70°F, what is the stress in the strut?',
      choices: ['30 ksi (tensile)', '30 ksi (compressive)', '54 ksi (tensile)', '54 ksi (compressive)'], answer: 0,
      blocks: [
        { text: 'Concept: Cooling causes thermal contraction; thermal strain balanced with mechanical strain' },
        { text: 'Young’s Modulus' },
        { math: 'E = 10000 ksi' },
        { math: 'Coefficient of thermal expansion α = 13.1 × 10<sup>−6</sup><span class="fraction"><span>1</span><span>degF</span></span>' },
        { math: 'Thermal strain: ε<sub>t</sub> = αΔT = α × (T<sub>f</sub> − T<sub>i</sub>) = 13.1 × 10<sup>−6</sup><span class="fraction"><span>1</span><span>degF</span></span> × (70 degF − 300 degF) = −3.013 × 10<sup>−3</sup>' },
        { math: 'Totalstrain: ε = ε<sub>mech</sub> + ε<sub>t</sub> = 0' },
        { math: 'ε<sub>mech</sub> = − ε<sub>t</sub> = 3.013 × 10<sup>−3</sup>' },
        { math: 'Stress: σ = Eε<sub>mech</sub> = 10000 ksi × 3.013 × 10<sup>−3</sup> = 30.13 ksi' },
        { text: 'The positive magnitude indicates tension. The strut would naturally shrink, but is mechanically extended to remain in its original position.' }
      ],
      reference: 'NCEES PE Mechanical Handbook > Properties of Materials > Thermal Properties\n\nNCEES PE Mechanical Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1704005', complexity: 'Medium',
      text: 'A long column that is fixed to the ceiling is pinned at the ground in a way that restricts rotation of the column at the ground about the y axis, while there is free rotation about the pin and x axis. What is the ratio of the cross-sectional dimensions b:h that would satisfy the condition that a critical load P would theoretically allow for both buckling in the x or buckling in the y with the same magnitude of force?',
      image: 'Screenshots and Questions/Questions/Mechanics of Materials Questions/problem 11 image.png',
      choices: ['1.2', '1.4', '1.6', '2.2'], answer: 1,
      blocks: [
        { text: 'If we consider buckling in the y direction, the column can be considered fixed-pinned.' },
        { math: '(K<sub>y</sub> = 0.7) with I<sub>y</sub> = hb<sup>3</sup> / 12' },
        { text: 'And when considering buckling in the x, we have fixed-fixed.' },
        { math: '(K<sub>x</sub> = 0.5) with I<sub>x</sub> = bh<sup>3</sup> / 12' },
        { text: 'The equation for the critical load that causes buckling is seen below:' },
        { math: 'Pcr = π<sup>2</sup>EI/(KL)<sup>2</sup>' },
        { text: 'Setting the critical force equal for both conditions yields the following equation:' },
        { math: 'π<sup>2</sup>EI<sub>x</sub> / (K<sub>x</sub>L)<sup>2</sup> = π<sup>2</sup>EI<sub>y</sub> / (K<sub>y</sub>L)<sup>2</sup>,' },
        { text: 'which simplifies further to' },
        { math: 'bh<sup>3</sup> / K<sub>x</sub><sup>2</sup> = hb<sup>3</sup> / K<sub>y</sub><sup>2</sup>' },
        { math: '(b/h)<sup>2</sup> = (K<sub>y</sub> / K<sub>x</sub>)<sup>2</sup>' },
        { html: 'Substituting in the effective length factor’s yields a solution of b/h<br>= <span class="fraction"><span>0.7</span><span>0.5</span></span> = 1.4' }
      ],
      reference: ''
    },
    {
      id: '1704009', complexity: 'Medium',
      text: 'Determine the critical buckling stress for a 23-ft-long column that is fixed at the top, pinned at the bottom, and supported by rollers at a point between the two ends if an axial force is acting on the column on both ends. The column is made from aluminum and has a 2-in, square cross section.',
      image: 'Screenshots and Questions/Questions/Mechanics of Materials Questions/problem 12 image.png',
      choices: ['880 psi', '2.3 ksi', '1.35 ksi', '3.8 ksi'], answer: 1,
      blocks: [
        { text: 'First, we must determine the effective length. There are two options: the 13-ft-long segment with fixed-pinned end conditions and the 10-ft-long pinned-pinned segment.' },
        { text: 'NOTE: since the reactions are approximate (i.e., the rollers do NOT completely restrain the mid-segment of the column, the "Recommended Design Value" should be used from the table in Section 2.12.2 Long Columns' },
        { html: 'Refer to NCEES <i>PE Mechanical Reference Handbook</i> > Chapter 2: Machine Design > Intermediate and Long Length Column Determination' },
        { math: 'L<sub>e,top</sub> = 13 ft × 0.8 = 10.4 ft' },
        { math: 'L<sub>e,bottom</sub> = 10 ft × 1 = 10 ft' },
        { text: 'The segment most susceptible to buckling is that with the larger Le, and, therefore, the top segment will be analyzed.' },
        { math: 'σ<sub>cr</sub> = <span class="fraction"><span>π<sup>2</sup>EI</span><span>k<sup>2</sup>L<sup>2</sup>A</span></span>' },
        { math: 'E = 10 × 10<sup>6</sup> psi,' },
        { text: 'this is provided on Section 1.2 of the PE Reference Handbook: Properties of Materials: Material Properties.' },
        { math: 'A = (2 in x 2 in) = 4 in<sup>2</sup> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; k = 0.8' },
        { math: 'I = <span class="fraction"><span>(2 in)<sup>4</sup></span><span>12</span></span> = 1.33 in<sup>4</sup>' },
        { math: 'L = 13 ft × 12 in/ft = 156 in' },
        { math: 'σ<sub>cr</sub> = <span class="fraction"><span>π<sup>2</sup>(10×10<sup>6</sup> psi × 1.33 in<sup>4</sup>)</span><span>0.8<sup>2</sup> × 4 in<sup>2</sup> × (156 in)<sup>2</sup></span></span>' },
        { math: 'σ<sub>cr</sub> = 2,107' },
        { text: 'The closest answer to this result is answer choice "B".' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, V1.9, Chapter 1, 1.2 Properties of Materials > Material Properties\n\nNCEES PE Mechanical Reference Handbook, V1.9, Chapter 2: Machine Design, 2.12 Intermediate and Long Length Column Determination'
    },
    {
      id: '1704010', complexity: 'Easy',
      text: 'An 8-m-long rod is acted upon by a 25 kN tensile load. While still in the elastic limit, the member experiences a strain of 0.375. Determine the strain energy.',
      choices: ['2,800 Nm', '3,125 Nm', '3,400 Nm', '37,500 Nm'], answer: 3,
      blocks: [
        { text: 'The strain energy per unit equation is as follows:' },
        { math: 'U = P δ / 2' },
        { math: 'P = 25e3N' },
        { math: 'δ = L × ε = 8 m × (0.375) = 3 m' },
        { math: 'U = 37,500 Nm' }
      ],
      reference: ''
    },
    {
      id: '1704013', complexity: 'Hard',
      text: 'Every 10 seconds, a mechanical component experiences two fully reversed stress cycles at 55 ksi and five fully reversed cycles at 50 ksi. Two fatigue tests on this material gave the following results:',
      table: '<table class="question-data-table" style="border-collapse:collapse;margin:16px 0 92px;font-family:Georgia,serif;font-size:16px"><tr><td style="border:1px solid #444;padding:7px">Fatigue stress, Sf</td><td style="border:1px solid #444;padding:7px">40 ksi</td><td style="border:1px solid #444;padding:7px">60 ksi</td></tr><tr><td style="border:1px solid #444;padding:7px">Number of Cycles</td><td style="border:1px solid #444;padding:7px">10<sup>6</sup></td><td style="border:1px solid #444;padding:7px">10<sup>3</sup></td></tr></table><p class="question-data-table" style="margin:0 0 18px">How long can the component be expected to operate before failure?</p>',
      choices: ['160 min', '240 min', '320 min', '480 min'], answer: 1,
      blocks: [
        { text: 'Estimate damage per cycle via interpolation of stress-cycle data using the common assumption of log-linear relationship. Combine using Miner’s rule.' },
        { text: 'Let’s start by finding the constants a and b and using the equation in section 2.14' },
        { math: 'S<sub>f1</sub> = 40, N<sub>1</sub> = 10<sup>6</sup>' },
        { math: 'S<sub>f2</sub> = 60, N<sub>2</sub> = 10<sup>3</sup>' },
        { math: 'N<sub>1</sub> = 10<sup><span class="fraction"><span>log(S<sub>f1</sub>/a)</span><span>b</span></span></sup>' },
        { math: 'N<sub>2</sub> = 10<sup><span class="fraction"><span>log(S<sub>f2</sub>/a)</span><span>b</span></span></sup>' },
        { text: 'Solve both equations for b and removing the exponential by adding log' },
        { math: 'logN<sub>2</sub> = log(S<sub>f2</sub>/a)/b' },
        { math: 'b*logN<sub>2</sub> = logS<sub>f2</sub> − log a' },
        { text: 'The same procedure is applied to N1 and SF1' },
        { math: 'b*logN<sub>1</sub> = log S<sub>f1</sub> − log a' },
        { text: 'Solve both equations for Log a.' },
        { math: 'b = log(S<sub>f1</sub>/S<sub>f2</sub>) / log(N<sub>1</sub>/N<sub>2</sub>)' },
        { math: 'b = log(<span class="fraction"><span>40</span><span>60</span></span>) / log(<span class="fraction"><span>10<sup>6</sup></span><span>10<sup>3</sup></span></span>)' },
        { math: 'M' },
        { math: 'b = −0.05867' },
        { math: 'a = S<sub>f1</sub>/N<sub>1</sub><sup>b</sup>' },
        { math: 'a = 40/(10<sup>6</sup>)−0.059' },
        { math: 'a = 90 ksi' },
        { text: 'Solving for N, the equation Sf = a × N<sup>b</sup>, the following expression is obtain' },
        { math: '<math xmlns="http://www.w3.org/1998/Math/MathML"><mi>N</mi><mo>=</mo><msup><mn>10</mn><mfrac><mrow><mi>log</mi><mo>(</mo><mfrac><mi>Sf</mi><mi>a</mi></mfrac><mo>)</mo></mrow><mi>b</mi></mfrac></msup></math>' },
        { text: 'Replacing the values of 55 ksi and 50 ksi in the above equation,' },
        { math: 'N = 4.403 × 10<sup>3</sup>cycles at 55 KSI and 2 full cycles' },
        { math: 'N = 2.233 × 10<sup>4</sup>cycles at 50 KSI and 5 full cycles' },
        { text: 'To obtain damage per 10 s:' },
        { math: '<span class="fraction"><span>2 cycles</span><span>4.403 × 10<sup>3</sup> cycles</span></span> + <span class="fraction"><span>5 cycles</span><span>2.233 × 10<sup>4</sup> cycles</span></span> = 6.781 × 10<sup>−4</sup>' },
        { math: 'Lifetime = <span class="fraction"><span>10 s</span><span>6.781 × 10<sup>−4</sup></span></span> × (<span class="fraction"><span>min</span><span>60 s</span></span>) = 246 min' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Variable Loading Failure Theories'
    },
    {
      id: '1704014', complexity: 'Hard',
      text: 'Estimate the Goodman equivalent stress for a rod experiencing an alternating stress state of σmax = 20 ksi and σmin = −10 ksi. Assume the rod is made of A572 steel (S<sub>y</sub> = 50 ksi, S<sub>u</sub> = 65 ksi) and there is a stress concentration factor of K<sub>f</sub> = 1.5.',
      html: 'Estimate the Goodman equivalent stress for a rod experiencing an alternating stress state of σ<sub>max</sub> = 20 ksi and σ<sub>min</sub> = −10 ksi. Assume the rod is made of A572 steel (S<sub>y</sub> = 50 ksi, S<sub>u</sub> = 65 ksi) and there is a stress concentration factor of K<sub>f</sub> = 1.5.',
      choices: ['15.0 ksi', '17.5 ksi', '25.4 ksi', '45 ksi'], answer: 2,
      blocks: [
        { text: 'NCEES PE Mechanical Handbook: Elements of Machine Design and Methodologies: Variable Loading Failure Theories' },
        { math: 'σ<sub>eq</sub> = <span class="fraction"><span>σ<sub>a</sub></span><span>1 − (<span class="fraction"><span>σ<sub>m</sub></span><span>S<sub>ut</sub></span></span>)</span></span>' },
        { text: 'The reader will need to recall the formula for alternating stress in fatigue and for the mean stress in fatigue:' },
        { math: 'σ<sub>a</sub> = <span class="fraction"><span>σ<sub>max</sub> − σ<sub>min</sub></span><span>2</span></span>' },
        { math: 'σ<sub>m</sub> = <span class="fraction"><span>σ<sub>max</sub> + σ<sub>min</sub></span><span>2</span></span>' },
        { text: 'The stress concentration factor, K<sub>f</sub>, needs to be applied to the nominal stresses in the fatigue scenario. Thus the reader should modify the above formulas to include the stress concentration:' },
        { math: 'K<sub>f</sub>σ = K<sub>f</sub>[<span class="fraction"><span>σ<sub>max</sub> − σ<sub>min</sub></span><span>2</span></span>] and K<sub>f</sub>σ<sub>m</sub> = K<sub>f</sub>[<span class="fraction"><span>σ<sub>max</sub> + σ<sub>min</sub></span><span>2</span></span>]' },
        { math: 'thus: σ′ = K<sub>f</sub>σ = (1.5)[<span class="fraction"><span>20ksi − (−10ksi)</span><span>2</span></span>] = 22.5ksi, σ<sub>a</sub> = 15 ksi' },
        { math: 'and σ′<sub>m</sub> = K<sub>f</sub>σ<sub>m</sub> = (1.5)[<span class="fraction"><span>20ksi + (−10ksi)</span><span>2</span></span>] = 7.5ksi, σ<sub>m</sub> = 5 ksi' },
        { text: 'Combining the results into the Goodman Equation yields:' },
        { math: 'σ<sub>eq</sub>′ = <span class="fraction"><span>σ<sub>a</sub>′</span><span>1 − (<span class="fraction"><span>σ<sub>m</sub>′</span><span>S<sub>ut</sub></span></span>)</span></span> = <span class="fraction"><span>22.5 ksi</span><span>1 − (<span class="fraction"><span>7.5 ksi</span><span>65 ksi</span></span>)</span></span>' },
        { math: 'σ<sub>eq</sub>′ = 25.4 ksi' }
      ],
      reference: 'NCEES PE Mechanical Handbook, V. 2.0 > Chapter 2, Machine Design and Materials. > 2.14 Variable Loading Failure Theories'
    },
    {
      id: '1704016', complexity: 'Hard',
      text: 'A 12-ft tall column is loaded axially and is connected approximately in a fixed-fixed configuration. Estimate the maximum buckling load. Assume that the column is circular with a 6-in diameter, is made of A36 steel, and the recommended design effective length factor is used.',
      choices: ['890 kip', '940 kip', '990 kip', '2,080 kip'], answer: 0,
      blocks: [
        { html: 'The effective length factor for approximately fixed-fixed is <i>K</i> = 0.65.' },
        { math: 'L = 144 in; E = 29,000 ksi, S<sub>y</sub> = 36 ksi' },
        { math: 'A = <span class="fraction"><span>πd<sup>2</sup></span><span>4</span></span> = <span class="fraction"><span>π(6 in)<sup>2</sup></span><span>4</span></span> = 28.27 in<sup>2</sup>' },
        { text: 'Calculate the radius of gyration.' },
        { math: 'I = <span class="fraction"><span>πd<sup>4</sup></span><span>64</span></span> = <span class="fraction"><span>π × (6 in)<sup>4</sup></span><span>64</span></span> = 63.62 in<sup>4</sup>' },
        { math: 'r = √<span class="fraction"><span>I</span><span>A</span></span> = √<span class="fraction"><span>63.62 in<sup>4</sup></span><span>28.27 in<sup>2</sup></span></span> = 1.5 in' },
        { text: 'Check the slenderness ratio.' },
        { math: 'S<sub>t</sub> = <span class="fraction"><span>L</span><span>r</span></span> = <span class="fraction"><span>144 in</span><span>1.5 in</span></span> = 96.0' },
        { text: 'Calculate the critical slenderness ratio for an intermediate column.' },
        { math: '(S<sub>t</sub>)<sub>D</sub> = √<span class="fraction"><span>2π<sup>2</sup>E</span><span>K<sup>2</sup>S<sub>y</sub></span></span> = √<span class="fraction"><span>2π<sup>2</sup> × 29,000 ksi</span><span>0.65<sup>2</sup> × 36 ksi</span></span> = 194.0' },
        { html: 'Since S<sub>t</sub> &lt; (S<sub>t</sub>)<sub>D</sub>, the column is intermediate in length rather than long.' },
        { text: 'Intermediate column buckling:' },
        { math: 'P<sub>cr</sub> = A × (S<sub>y</sub> − <span class="fraction"><span>K<sup>2</sup></span><span>E</span></span>(<span class="fraction"><span>S<sub>y</sub>S<sub>t</sub></span><span>2π</span></span>)<sup>2</sup>)' },
        { math: 'P<sub>cr</sub> = 28.27 in<sup>2</sup> × (36 ksi − <span class="fraction"><span>0.65<sup>2</sup></span><span>29,000 ksi</span></span>(<span class="fraction"><span>36 ksi × 96</span><span>2π</span></span>)<sup>2</sup>) = 893.1 kip' }
      ],
      reference: 'NCEES PE Mechanical Handbook, Section 2.12 "Intermediate- and Long-Length-Column Determination."'
    },
    {
      id: '1704018', complexity: 'Medium',
      text: 'A 3-ft-long, solid steel shaft has a diameter of 1 in. The shaft is subjected to a torque of 1,000 ft-lb. What percent would the angle of twist increase if the shaft were changed to a tube with a 1.0-in outer diameter and 0.5-in inner diameter? The shear modulus of the shafts is 11.5 × 10<sup>6</sup> psi.',
      html: 'A 3-ft-long, solid steel shaft has a diameter of 1 in. The shaft is subjected to a torque of 1,000 ft-lb. What percent would the angle of twist increase if the shaft were changed to a tube with a 1.0-in outer diameter and 0.5-in inner diameter? The shear modulus of the shafts is 11.5×10<sup>6</sup> psi.',
      choices: ['6.5%', '12%', '20%', '50%'], answer: 0,
      blocks: [
        { text: 'Find the polar moment of inertia:' },
        { math: 'J = <span class="fraction"><span>πd<sup>4</sup></span><span>32</span></span> = 0.098 in<sup>4</sup>' },
        { text: 'Find the angle of twist' },
        { math: 'ϕ = <span class="fraction"><span>TL</span><span>GJ</span></span>' },
        { math: 'ϕ = <span class="fraction"><span>1,000 ft•lb × 12 <span class="fraction"><span>in</span><span>ft</span></span> × 36 in</span><span>(11.5×10<sup>6</sup> psi) × 0.098 in<sup>4</sup></span></span> = 0.383 rad' },
        { text: 'Find the polar moment of inertia:' },
        { math: 'J = <span class="fraction"><span>π</span><span>2</span></span>(r<sub>o</sub><sup>4</sup>−r<sub>i</sub><sup>4</sup>)' },
        { math: 'J = <span class="fraction"><span>π</span><span>2</span></span>(0.5<sup>4</sup>−(0.25)<sup>4</sup>) = 0.092 in<sup>4</sup>' },
        { text: 'Find the angle of twist:' },
        { math: 'ϕ = <span class="fraction"><span>TL</span><span>GJ</span></span>' },
        { math: 'ϕ = <span class="fraction"><span>1,000 ft•lb ×12 <span class="fraction"><span>in</span><span>ft</span></span> × 36 in</span><span>(11.5×10<sup>6</sup> psi) ×0.092 in<sup>4</sup></span></span> = 0.408 rad' },
        { text: 'Find the percent increase:' },
        { math: '<span class="fraction"><span>(0.408−0.383)</span><span>0.383</span></span> = 0.065 = 6.5%' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, V. 1.9 > Stress Analysis > Torsional Strain'
    },
    {
      id: '1704022', complexity: 'Hard',
      text: 'Find the factor of safety using AISC guidelines with Euler’s formula for a column with the following properties: P = 65,000 lbf, A = 16.80 in<sup>2</sup>, L = 20 ft, K = 2.1, r = 2.41 in, E = 29,000 ksi, σ<sub>yield</sub> = 42,000 psi, and ν = 0.30. The column’s base is fixed and its top is free in rotation and translation.',
      html: 'Find the factor of safety using AISC guidelines with Euler’s formula for a column with the following properties: P = 65,000 lbf, A = 16.80 in<sup>2</sup>, L = 20 ft, K = 2.1, r = 2.41 in, E = 29,000 ksi, σ<sub>yield</sub> = 42,000 psi, and ν = 0.30. The column’s base is fixed and its top is free in rotation and translation.',
      choices: ['6.77', '1.69', '1.50', '3.00'], answer: 1,
      blocks: [
        { text: 'Refer to the NCEES PE Mechanical Reference Handbook: Intermediate- and Long-Length-Column Determination: Long Columns.' },
        { math: 'σ<sub>actual</sub> = <span class="fraction"><span>65,000 lbf</span><span>16.80 in<sup>2</sup></span></span> = 3,869 psi' },
        { math: 'σ<sub>cr</sub> = <span class="fraction"><span>π<sup>2</sup>E</span><span>(<span class="fraction"><span>KL</span><span>r</span></span>)<sup>2</sup></span></span> = <span class="fraction"><span>π<sup>2</sup> × 29,000,000 psi</span><span>(<span class="fraction"><span>2.1(20ft)[12in/1ft]</span><span>2.41 in</span></span>)<sup>2</sup></span></span>' },
        { math: 'FOS = <span class="fraction"><span>σ<sub>e</sub></span><span>σ<sub>act</sub></span></span> = <span class="fraction"><span>6,544 psi</span><span>3,869 psi</span></span> = 1.69' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Intermediate- and Long-Length-Column Determination > Long Columns'
    },
    {
      id: '1704023', complexity: 'Medium',
      text: 'A point in a member experiences the following principle stresses: σ₁ = 30,000 psi, σ₂ = -12,000 psi, and σ₃ = 1,000 psi. What is the factor of safety according to von Mises stress if the yield stress of the member is 50 ksi?',
      html: 'A point in a member experiences the following principle stresses: σ<sub>1</sub> = 30,000 psi, σ<sub>2</sub> = -12,000 psi, and σ<sub>3</sub> = 1,000 psi. What is the factor of safety according to von Mises stress if the yield stress of the member is 50 ksi?',
      choices: ['1.67', '2.63', '7.72', '1.34'], answer: 3,
      blocks: [
        { text: 'Refer to the NCEES PE Mechanical Reference Handbook: Failure Theories: Ductile Materials.' },
        { text: '*Note: units have been converted to ksi.' },
        { math: 'σ′ = √<span class="fraction"><span>(σ<sub>1</sub>−σ<sub>2</sub>)<sup>2</sup> + (σ<sub>2</sub>−σ<sub>3</sub>)<sup>2</sup> + (σ<sub>3</sub>−σ<sub>1</sub>)<sup>2</sup></span><span>2</span></span>' },
        { math: '=' },
        { math: '√<span class="fraction"><span>(30 ksi − (−12 ksi))<sup>2</sup> + (−12 ksi − 1 ksi)<sup>2</sup> + (30 ksi − 1 ksi)<sup>2</sup></span><span>2</span></span> = 37.24 ksi' },
        { text: 'Calculate the factor of safety.' },
        { math: 'FOS = <span class="fraction"><span>S<sub>yt</sub></span><span>σ′</span></span> = <span class="fraction"><span>50 ksi</span><span>37.24 ksi</span></span> = 1.34' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Failure Theories > Ductile Materials'
    },
    {
      id: '1704024', complexity: 'Easy',
      text: 'A Ø2-in solid circular shaft is subjected to a constant torque of 450 ft-lbf. What is the shear stress due to torsion in the shaft?',
      choices: ['287 psi', '3,440 psi', '2,700 psi', '5,400 psi'], answer: 1,
      blocks: [
        { math: 'J = <span class="fraction"><span>πd<sup>4</sup></span><span>32</span></span> = <span class="fraction"><span>π(2 in)<sup>4</sup></span><span>32</span></span> = 1.57 in<sup>4</sup>' },
        { math: 'τ = <span class="fraction"><span>Tr</span><span>J</span></span>' },
        { math: 'τ = <span class="fraction"><span>450 ft × lbf × 12 <span class="fraction"><span>in</span><span>ft</span></span> × 1 in</span><span>1.57 in<sup>4</sup></span></span> = 3,438 psi ≅ 3,440 psi' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook: Variable Loading Failure Theories\nNCEES PE Mechanical Reference Handbook > Stress Analysis > Torsion'
    },
    {
      id: '1704030', complexity: 'Medium',
      text: 'A rod of A36 steel is placed in tension. The rod is stretched until it reaches plastic deformation. If the rod was originally 5.00 in in length, what value is closest to the percent elongation just prior to yielding?',
      choices: ['0.05%', '0.12%', '0.5%', '1%'], answer: 1,
      blocks: [
        { text: 'From NCEES PE Mechanical Reference Handbook: Strength of Materials: Uniaxial Loading and Deformation, we can find:' },
        { math: 'σ = <span class="fraction"><span>P</span><span>A</span></span>' },
        { math: 'δ = <span class="fraction"><span>PL</span><span>AE</span></span>' },
        { text: 'From the NCEES PE Mechanical Reference Handbook: Properties of Materials: Material Properties, we can find the E and yield stress of A36:' },
        { math: 'E = 29 × 10<sup>3</sup> ksi' },
        { math: 'σ<sub>y</sub> = 36 ksi' },
        { text: 'Using in the yield stress and modulus of elasticity as well as the equation from NCEES PE Mechanical Reference Handbook: Strength of Materials: Uniaxial Loading and Deformation, we can find' },
        { math: 'δ = <span class="fraction"><span>PL</span><span>AE</span></span> = <span class="fraction"><span>σL</span><span>E</span></span>' },
        { math: 'δ = <span class="fraction"><span>36 ksi × 5.00 in</span><span>29 × 10<sup>3</sup> ksi</span></span> = 0.0062 in' },
        { math: '<span class="fraction"><span>0.0062 in</span><span>5.00 in</span></span> × 100 = 0.12%' },
        { text: 'Percent elongation is explained in the NCEES PE Mechanical Reference Handbook: Strength of Materials: Uniaxial Loading and Deformation.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties\nNCEES PE Mechanical Reference Handbook > Strength of Materials > Uniaxial Loading and Deformation'
    },
    {
      id: '1704031', complexity: 'Medium',
      text: 'A steel sample of L2 tool steel experiences cyclical loading with a max stress of 75 ksi and a minimum of 25 ksi. What value is closest to the Goodman equivalent stress? Ignore any modifying endurance factors.',
      choices: ['25 ksi', '30 ksi', '44 ksi', '75 ksi'], answer: 2,
      blocks: [
        { text: 'Use the Goodman equivalent stress equation from the NCEES PE Mechanical Reference Handbook' },
        { math: 'σ<sub>eq</sub> = <span class="fraction"><span>σ<sub>a</sub></span><span>1 − (<span class="fraction"><span>σ<sub>m</sub></span><span>S<sub>ut</sub></span></span>)</span></span>' },
        { math: 'σ<sub>eq</sub> = <span class="fraction"><span>25 ksi</span><span>1 − (<span class="fraction"><span>50 ksi</span><span>116 ksi</span></span>)</span></span>' },
        { math: 'σ<sub>eq</sub> = 44 ksi' },
        { text: 'Closest answer C' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, 2.0 > Chapter 2 Machine Design > 2.14 Variable Loading Failure Theories\nNCEES PE Mechanical Reference Handbook, 2.0 > Chapter 1 Basic engineering Practice> 1.2.11 Properties of Materials >1.2.12 Material Properties'
    },
    {
      id: '1704032', complexity: 'Hard',
      text: 'A steel cable is attached to a wall and then run over a pulley, as shown in Figure 1. The length of the cable from the wall to the top of the pulley is 25 ft. The diameter of the pull is 5 in. The cable diameter is 0.125 in. The weight is 300 lbf. What value is closest to the rotation of the pulley in degrees due to cable elongation? Assume that E = 29,000,000 psi.',
      image: 'Screenshots and Questions/Questions/Mechanics of Materials Questions/problem 23 image.jpg',
      choices: ['2', '4', '6', '8'], answer: 2,
      blocks: [
        { html: 'Using <em>NCEES PE Mechanical Reference Handbook</em>: Strength of Materials: Uniaxial Loading and Deformation we can find:' },
        { math: 'σ = <span class="fraction"><span>P</span><span>A</span></span>' },
        { math: 'σ = <span class="fraction"><span>300 lbf</span><span><span class="fraction"><span>π(0.125 in)<sup>2</sup></span><span>4</span></span></span></span> = 24,446.2 psi' },
        { math: 'δ = <span class="fraction"><span>PL</span><span>AE</span></span> = 24,446.2 psi × <span class="fraction"><span>300 in</span><span>29,000,000 psi</span></span> = 0.253 in' },
        { text: 'Determine the rotation of the pulley by dividing the pulley circumference by elongation and multiplying it by 360° per rotation:' },
        { math: 'circumference = π D = π × 5 in = 15.7 in' },
        { math: '<span class="fraction"><span>0.253 in</span><span>15.7 in</span></span> × <span class="fraction"><span>360°</span><span>1 rotation</span></span> = 5.8°' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Strength of Materials > Uniaxial Loading and Deformation'
    },
    {
      id: '1704035', complexity: 'Hard', multi: true,
      text: 'A shaft transfers power from a motor to a gear-set. An engineer is concerned about the shear strength of the shaft. Which modifications, holding all else constant, would increase the safety factor of the design? Select all that apply.',
      choices: ['Decrease the applied torque', 'Decrease the shaft radius', 'Make the shaft hollow, with the same area', 'Change the shaft to be square section of same area'], answer: [0, 2],
      blocks: [
        { text: 'Concept: Determine safety factor as function of torque (T) and geometry' },
        { math: 'Shear stress τ = <span class="fraction"><span>Tr</span><span>J</span></span>' },
        { math: 'SF = <span class="fraction"><span>S<sub>us</sub></span><span>τ</span></span> = <span class="fraction"><span>S<sub>us</sub>J</span><span>Tr</span></span>' },
        { math: 'Polar moment of inertia J = <span class="fraction"><span>π</span><span>2</span></span> × (r<sub>o</sub><sup>4</sup>−r<sub>i</sub><sup>4</sup>)' },
        { text: 'Solid circular section, J in terms of area:' },
        { math: 'A = πr<sup>2</sup>' },
        { math: 'r = √<span class="fraction"><span>A</span><span>π</span></span>' },
        { math: 'J = <span class="fraction"><span>π</span><span>2</span></span>r<sup>4</sup> = <span class="fraction"><span>π</span><span>2</span></span>(<span class="fraction"><span>A</span><span>π</span></span>)<sup>2</sup> = <span class="fraction"><span>A<sup>2</sup></span><span>2π</span></span>' },
        { math: 'τ = <span class="fraction"><span>Tr</span><span><span class="fraction"><span>A<sup>2</sup></span><span>2π</span></span></span></span> = <span class="fraction"><span>2πTr</span><span>A<sup>2</sup></span></span> = <span class="fraction"><span>2πT√<span class="fraction"><span>A</span><span>π</span></span></span><span>A<sup>2</sup></span></span> = <span class="fraction"><span>2√π T</span><span>A<sup>3/2</sup></span></span>' },
        { math: 'SF = <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>2√π T</span></span> = 0.2821 <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>T</span></span>' },
        { html: '•&nbsp; Decreasing the applied torque would <strong>increase</strong> the safety factor.<br>•&nbsp; Decreasing the shaft radius would decrease the polar moment of inertia and, therefore, <strong>decrease</strong> the safety factor.<br>•&nbsp; Making the shaft hollow with the same area would increase the polar moment of inertia and, therefore, <strong>increase</strong> the safety factor.' },
        { text: 'Example: Thin-walled shaft with thickness' },
        { math: 't = <span class="fraction"><span>r</span><span>10</span></span>' },
        { text: ', same area' },
        { math: 'A = 2πr × t = <span class="fraction"><span>2π</span><span>10</span></span>r<sup>2</sup> = <span class="fraction"><span>π</span><span>5</span></span>r<sup>2</sup>' },
        { math: 'r = √<span class="fraction"><span>5A</span><span>π</span></span>' },
        { math: 'J = <span class="fraction"><span>π</span><span>2</span></span> × (r<sup>4</sup>−(0.9r)<sup>4</sup>) = <span class="fraction"><span>π</span><span>2</span></span> × r<sup>4</sup>(1−0.9<sup>4</sup>) = <span class="fraction"><span>π</span><span>2</span></span> × (<span class="fraction"><span>5A</span><span>π</span></span>)<sup>2</sup>(1−0.9<sup>4</sup>) = 1.368 A<sup>2</sup>' },
        { math: 'SF = <span class="fraction"><span>S<sub>us</sub>J</span><span>Tr</span></span> = <span class="fraction"><span>S<sub>us</sub>1.368 A<sup>2</sup></span><span>T√<span class="fraction"><span>5A</span><span>π</span></span></span></span> = 1.085 <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>T</span></span>' },
        { html: '•&nbsp; Turning the shaft into a square section of the same area would decrease the ratio of polar moment of inertia to an extreme radius (J/r) and, thus, <strong>decrease</strong> the safety factor.' },
        { text: 'Comparison of square section, side length ℓ, same area:' },
        { math: 'A = ℓ<sup>2</sup>' },
        { math: 'ℓ = √A' },
        { math: 'J = <span class="fraction"><span>ℓ<sup>4</sup></span><span>6</span></span> = <span class="fraction"><span>A<sup>2</sup></span><span>6</span></span>' },
        { math: 'Furthest distance from centroid to part of cross−section: r = <span class="fraction"><span>ℓ</span><span>√2</span></span>' },
        { math: 'τ = <span class="fraction"><span>T<span class="fraction"><span>ℓ</span><span>√2</span></span></span><span><span class="fraction"><span>A<sup>2</sup></span><span>6</span></span></span></span> = <span class="fraction"><span>6Tℓ</span><span>√2 A<sup>2</sup></span></span> = <span class="fraction"><span>6T√A</span><span>√2 A<sup>2</sup></span></span> = <span class="fraction"><span>6T</span><span>√2 A<sup>3/2</sup></span></span>' },
        { math: 'SF = <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup>√2</span><span>6T</span></span> = 0.2357 <span class="fraction"><span>S<sub>us</sub>A<sup>3/2</sup></span><span>T</span></span>' },
        { text: 'Square cross-section has a smaller safety factor.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Stress Analysis > Torsion'
    },
    {
      id: '1704036', complexity: 'Easy',
      text: 'Von-Mises equivalent stress is most closely associated with which of the following failure theories/yield surfaces?',
      choices: ['Maximum Shear Stress/Tresca', 'Mohr-Coloumb', 'Maximum Distortion Energy', 'Maximum Normal Stress'], answer: 2,
      blocks: [
        { text: 'Von-Mises equivalent stress is only relevant to the Maximum Distortion Energy failure theory, also known as the Von-Mises yield criterion.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Failure Theories > Ductile Materials'
    },
    {
      id: '1704038', complexity: 'Easy',
      text: 'Which statement is true about the modulus of elasticity, E?',
      choices: ['It is the slope of the stress-strain curve in the linearly elastic region.', 'It is the ratio of stress to volumetric strain.', 'Its value depends only on the temperature of the material.', 'It is the same as the rupture modulus.'], answer: 0,
      blocks: [
        { text: 'The modulus of elasticity is the slope of the stress-strain diagram in the linearly elastic region.' }
      ]
    },
    {
      id: '1704039', complexity: 'Hard',
      text: 'A part of a 3/8-in thick plate is shown below. The plate is subject to a 350-ft-lbf moment load. What is most nearly the maximum equivalent normal stress?',
      image: 'Screenshots and Questions/Questions/Mechanics of Materials Questions/problem 27 image.png',
      choices: ['13,000 psi', '1,800 psi', '8,600 psi', '22,000 psi'], answer: 3,
      blocks: [
        { html: 'Use the stress concentration factor charts in the <em>NCEES PE Mechanical Reference Handbook</em>: Variable Loading Failure Theories.' },
        { math: 't = .375 in' },
        { math: 'd = 2.25 in' },
        { math: 'D = 4.0' },
        { math: 'r = .5 in' },
        { math: 'I = <span class="fraction"><span>td<sup>3</sup></span><span>12</span></span> = .375 in × <span class="fraction"><span>(2.25 in)<sup>3</sup></span><span>12</span></span> = 0.356 in<sup>4</sup>' },
        { math: 'c = <span class="fraction"><span>2.25 in</span><span>2</span></span> = 1.125 in' },
        { math: 'σ<sub>n</sub> = <span class="fraction"><span>Mc</span><span>I</span></span> = 350 ft−lbs × <span class="fraction"><span>12 in</span><span>1 ft</span></span> × <span class="fraction"><span>1.125 in</span><span>.356 in<sup>4</sup></span></span> = 13,272 psi' },
        { math: '<span class="fraction"><span>r</span><span>d</span></span> = <span class="fraction"><span>0.5 in</span><span>2.25 in</span></span> = 0.22' },
        { math: '<span class="fraction"><span>D</span><span>d</span></span> = <span class="fraction"><span>4 in</span><span>2.25 in</span></span> = 1.78' },
        { image: 'Screenshots and Questions/Solutions/Mechanics of Materials Solution images/problem 27 solution image.gif', alt: 'Rectangular filleted bar in bending stress concentration chart' },
        { text: 'From chart Kt = ~1.7, between 1.4 and 1.8.' },
        { math: 'σ<sub>eq</sub> = K<sub>t</sub> × σ<sub>n</sub> = 13,272 psi × 1.7 = 22,564 psi' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Variable Loading Failure Theories'
    },
    {
      id: '1704041', complexity: 'Medium',
      text: 'A hollow shaft has an outer radius of 0.025 m and inner radius of 0.015 m. What is most nearly the largest torque which may be applied if the shear stress is not to exceed 110 MPa?',
      choices: ['1,700 N-m', '1,100 N-m', '2,400 N-m', '4,400 N-m'], answer: 2,
      blocks: [
        { text: 'The shear stress at outer diameter:' },
        { math: 'τ<sub>OD</sub> = <span class="fraction"><span>Tr<sub>o</sub></span><span>J</span></span>' },
        { math: 'J for hollow shaft = <span class="fraction"><span>π</span><span>2</span></span>[(0.025)<sup>4</sup> − (0.015)<sup>4</sup>] = 5.34 × 10<sup>−7</sup> m<sup>4</sup>' },
        { math: 'T<sub>max</sub> = <span class="fraction"><span>110 × 10<sup>6</sup> × 5.34 × 10<sup>−7</sup></span><span>0.025</span></span>' },
        { math: '= 2,350 N.m ≈ 2,400 N.m' }
      ]
    },
    {
      id: '1704042', complexity: 'Medium',
      html: 'A hollow cylinder has a length of 6 in. The inner and outer radius are 1.5 in and 3 in, respectively, and it is twisted by a torque of 2,000 lb-in. Given shear modulus <em>G</em> = 11,000 psi, what is the angle of twist?',
      choices: ['0.0091°', '0.091°', '0.523°', '1.646°'], answer: 2,
      blocks: [
        { math: 'τ = <span class="fraction"><span>Tr</span><span>J</span></span>' },
        { math: 'Kt = <span class="fraction"><span>GJ</span><span>L</span></span>' },
        { math: 'Φ = <span class="fraction"><span>TL</span><span>GJ</span></span> = <span class="fraction"><span>(2,000 lb−in*6 in)</span><span>(11,000 <span class="fraction"><span>lb</span><span>in<sup>2</sup></span></span>*<span class="fraction"><span>π*(3<sup>4</sup>−1.5<sup>4</sup>)</span><span>2</span></span> in<sup>4</sup>)</span></span>' },
        { text: 'Convert the answer from radians to degrees:' },
        { math: 'Φ = 0.0091456 rad*<span class="fraction"><span>180°</span><span>π</span></span>' },
        { math: 'Φ = 0.523°' }
      ],
      reference: 'NCEES PE Mechanical Handbook> Chapter 1: Basics Engineering Practice > Properties of various Shapes,\nNCEES PE Mechanical Handbook > Chapter 2: Machine Design and Material > Torsional Strain Section 2.11.2'
    },
    {
      id: '1704043', complexity: 'Hard',
      html: 'A simply supported beam with a cross-section shows a concentrated load <em>F</em> = 10 kN at its center. What is most nearly the maximum bending stress in the beam?',
      image: 'Screenshots and Questions/Questions/Mechanics of Materials Questions/problem 30 image.png',
      choices: ['2,500 kPa', '2,800 kPa', '3,200 kPa', '3,500 kPa'], answer: 2,
      blocks: [
        { math: 'R<sub>A</sub> = 5 kN' },
        { math: 'R<sub>B</sub> = 5 kN' },
        { math: 'Mmax = 5 kN × 2 = 10 kN−m' },
        { text: 'Moment of inertia around the cross-section, I =' },
        { math: 'I<sub>xx</sub> = <span class="fraction"><span>1</span><span>12</span></span>(200)(500<sup>3</sup>) − 2<span class="fraction"><span>1</span><span>12</span></span>((200−30)/2)(500−25*2)<sup>3</sup> = 792 × 10<sup>6</sup> mm<sup>4</sup>' },
        { math: 'σ = <span class="fraction"><span>Mc</span><span>I<sub>xx</sub></span></span> = 10 kN−m <span class="fraction"><span>0.25 m</span><span>0.000792 m<sup>4</sup></span></span> = 3,156 ≈ 3,200 KPa' }
      ]
    },
    {
      id: '1704044', complexity: 'Medium',
      html: 'A 12 ft long steel member is to be used as a pin-ended column. What is the critical buckling stress for the long column? Assume <em>E</em> = 29,000 Kpsi and radius of gyration, <em>r</em> = 2 in.',
      choices: ['55.21 ksi', '65.21 ksi', '50.51 ksi', '72.11 ksi'], answer: 0,
      blocks: [
        { math: 'σ = <span class="fraction"><span>π<sup>2</sup>E</span><span>(<span class="fraction"><span>KL</span><span>r</span></span>)<sup>2</sup></span></span> = <span class="fraction"><span>3.14<sup>2</sup> × 29,000,000 psi</span><span>(<span class="fraction"><span>1 × 144 in</span><span>2 in</span></span>)<sup>2</sup></span></span> = 55,211 psi = 55.21 ksi' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Section 2.12 Intermediate- and Long-Length-Column Determination >Section 2.12.2 Long Columns'
    },
    {
      id: '1704045', complexity: 'Medium',
      text: 'A 26-in bar of aluminum will be replaced at 50°F. The aluminum bar was installed tightly to the rigid adjacent bars. What is the compressive force in between the two adjacent bars at 80°F if the thermal expansion coefficient of aluminum is 12.8 × 10⁻⁶/°F? The cross-section of the aluminum bar is 4 in².',
      choices: ['15,500 lbf', '12,020 lbf', '7,500 lbf', '20,200 lbf'], answer: 0,
      blocks: [
        { math: '&isin; = α (T2−T1)' },
        { math: '= 12.8 × 10<sup>−6</sup>(80 − 50)' },
        { math: '= 0.000384' },
        { text: 'The modulus of elasticity of aluminum = 10 × 10⁶ psi' },
        { math: 'σ = E &notin; = 10 × 10<sup>6</sup> × 0.000384' },
        { math: '= 3,840 psi' },
        { math: 'Compressive force = σ × A = 3,840 × 4 = 15,360 lbf' }
      ]
    },
    {
      id: '1704048', complexity: 'Hard',
      html: 'What is the yield safety factor of a 22.25 ft, A36 Steel, 4 in x 4 in, <em>t</em> = 1/2-in tube column considering ideal conditions on a column having both ends with fixed rotation and fixed translation?',
      choices: ['1.76', '1.51', '1.96', '2.05'], answer: 2,
      blocks: [
        { text: 'Determine if the beam is intermediate or long, using recommended K value for fixed ends. From the material properties in Chapter 1: Basic Engineering Practice, Average mechanical Properties of typical engineer material. Table for A36 Steel: E = 29 × 10⁶ psi and σ<sub>y</sub> = 36 × 10³ psi.' },
        { math: '(S<sub>r</sub>)<sub>D</sub> = √<span class="fraction"><span>2 × π<sup>2</sup> × E</span><span>K<sup>2</sup> × σ<sub>y</sub></span></span> = √<span class="fraction"><span>2 × π<sup>2</sup> × 29 × 10<sup>6</sup> psi</span><span>0.65<sup>2</sup> × 36,000 psi</span></span> = 194' },
        { text: 'Calculate the slenderness ratio. With data from Chapter 1: Basic Engineering Practice Structural Tubing: Rectangular Dimensions and Properties Table , we know I = 12.3 in⁴ and A = 6.36 in². Hence r = 1.39 in, and the slenderness ratio is:' },
        { math: 'S<sub>r</sub> = <span class="fraction"><span>l</span><span>r</span></span> = <span class="fraction"><span>22.25 ft × <span class="fraction"><span>12 in</span><span>ft</span></span></span><span>1.39 in</span></span> = 192' },
        { text: 'Compare the slender ratio with the column ratio with appropriate ends to determine the type of beam: long, intermediate, or short. Since S<sub>r</sub> &lt; (S<sub>r</sub>)<sub>D</sub> the column is considered intermediate.' },
        { text: 'Solve for P<sub>cr</sub>:' },
        { math: 'P<sub>cr</sub> = A<sub>o</sub>(σ<sub>Y</sub> − <span class="fraction"><span>K<sup>2</sup></span><span>E</span></span> × (<span class="fraction"><span>σ<sub>Y</sub> × S<sub>r</sub></span><span>2 × π</span></span>)<sup>2</sup>) = 6.36 in<sup>2</sup>(36,000 psi − <span class="fraction"><span>0.65<sup>2</sup></span><span>29 × 10<sup>6</sup> psi</span></span> × (<span class="fraction"><span>36,000 psi × 192</span><span>2 × π</span></span>)<sup>2</sup>)' },
        { math: '= 116,726 lbf' },
        { text: 'Solve for σ<sub>cr</sub>:' },
        { math: 'σ<sub>cr</sub> = <span class="fraction"><span>P<sub>cr</sub></span><span>A</span></span> = <span class="fraction"><span>116,726 lbf</span><span>6.36 in<sup>2</sup></span></span> = 18,353 psi' },
        { math: 'SF = <span class="fraction"><span>σ<sub>Y</sub></span><span>σ<sub>cr</sub></span></span> = <span class="fraction"><span>36,000 psi</span><span>18,353 psi</span></span> = 1.96' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Intermediate- and Long-Length-Column Determination > Intermediate Columns\nNCEES PE Mechanical Reference Handbook > Structural Properties\nNCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1707039', complexity: 'Medium',
      text: 'A 6-ft square bar is mounted horizontally by two equal fillet welds on each side. The weld is E100 with a height of 0.375 in. Force P is applied vertically to the bar. What allowable load can the weld support per unit length (lbf/in)? (Assume that the shear stress governs)',
      image: 'Screenshots and Questions/Questions/Mechanics of Materials Questions/problem 34 image.png',
      choices: ['12,300 lbf/in', '18,400 lbf/in', '20,400 lbf/in', '25,000 lbf/in'], answer: 1,
      blocks: [
        { math: 'T<sub>avg</sub> = <span class="fraction"><span>0.707 P</span><span>hl</span></span> = <span class="fraction"><span>0.707 P</span><span>(0.375 in)l</span></span> = 1.885 in<sup>−1</sup><span class="fraction"><span>P</span><span>l</span></span>' },
        { text: 'The strength of an E100 rod is 100 kpsi, and the yield strength is 87 kpsi.' },
        { text: 'The permissible shear stress is:' },
        { math: 'S<sub>a</sub> = 0.40 S<sub>y</sub> = 0.40 × 87 kpsi = 34.8 kpsi' },
        { text: 'Allowable force per inch:' },
        { math: 'T<sub>avg</sub> = S<sub>a</sub>' },
        { math: '1.885 in<sup>−1</sup> × <span class="fraction"><span>P</span><span>l</span></span> = 34.8 kpsi' },
        { math: '<span class="fraction"><span>P</span><span>l</span></span> = 18,461 lbf/in' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Welding'
    },
    {
      id: '1707040', complexity: 'Medium',
      text: 'A 0.125-in by 10-in rectangular aluminium sheet is welded horizontally with two equal welds on the top and bottom. The weld height is 0.125 in. The allowable stress in the weld is 18 ksi. The aluminium sheet is loaded in tension with a force of 8,000 lbf. What is the factor of safety rounded to the nearest whole number?',
      choices: ['4.0', '6.0', '8.0', '16.0'], answer: 0,
      blocks: [
        { text: 'Answer: A' },
        { text: 'Solution: Selecting the correct stress value for the type of weld.' },
        { math: 'σ = <span class="fraction"><span>0.707 P</span><span>hl</span></span> = <span class="fraction"><span>(0.707)(8,000 lbf)</span><span>(0.125 in)(10 in)</span></span> = 4,524 lbf/in<sup>2</sup>' },
        { text: 'Determine factor of safety.' },
        { math: 'FS = <span class="fraction"><span>S<sub>a</sub></span><span>σ</span></span> = <span class="fraction"><span>18,000 <span class="fraction"><span>lbf</span><span>in<sup>2</sup></span></span></span><span>4,524.8 <span class="fraction"><span>lbf</span><span>in<sup>2</sup></span></span></span></span> = 3.97' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, V2.0 >2 Machine Design and Materials, 2.17 Welding'
    },
    {
      id: '1707044', complexity: 'Easy',
      html: 'A bolt with D = 0.5 in and L = 3 in is used to fix a plate as shown in the figure below. If a force of 1,200 lb is applied to the plate and both the bolt and the plate are made of steel (E = 10 × 10<sup>6</sup>), find the total bolt load.',
      image: 'Screenshots and Questions/Questions/Mechanics of Materials Questions/problem 35 image.png',
      choices: ['1,067 lb', '1,200 lb', '1,960 lb', '1,571 lb'], answer: 1,
      blocks: [
        { text: 'The load in the bolt must equal the load applied because it is the only load path.' },
        { text: 'Answer: B' }
      ]
    },
    {
      id: '1707050', complexity: 'Hard',
      text: 'A steel plate carries an 8,000-lb load and is held in place by four bolts as shown in the figure below. If the maximum allowable shear stress in the bolts is 30,000 psi, the diameter of the bolts must be at least:',
      image: 'Screenshots and Questions/Questions/Mechanics of Materials Questions/problem 37 image.png',
      choices: ['0.807 in.', '0.785 in.', '0.775 in.', '0.697 in.'], answer: 0,
      blocks: [
        { math: 'W = 8,000 lb' },
        { math: 'M = 8,000 lb × 10 in = 80,000 in−lb' },
        { math: 'n = 4' },
        { text: 'Primary shear force:' },
        { math: 'F<sub>pi</sub>(W,n) = <span class="fraction"><span>W</span><span>n</span></span>' },
        { math: 'F<sub>pi</sub>(8,000 lb,4) = 2,000 lb' },
        { text: 'Secondary shear force:' },
        { math: 'F<sub>si</sub>(M,r) = <span class="fraction"><span>M × r</span><span>4r<sup>2</sup></span></span>' },
        { math: 'F<sub>si</sub>(80,000 in−lb,1.5in) = 13,333 lb' },
        { text: 'All primary and secondary are represented graphically below. For bolt #2, the Fs1 and Fs2 are in the same direction. Therefore, bolts #2 has the greater acting force.' },
        { math: 'F<sub>2</sub> = 13,333 lb + 2,000 lb = 15,333 lb' },
        { math: 'τ<sub>bolt</sub>(F<sub>2</sub>,r) = <span class="fraction"><span>F<sub>2</sub></span><span>πr<sup>2</sup></span></span> Solving for r, the following is obtained:' },
        { math: 'r = √<span class="fraction"><span>F<sub>2</sub></span><span>π × T<sub>bolt</sub></span></span>' },
        { math: 'r = 0.4033 in' },
        { math: 'd<sub>bolt</sub> = 2*r' },
        { math: 'd<sub>bolt</sub> = 0.4033 in × 2 = 0.807 in' },
        { image: 'Screenshots and Questions/Solutions/Mechanics of Materials Solution images/problem 37 solution image.png', alt: 'Primary and secondary shear force vectors for the four bolts' }
      ]
    },
    {
      id: '1707052', complexity: 'Hard',
      html: 'The following 1/2-in bolted connection has an eccentric load (shown). What is, most nearly, the stress in the critical fastener?<br><br><em>X</em> = 3 in<br><br><em>V</em> = 1 in<br><br><em>L</em> = 7.5 in<br><br><em>F</em> = 13,500 lb',
      image: 'Screenshots and Questions/Questions/Mechanics of Materials Questions/problem 38 image.png',
      choices: ['58,000 psi', '54,000 psi', '11,000 psi', '41,000 psi'], answer: 1,
      blocks: [
        { image: 'Screenshots and Questions/Solutions/Mechanics of Materials Solution images/problem 38 solution image 1.png', alt: 'Eccentric-bolt connection force diagram' },
        { text: 'The magnitude of the upward direct shear force on each fastener is' },
        { math: 'F<sub>1</sub> = <span class="fraction"><span>F</span><span>N</span></span> = <span class="fraction"><span>13,500</span><span>4</span></span> = 3,375 lb' },
        { math: 'M = F*D' },
        { text: 'The magnitude of the shear force due to the moment on each fastener is' },
        { math: 'F<sub>2</sub> = <span class="fraction"><span>Mr<sub>i</sub></span><span>∑<sub>1</sub><sup>4</sup>r<sup>2</sup></span></span> = <span class="fraction"><span>(13,500 lb*5 in)*2.121 in</span><span>4*2.121<sup>2</sup></span></span> = 7,956 lb' },
        { text: 'The force from the moment is directed at a 45 degree angle perpendicular to the radius line of each fastener. Its components are then:' },
        { math: 'F<sub>2x</sub> = F<sub>2y</sub> = F<sub>2</sub>cos(45°) = 5,625' },
        { text: 'Where the direct shear and moment based forces combine in an additive way (at either of the left two fasteners), the total forces will be:' },
        { image: 'Screenshots and Questions/Solutions/Mechanics of Materials Solution images/problem 38 solution image 2.png', alt: 'Bolt A free body diagram' },
        { math: 'R = √((F<sub>1</sub> + F<sub>2y</sub>)<sup>2</sup> + (F<sub>2x</sub>)<sup>2</sup>)' },
        { math: 'R = √((3,375 + 5,625)<sup>2</sup> + (5,625)<sup>2</sup>) = 10,614 lb' },
        { text: 'Shear stress due to this total/resultant force is:' },
        { math: 'τ = <span class="fraction"><span>10,614 lb</span><span>0.196 in<sup>2</sup></span></span> = 54,050 psi' },
        { text: 'Answer A is the result of using simple addition of the F1 and F2 magnitudes rather than vector addition.' },
        { text: 'Answer C is the resultant force on a fastener, not the stress.' },
        { text: 'Answer D ignores the direct shear force and reports the stress due only to the moment.' }
      ],
      reference: 'PE Mechanical Reference Handbook > Joints and Fasteners > Bolts'
    },
    {
      id: '1707053', complexity: 'Medium',
      text: 'A 3/4-in UNF steel bolt is installed in a rigid joint at the fabrication shop using a snug-tight condition (zero initial preload). After installation, the bolt is fully restrained by the connected members, and any change in temperature is assumed to produce no relative movement of the joint. As a result, all thermal strain induced in the bolt is converted into elastic tensile strain.\n\nWhen the assembly arrives at the installation site, the bolt is measured to have a tensile preload of 3,125 lbf due solely to the temperature change between the fabrication shop and the site.\n\nNeglect joint flexibility, relaxation, and any preload resulting from tightening.\n\nDetermine the magnitude of the temperature difference between the fabrication shop and the installation site.',
      choices: ['44.4° F', '32.6° F', '53.1° F', '26.2°F'], answer: 0,
      blocks: [
        { text: 'Reference:' },
        { text: 'Stress from thermal expansion:' },
        { math: 'σ<sub>th</sub> = <span class="fraction"><span>F</span><span>A<sub>t</sub></span></span> = <span class="fraction"><span>3,125 lbf</span><span>0.373 in<sup>2</sup></span></span> = 8,378 psi' },
        { text: 'Calculate the strain from thermal stress:' },
        { math: 'ε<sub>th</sub> = <span class="fraction"><span>σ<sub>th</sub></span><span>E</span></span> = <span class="fraction"><span>8,378 psi</span><span>29 × 10<sup>6</sup> psi</span></span> = 0.0002889 <span class="fraction"><span>in</span><span>in</span></span>' },
        { text: 'Find the difference in temperatures from thermal linear expansion:' },
        { math: 'ε<sub>th</sub> = α × (T<sub>2</sub> − T<sub>1</sub>) = ΔT = <span class="fraction"><span>ε</span><span>α</span></span> = <span class="fraction"><span>0.0002889 <span class="fraction"><span>in</span><span>in</span></span></span><span>6.5 × 10<sup>−6</sup><span class="fraction"><span>1</span><span>°F</span></span></span></span> = 44.4°F' }
      ],
      reference: 'Refer to NCEES PE Reference Handbook, v. 2.1'
    },
    {
      id: '1708013', complexity: 'Easy',
      html: 'For the following typical fatigue test plot (S-N curve), which point marks the endurance limit (S<sub>e</sub>′) of the material?',
      image: 'Screenshots and Questions/Questions/Mechanics of Materials Questions/problem 40 image.png',
      choices: ['Point 1', 'Point 2', 'Point 3', 'Point 4'], answer: 3,
      blocks: [
        { html: 'Point 1 marks the ultimate strength (S<sub>u</sub>) of the material.' },
        { text: 'Point 2 and point 3 mark general levels of strength pertaining to a specified number of cycles, but neither of them are the endurance limit.' },
        { text: 'Point 4 marks the stress at which the cycles reach an asymptote. Any number of cycles at this stress level will not cause failure. Point 4 is the endurance limit.' }
      ]
    },
    {
      id: '1708037', complexity: 'Easy',
      text: 'A steel cylinder with a diameter of 1.25 inches when unstressed is tensile tested and necks down to 0.975 inches in diameter before breaking. The reduction in cross-sectional area of the material by percentage is',
      choices: ['5%.', '20%.', '32%.', '40%.'], answer: 3,
      blocks: [
        { math: 'A = π(<span class="fraction"><span>D</span><span>2</span></span>)<sup>2</sup>' },
        { math: 'A = π(1.25 in/2)<sup>2</sup> = 1.23 in<sup>2</sup>' },
        { math: 'A = π(0.975 in/2)<sup>2</sup> = 0.75 in<sup>2</sup>' },
        { math: '% = (1−<span class="fraction"><span>0.75 in<sup>2</sup></span><span>1.23 in<sup>2</sup></span></span>) ×100 = 40%' }
      ]
    },
    {
      id: '2021032', complexity: 'Easy',
      text: 'Which of the following formulas represents the axial stress?',
      choices: ['σ = <span class="fraction"><span>P</span><span>A</span></span>', 'σ = <span class="fraction"><span>P</span><span>L</span></span>', 'σ = <span class="fraction"><span>A</span><span>P</span></span>', 'σ = <span class="fraction"><span>L</span><span>P</span></span>'], answer: 0,
      blocks: [
        { html: 'Axial stress is calculated as the force (<em>P</em>) divided by the cross-sectional area (<em>A</em>) of the material.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Strength of Materials > Uniaxial Loading and Deformation'
    },
    {
      id: '20250146', complexity: 'Easy',
      html: '<strong>True or False:</strong> Shear stress is highest at the surface of a beam under transverse loading.',
      choices: ['True', 'False'], answer: 1,
      blocks: [
        { text: 'The maximum shear stress in a beam occurs at the neutral axis, not the surface, when subjected to transverse loading.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Stress Analysis > Beams > Stresses in Beams > Chart: Bending Moment, Vertical Shear, & Deflection of Beams of Uniform Cross Section, Under Various Conditions of Loading.\nNCEES PE Mechanical Reference Handbook > Machine Design and Materials > Strength of Materials'
    },
    {
      id: '20251031', complexity: 'Easy',
      text: 'True or False: In axial loading, the stress is uniform across the cross-section of the material.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Axial stress is distributed uniformly across the cross-section of a material under axial load, resulting in uniform strain along the length.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Strength of Materials > Uniaxial Loading and Deformation'
    },
    {
      id: '20251033', complexity: 'Easy',
      html: '<strong>True or False:</strong> In shear loading, the material typically fails by shear fracture, where the material breaks along a plane of maximum shear stress.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Shear failure occurs when the shear stress exceeds the material’s shear strength, leading to fracture along a shear plane.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Strength of Materials > Mohr’s Circle—Stress 2D'
    },
    {
      id: '20251034', complexity: 'Easy',
      html: 'Which of the following formulas calculates the shear stress (τ) in a material?',
      choices: ['τ = <span class="fraction"><span>V</span><span>A</span></span>', 'τ = <span class="fraction"><span>A</span><span>V</span></span>', 'τ = <span class="fraction"><span>F</span><span>A</span></span>', 'τ = <span class="fraction"><span>L</span><span>A</span></span>'], answer: 0,
      blocks: [
        { html: 'Shear stress is calculated by dividing the shear force (<em>V</em>) by the cross-sectional area (<em>A</em>) where the force is applied.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Strength of Materials'
    },
    {
      id: '20251035', complexity: 'Easy',
      html: '<strong>True or False:</strong> The neutral axis of a bending beam experiences no bending stress.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { html: 'The neutral axis is the location in a bent beam where the material experiences neither tension nor compression; the stress is zero there. This can be shown by substituting y = 0 into the bending stress formula σ = <span class="fraction"><span>My</span><span>I</span></span>, where y is the distance from the neutral axis. At the neutral axis, y = 0, so the stress (σ) = 0.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Stress Analysis > Beams > Stresses in Beams. Topic: Bending'
    },
    {
      id: '20251036', complexity: 'Easy',
      html: '<strong>True or False:</strong> Buckling occurs more readily in short, thick columns than in long, thin columns.',
      choices: ['True', 'False'], answer: 1,
      blocks: [
        { text: 'Long, slender columns are more susceptible to buckling under axial loads compared to short, thick columns.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Intermediate and Long-Length-Column Determination.'
    },
    {
      id: '20251037', complexity: 'Easy',
      text: 'Which of the following factors is most important in determining the critical buckling load for a column?',
      choices: ['The column’s length', 'The column’s cross-sectional area', 'The material’s yield strength', 'The column’s moment of inertia'], answer: 0,
      blocks: [
        { text: 'The critical buckling load depends significantly on the column’s length, with longer columns being more likely to buckle at lower loads.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Intermediate and Long-Length-Column Determination.'
    },
    {
      id: '20251038', complexity: 'Easy',
      html: '<strong>True or False:</strong> The maximum shear stress in a shaft under torsion occurs at the surface of the shaft.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'In torsion, the maximum shear stress occurs at the outermost surface of the shaft, where the distance from the center is greatest.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Stress Analysis.'
    },
    {
      id: '20251039', complexity: 'Easy',
      html: '<strong>True or False:</strong> When combined loading occurs, the material’s stress must be analyzed by superimposing the effects of each load.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'In combined loading, the total stress is found by summing the individual stresses caused by each type of load.' }
      ]
    },
    {
      id: '20251040', complexity: 'Easy',
      text: 'Which of the following methods is commonly used to analyze combined loading?',
      choices: ['Non-linear analysis', 'Superposition of stresses', 'Strain gauges', 'Thermal expansion analysis'], answer: 1,
      blocks: [
        { text: 'Superposition is used to combine the individual stresses from different loading conditions to find the total stress on a material.' }
      ],
      reference: 'General Knowledge/ Combined Loading'
    },
    {
      id: '20251045', complexity: 'Easy',
      html: '<strong>True or False:</strong> A material with a low modulus of elasticity will experience more elongation under the same axial load than a material with a high modulus.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'A low modulus of elasticity indicates that the material is more deformable, so it will elongate more under the same axial load compared to a material with a high modulus of elasticity.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Strength of Materials > Uniaxial Loading and Deformation. Topic: Axial Loading'
    },
    {
      id: '20251054', complexity: 'Easy',
      html: '<strong>True or False:</strong> The bending stress in a beam is directly proportional to the distance from the neutral axis.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Bending stress is proportional to the distance from the neutral axis, meaning the farther from the neutral axis, the greater the bending stress.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Stress Analysis > Beams > Stresses in Beams.'
    },
    {
      id: '20251055', complexity: 'Easy',
      html: '<strong>True or False:</strong> The polar moment of inertia (<em>J</em>) is a measure of a body’s resistance to torsion.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'The polar moment of inertia is used to quantify a body’s resistance to torsion, with larger values indicating better resistance to twisting.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251056', complexity: 'Easy',
      html: '<strong>True or False:</strong> In combined loading, the total stress at any point can be found by summing the individual stresses from each loading condition.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'The total stress in combined loading is determined by the superposition of stresses from the individual loading conditions, provided the material remains within its elastic limits.' }
      ],
      reference: 'General Knowledge/ Combined Loading'
    },
    {
      id: '20251057', complexity: 'Easy',
      html: '<strong>True or False:</strong> Static failure only occurs when a material reaches its yield strength.',
      choices: ['True', 'False'], answer: 1,
      blocks: [
        { text: 'Static failure can occur when a material reaches its ultimate tensile strength, not just its yield strength, leading to rupture or fracture.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Failure Theories. Topic: Static Failure'
    },
    {
      id: '20251058', complexity: 'Easy',
      text: 'Which of the following theories is commonly used to predict static failure under multiaxial stress?',
      choices: ['Maximum shear stress theory', 'Modified Goodman theory', 'Von Mises theory', 'Maximum-normal-stress theory'], answer: 2,
      blocks: [
        { text: 'The Von Mises (distortion-energy) theory is widely used to predict yielding under multiaxial stress conditions by comparing the equivalent stress to the material’s yield strength.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Failure Theories > Ductile Materials. Topic: Static Failure'
    },
    {
      id: '20251060', complexity: 'Easy',
      text: 'Which of the following is a common factor that affects fatigue life?',
      choices: ['Thermal conductivity', 'Surface finish', 'Coefficient of linear expansion', 'Density'], answer: 1,
      blocks: [
        { text: 'Surface finish has a significant impact on fatigue life, as smoother surfaces typically have a longer fatigue life than rough surfaces due to fewer stress concentrators and cracks.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Variable Loading Failure Theories. Topic: Fatigue Failure'
    },
    {
      id: '20251061', complexity: 'Easy',
      html: '<strong>True or False:</strong> Thermal stresses are typically higher in materials with higher coefficients of thermal expansion.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Materials with higher coefficients of thermal expansion experience greater dimensional changes for a given temperature variation, leading to higher thermal stresses when constrained.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Strength of Materials > Thermal Deformation'
    },
    {
      id: '20251115', complexity: 'Easy',
      text: 'What is the primary effect of axial loading on a structural element?',
      choices: ['It causes elongation or compression along the axis of the load.', 'It induces bending moments that cause the element to deflect sideways.', 'It generates torsional forces that twist the element about its longitudinal axis.', 'It primarily produces shear stresses perpendicular to the axis of the member.'], answer: 0,
      blocks: [
        { text: 'Axial loading refers to a force applied along the length of a material, which can cause either elongation (tension) or compression depending on the direction of the force.' },
        { text: 'Bending occurs when transverse loads are applied, not axial loads.' },
        { text: 'Torsion results from applied twisting moments, not from pure axial forces.' },
        { text: 'Axial loads produce minimal shear stress unless eccentricity or combined loading exists.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Strength of Materials > Uniaxial Loading and Deformation – Topic: Axial Loading'
    },
    {
      id: '2025159', complexity: 'Easy',
      html: '<strong>True or False:</strong> Fatigue strength is the maximum completely reversed stress a material can withstand for a specified number of cycles without failing.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Fatigue strength is the maximum stress level a material can endure indefinitely without failure due to cyclic loading, often represented as the material’s endurance limit.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Variable Loading Failure Theories. Topic: Fatigue Failure'
    }
  ],
  attachments: [
    {
      id: '1704025', complexity: 'Easy',
      text: 'The maximum permissible shear stress to which this fillet weld can be subjected is most nearly:',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 1 image.png',
      choices: ['7,500 psi.', '27,000 psi.', '30,000 psi.', '67,000 psi.'], answer: 1,
      blocks: [
        { html: 'NCEES <i>PE Mechanical Reference Handbook:</i> Welding, indicates that the weld symbol can include process steps at the end of the tail. This stipulates the electrode to use.' },
        { html: 'NCEES <i>PE Mechanical Reference Handbook:</i> Welding states that the yield stress of E80xx electrode is 67 ksi.' },
        { html: 'NCEES <i>PE Mechanical Reference Handbook:</i> Welding also indicates that fillet welds in shear must not be subject to more than 40% of yield of the electrode' },
        { math: '0.40<i>S</i><sub>y</sub>' },
        { text: 'This information is combined to determine the maximum stress allowed.' },
        { math: '67,000 psi × 0.40 = 26,800 psi' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Welding'
    },
    {
      id: '1704026', complexity: 'Hard',
      html: 'A 100-hp motor is spinning at 3,300 rpm. The output shaft of the motor is ½ inches in diameter and welded to a large disk. Determine the minimum perimeter fillet weld size required to withstand the torsional sheer stress of the motor output on the disk if the weld is made with an E80XX electrode.',
      choices: ['⅛ in', '3⁄16 in', '¼ in', '5⁄16 in'], answer: 3,
      blocks: [
        { text: 'Determine the shaft torque to know the moment on the shaft [2.16.6.2] shaft horsepower relationship.' },
        { math: 'hp = <span class="fraction"><span><i>T</i> × <i>n</i></span><span>63,025</span></span>' },
        { math: '<span class="fraction"><span>hp</span><span><i>n</i></span></span> × 63,025 = <i>T</i>' },
        { math: '<i>T</i> = <span class="fraction"><span>100 hp</span><span>3,300 rpm</span></span> × 63,025 = 1,909.2 in−lb' },
        { text: 'Use [2.17] welding p.184; specifically, the shaft equation with sheer stress.' },
        { text: 'To determine maximum allowable sheer stress, see [2.17] minimum weld metal properties p. 186.' },
        { math: 'E80xx = 67,000 psi' },
        { text: 'Also found in [2.17], stresses permitted by AISC code' },
        { text: 'Sheer is 40% of yield.' },
        { math: 'τ = 0.4<i>S</i><sub>y</sub>' },
        { math: 'τ = 0.4 × 67,000 psi = 26,800 psi' },
        { text: 'Plug max stress and other variables into the equation. Use [2.17] welding p.184, specifically the shaft equation with sheer stress.' },
        { math: 'τ = <span class="fraction"><span>2.83 <i>M</i><sub>t</sub></span><span><i>hD</i><sup>2</sup>π</span></span>' },
        { math: '<i>h</i> = <span class="fraction"><span>2.83 <i>M</i><sub>t</sub></span><span>τ<i>D</i><sup>2</sup>π</span></span>' },
        { math: '<i>h</i> = <span class="fraction"><span>2.83 × 1,909.2 in−lb</span><span>26,800 psi × (0.5 in)<sup>2</sup> × π</span></span> = 0.256 in' },
        { text: 'The only available weld size given that is larger than the minimum weld size is 5/16 in.' }
      ],
      reference: ''
    },
    {
      id: '1704033', complexity: 'Medium',
      html: 'The nut on a ½ in diameter UNF grade 8 steel bolt is tightened 1.5 rotations from an initial un-stretched grip length of 20 in. What value is closest to the stress in the nominal area of the bolt? Ignore the stress concentrations for this calculation. Assume that <i>E</i> = 29,000,000 psi.',
      choices: ['85,000 psi', '109,000 psi', '120,000 psi', '168,000 psi'], answer: 1,
      blocks: [
        { html: 'The table from the NCEES <i>PE Mechanical Reference Handbook:</i> Joints and Fasteners: Tension Connections-External Loads, states that for ½ in UNF bolts, the threads per in is 20. Calculate the pitch in in per thread:' },
        { math: '<span class="fraction"><span>1 in</span><span>20 threads</span></span> = 0.05 in/thread' },
        { text: 'elongation = nut turns × in per thread' },
        { math: '0.05 <span class="fraction"><span>in</span><span>thread</span></span> *1.5 turns = 0.075 in' },
        { math: 'δ = 1.5 turns * 0.05 <span class="fraction"><span>in</span><span>thread</span></span>' },
        { math: 'δ = 0.075 in' },
        { html: 'From the NCEES <i>PE Mechanical Reference Handbook:</i> Strength of Materials: Uniaxial Loading and Deformation, we can find the equation for uniaxial loading and deformation:' },
        { math: 'σ = <span class="fraction"><span><i>P</i></span><span><i>A</i></span></span>' },
        { math: 'δ = <span class="fraction"><span><i>PL</i></span><span><i>AE</i></span></span>' },
        { text: 'Reconfigure the equations to solve for stress:' },
        { math: 'δ = σ <span class="fraction"><span><i>L</i></span><span><i>E</i></span></span>' },
        { math: 'σ = <i>E</i> <span class="fraction"><span>δ</span><span><i>L</i></span></span>' },
        { math: 'σ = 29,000,000 psi × <span class="fraction"><span>0.075 in</span><span>20 in</span></span> = 108,750 psi' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Strength of Materials > Uniaxial Loading and Deformation\nNCEES PE Mechanical Reference Handbook > Joints and Fasteners > Tension Connections-External Loads'
    },
    {
      id: '1704034', complexity: 'Medium',
      html: 'What value is closest to the force in lbf required to shear an ASTM A449 bolt that is 1 1/8 in in diameter through the unthreaded portion of the bolt? Assume that the max shear stress is 60% of the tensile strength.',
      choices: ['62,622', '71,568', '104,370', '119,280'], answer: 0,
      blocks: [
        { text: 'The shear stress formula:' },
        { math: 'τ = <span class="fraction"><span><i>F</i></span><span><i>A</i></span></span>' },
        { math: '<i>A</i> = π<i>r</i><sup>2</sup> = π × (<span class="fraction"><span>1.125 in</span><span>2</span></span>)<sup>2</sup> = 0.994 in<sup>2</sup>' },
        { text: 'From the table on page 207, we find the A449 tensile strength to be 105,000 psi. Thus: 0.6 × 105,000 psi = 63,000 psi' },
        { math: '<i>F</i> = 63,000 psi × 0.994 in<sup>2</sup> = 62,622 lbf' },
        { math: '<i>F</i> = 0.6 × 105,000 = 63,000' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook , V1.9> Chapter 2, Machine Design and Materials>Joints and Fasteners > Bolts'
    },
    {
      id: '1706001', complexity: 'Medium',
      html: 'A rectangular plate is joined by a Ø 0.75 solid pin at the center, which is fixed in all directions. The end of the plates have an acting force of 550lb. Which stress component is the highest stress based on the loading conditions below? Consider all dimensions shown to be in inches.',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 5 image.png',
      choices: ['Bearing stress (Crushing of Rivet or Member)', 'Shear stress (bolt shearing)', 'Normal stress (member rupture or tearing)', 'Shear Tear Out'], answer: 0,
      blocks: [
        { html: 'The stresses are calculated as follows and can be found in NCEES PE Reference handbook &gt; Machine Design &gt; Joints and Fasteners &gt; Bolts&gt; Failure by Crushing of Rivet or Member (Bearing Stress) The bearing stress (<b>Crushing of Rivet or Member</b>) is determined by:' },
        { math: 'σ<sub>bearing</sub> = <span class="fraction"><span><i>F</i><sub>applied</sub></span><span><i>A</i><sub>projected</sub></span></span> where <i>A</i><sub>projected</sub> is the projected area of the bolt, or the diameter of the bolt multiplied by the thickness of the plate.' },
        { math: 'σ<sub>bearing</sub> = <span class="fraction"><span><i>F</i><sub>applied</sub></span><span>(<i>d</i>)(<i>t</i>)</span></span> = <span class="fraction"><span>550 lb<sub>f</sub></span><span>(0.75 in)(0.10 in)</span></span> = 7,333 psi' },
        { text: 'Shear stress (bolt shearing):' },
        { math: 'τ = <span class="fraction"><span><i>F</i><sub>applied</sub></span><span><i>A</i><sub>bolt</sub></span></span> = <span class="fraction"><span><i>F</i><sub>applied</sub></span><span>(<span class="fraction"><span>π</span><span>4</span></span>)<i>D</i><sup>2</sup></span></span>' },
        { math: 'τ = <span class="fraction"><span>550 lb<sub>f</sub></span><span>(<span class="fraction"><span>π</span><span>4</span></span>) × (0.75 in)<sup>2</sup></span></span> = 1,246 psi' },
        { text: 'The plate rupture stress (member tearing) can be calculated by dividing the applied force by the cross-sectional area of the plate around the bolt (i.e., subtracting the projected area of the bolt from the cross-sectional area of the plate).' },
        { math: 'σ<sub>rupt</sub> = <span class="fraction"><span><i>F</i><sub>applied</sub></span><span>(<i>tb</i> − <i>d</i>)</span></span> = <span class="fraction"><span>550 lb<sub>f</sub></span><span>(0.10 in)(2.00 in − 0.75 in)</span></span> = 4,400 psi' },
        { text: 'The shear tear out, is calculated by assuming the bolt causes a shear stress against the sides of the plate across the distance between the center of the bolt and nearest edge. In this case, the tear out area is the thickness of the plate multiplied by the edge distance (e=2.50in). Since the bolt is in contact with this area on both sides, the tear out area is multiplied by 2.' },
        { math: 'τ<sub>tear</sub> = <span class="fraction"><span><i>F</i><sub>applied</sub></span><span><i>A</i><sub>tear</sub></span></span> = <span class="fraction"><span><i>F</i><sub>applied</sub></span><span>2(<i>t</i>)(<i>e</i>)</span></span> = <span class="fraction"><span>550 lb<sub>f</sub></span><span>2(0.10 in)(2.50 in)</span></span> = 1,100 psi' },
        { text: 'Hence, by comparing the resultant stress, we notice the bearing stress has the highest magnitude.' }
      ],
      reference: ''
    },
    {
      id: '1707001', complexity: 'Easy',
      text: 'Which of the weld symbols indicates the welds shown?',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 6 image.png',
      choices: [
        '<img class="choice-image" src="Screenshots and Questions/Solutions/Mechanical Attachments/Problem 6 answer A image.png" alt="Weld symbol A">',
        '<img class="choice-image" src="Screenshots and Questions/Solutions/Mechanical Attachments/Problem 6 answer B image.png" alt="Weld symbol B">',
        '<img class="choice-image" src="Screenshots and Questions/Solutions/Mechanical Attachments/Problem 6 answer C image.png" alt="Weld symbol C">',
        '<img class="choice-image" src="Screenshots and Questions/Solutions/Mechanical Attachments/Problem 6 answer D image.png" alt="Weld symbol D">'
      ], answer: 2,
      blocks: [
        { text: 'A . Wrong side' },
        { text: 'B . Wrong side, wrong pitch' },
        { text: 'C . Correct' },
        { text: 'D . Wrong pitch' }
      ],
      reference: ''
    },
    {
      id: '1707002', complexity: 'Medium',
      html: 'Which of the following weld symbols indicates an all-around fillet weld with a weld throat of most nearly 3/16 in?',
      choices: [
        '<img class="choice-image" src="Screenshots and Questions/Solutions/Mechanical Attachments/problem 7 answer A image.png" alt="Weld symbol A">',
        '<img class="choice-image" src="Screenshots and Questions/Solutions/Mechanical Attachments/problem 7 answer B image.png" alt="Weld symbol B">',
        '<img class="choice-image" src="Screenshots and Questions/Solutions/Mechanical Attachments/problem 7 answer C image.png" alt="Weld symbol C">',
        '<img class="choice-image" src="Screenshots and Questions/Solutions/Mechanical Attachments/problem 7 answer D image.png" alt="Weld symbol D">'
      ], answer: 1,
      blocks: [
        { math: 'Throat = <span class="fraction"><span><i>Leg</i></span><span>2</span></span> × √2' },
        { math: '= <span class="fraction"><span>0.25</span><span>2</span></span> × √2' },
        { text: 'A. All around, throat = 0.133' },
        { text: 'B. All around, throat = 0.177' },
        { text: 'C. Field, throat = 0.133' },
        { text: 'D. Field, throat = 0.177' }
      ],
      reference: 'Refer to the NCEES PE Mechanical Reference Handbook > Welding'
    },
    {
      id: '1707004', complexity: 'Easy',
      text: 'Four welded joints are shown in the illustrations below. Each illustrates a type of weld cracking. Which of the illustrations indicates lamellar tearing?',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 8 image.png',
      choices: ['I', 'II', 'III', 'IV'], answer: 3,
      blocks: [
        { text: 'A . Centerline cracking' },
        { text: 'B . Underbead cracking' },
        { text: 'C . Transverse cracking' },
        { text: 'D . Lamellar tearing' }
      ],
      reference: ''
    },
    {
      id: '1707005', complexity: 'Medium',
      html: 'Two members are clamped by a single M10 fully threaded bolt. The clamped length is 50 mm. The bolt is torqued to 75% of its proof strength, which results in a preload of 50 kN. The tensile area of the bolt is 58 mm<sup>2</sup>, and the modulus of elasticity of the bolt and member materials are 200 GPa. The stiffness of the members is 1.5 times the stiffness of the bolt. A load of 115.5 kN is applied to the clamped parts in a direction that directly opposes the clamp load of the bolt. Find the load in the clamped members in this scenario.',
      choices: ['0 N', '-20 kN', '40 kN', '100 kN'], answer: 0,
      blocks: [
        { text: 'Find the stiffness of the bolt:' },
        { math: '<i>k</i><sub>b</sub> = <span class="fraction"><span><i>AE</i></span><span><i>L</i></span></span>' },
        { math: '<i>k</i><sub>b</sub> = <span class="fraction"><span>(58 × 10<sup>−6</sup>)(200 × 10<sup>9</sup>)</span><span>.05 m</span></span> = 2.32 × 10<sup>8</sup> <span class="fraction"><span>N</span><span>m</span></span>' },
        { text: 'Find the stiffness of the members:' },
        { math: '<i>k</i><sub>m</sub> = <i>k</i><sub>b</sub> × 1.5 = 3.48 × 10<sup>8</sup> N/m' },
        { text: 'Remaining clamping force in the members::' },
        { math: '<i>F</i><sub>m</sub> = <i>F</i><sub>i</sub> − <i>P</i>(<span class="fraction"><span><i>k</i><sub>m</sub></span><span><i>k</i><sub>b</sub> + <i>k</i><sub>m</sub></span></span>)' },
        { math: '<i>F</i><sub>m</sub> = 50 kN − 115.5 kN (<span class="fraction"><span>3.48 × 10<sup>8</sup> <span class="fraction"><span>N</span><span>m</span></span></span><span>(2.32 × 10<sup>8</sup> <span class="fraction"><span>N</span><span>m</span></span>) + (3.48 × 10<sup>8</sup> <span class="fraction"><span>N</span><span>m</span></span>)</span></span>) = −19,300 N (20 kN)' },
        { text: 'A negative value means the members have separated, so the clamped-member load cannot go below zero. Therefore, Fₘ = 0' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, V.2.0 > Joints and Fasteners > Tension Connections - External Loads'
    },
    {
      id: '1707006', complexity: 'Hard',
      html: 'Four 7/8-in, SAE Grade 2 bolts that have UNC threads are used to fasten a beam between two columns and support the load <i>P</i> = 3,000 lbf, as shown in the following figure, where all dimensions are given in inches. If the bolts are threaded for their entire effective lengths, the factor of safety against yield on the bolt carrying the largest load is most nearly:',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 10 image.png',
      choices: ['1.11', '4.47', '2.60', '3.54'], answer: 1,
      blocks: [
        { text: 'From inspection, the centroid of the bolt group is at the geometric center of the bolt group, which coincides with the origin of the coordinate system in the figure shown below. The shear force in each bolt is comprised of two components: direct and secondary shear. These forces are indicated as F₁₁–₂₄, respectively, in the figure. Using the dimensions in the figures shown, the distance from the centroid of the bolt group to the centre of each bolt, r₁ = r₂ = r₃ = r₄ = r, can be shown to be 1.414 in.' },
        { image: 'Screenshots and Questions/Solutions/Mechanical Attachments/problem 10 solution image.png', alt: 'Bolt-group shear-force diagram' },
        { text: 'The direct shear force can be computed as:' },
        { math: '<i>F</i><sub>11</sub> = <span class="fraction"><span><i>P</i></span><span><i>n</i></span></span> = <span class="fraction"><span>3,000 lbf</span><span>4</span></span> = 750 lb' },
        { text: 'where F₁₁ = F₁₂ = F₁₃ = F₁₄ is the applied force and n = 4 is the number of bolts.' },
        { text: 'By considering for each bolt the vector sum of the direct and indirect shear it can be shown that the magnitude of the resultant secondary shear forces in each bolt, F₂ₓ, are:' },
        { math: '<i>F</i><sub>21</sub> = <i>F</i><sub>22</sub> = <i>F</i><sub>23</sub> = <i>F</i><sub>24</sub> = <span class="fraction"><span><i>M</i>*<i>r</i></span><span>∑<sub>i=0</sub><sup>4</sup> <i>r</i><sub>i</sub><sup>2</sup></span></span> = <span class="fraction"><span>3000lb*13 in*1.414 in</span><span>4*(1.414 in)<sup>2</sup></span></span> = 6895.33 lbf' },
        { text: 'Therefore, bolts 2 and 3 each carry the maximum shear force. Taking bolt 2 as a reference to calculate the resultant force.' },
        { math: '<i>F</i> = √[(<i>F</i><sub>12</sub> + <i>F</i><sub>22</sub> sin 45°)<sup>2</sup> + (<i>F</i><sub>22</sub> cos 45°)<sup>2</sup>]' },
        { math: '<i>F</i> = √[(750 + 6895.33 sin 45°)<sup>2</sup> + (6895.33 cos 45°)<sup>2</sup>]' },
        { math: '<i>F</i> = 7,447.57 lbf' },
        { html: 'Noting now that the bolts are loaded in double shear and the tensile area of a 7/8-in SAE Grade 2 bolts having UNC threads (“Basic Dimensions for Coarse Thread Series (UNC/UNRC)” in the NCEES PE Mechanical Reference Handbook: Elements of Machine Design and Methodologies: Joints and Fasteners is 0.462 in<sup>2</sup>, minor diameter. The shear stress in bolts 2 and 3 can be calculated as:' },
        { math: 'τ = <span class="fraction"><span><i>F</i></span><span>2<i>A</i></span></span> = <span class="fraction"><span>7,444.57 lbf</span><span>2(0.462 in<sup>2</sup>)</span></span> = 8,057.74 psi' },
        { text: 'Noting from the “SAE Specifications for Steel Bolts” table in the NCEES PE Mechanical Reference Handbook, v. 1.9 that the yield stress for a 7/8-in SAE Grade 2 bolt is 36,000 psi. The factor of safety against yield, η, is:' },
        { math: '<i>FS</i> = <span class="fraction"><span>σ<sub>y</sub></span><span>τ</span></span> = <span class="fraction"><span>36,000 psi</span><span>8,057.74 psi</span></span> = 4.468' },
        { text: 'where σᵧ is the bolt’s yield stress.' },
        { html: 'Notes:<br>• Answer 2 is derived by failing to note that the bolts are loaded in double shear.<br>• Answer 3 is derived by selecting bolt 3 or 4 as the most highly loaded.<br>• Answer 4 is derived by using the yield strength for Grade 2 bolts from ¼ to ¾ of an inch in diameter; the yield strength of Grade 2 and Grade 5 bolts depends on the size of the bolt.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook V2.0, Chapter 2:Machine Design and Materials, , Joints and Fasteners, 2.18.1.1 Bolted and Riveted Joints Loaded in shear , Fasteners Groups in shear'
    },
    {
      id: '1707008', complexity: 'Hard',
      html: 'A small pressure vessel is created by fillet welding class 300 slip-on flanges, with a bore of 4.57 in, onto a NPS 4 Schedule 40 steel pipe and sealing the ends with class 300 blind flanges as shown in the figure below. All pipe and flanges are made from CSA Z245.1 grade 359 steel (minimum yield stress of 52.1 ksi and ultimate stress of 66.0 ksi). The flanges have eight 0.75-in UNC studs equally spaced around the circumference of the flanges. Assume the following:<ul><li>a bolt stiffness of 3.75 × 10<sup>6</sup> lbf/in</li><li>a joint stiffness of 1.29 × 10<sup>7</sup> lbf/in</li><li>a stud preload of 5,000 lbf</li><li>an internal pressure of 750 psi</li></ul>The stress in each stud is most nearly which of the following?',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 11 image.png',
      choices: ['2,908 psi', '6,475 psi', '16,006 psi', '19,574 psi'], answer: 2,
      blocks: [
        { text: 'The stud load Fᵦ is given by:' },
        { math: '<i>F</i><sub>b</sub> = <i>F</i><sub>i</sub> + <i>CP</i>' },
        { html: 'where<br><i>F</i><sub>i</sub> is the preload on the stud, P is the externally applied load, and<br><i>C</i> = <span class="fraction"><span><i>k</i><sub>b</sub></span><span><i>k</i><sub>b</sub> + <i>k</i><sub>m</sub></span></span><br>where<br><i>K</i><sub>b</sub> are the stiffness of the stud and joint, respectively,<br><i>K</i><sub>m</sub> is the joint coefficient (NCEES <i>PE Mechanical Reference Handbook: Joints and Fasteners: Tension Connections - External Loads</i>).' },
        { text: 'From the information given in the problem statement, the joint coefficient can be computed as:' },
        { math: '<i>C</i> = <span class="fraction"><span><i>k</i><sub>b</sub></span><span><i>k</i><sub>b</sub> + <i>k</i><sub>m</sub></span></span> = <span class="fraction"><span>3.75 × 10<sup>6</sup> lbf/in</span><span>(3.75 × 10<sup>6</sup> lbf/in) + (1.29 × 10<sup>7</sup> lbf/in)</span></span> = 0.225' },
        { text: 'The effective externally applied load to the entire joint P is the product of the internal pressure Pᵢ and the area in the blind flange that the internal pressure acts on; P is calculated as:' },
        { math: '<i>P</i> = <span class="fraction"><span>π</span><span>4</span></span><i>P</i><sub>i</sub><i>D</i><sup>2</sup> = <span class="fraction"><span>π</span><span>4</span></span>(750 psi)(4.57 in)<sup>2</sup> = 12,302 lbf' },
        { text: 'where D is the bore of the slip on flange. Each stud sees one-eighth of this load or 1,538 lbf.' },
        { text: 'Substituting into the stud-load equation gives:' },
        { math: '<i>F</i><sub>b</sub> = 5,000 lbf + 0.225(1,538 lbf) = 5,346 lbf' },
        { text: 'The tensile stress σᵦ in the bolt is the bolt force divided by the tensile area of the bolt. From the “Basic Dimensions for Coarse Thread Series (UNC/UNRC)” table in the NCEES PE Mechanical Reference Handbook: Joints and Fasteners: Tension Connections - External Loads, the tensile stress area of a ¾-in UNC stud is 0.334 in2, so the bolt stress can be computed as:' },
        { math: 'σ<sub>b</sub> = <span class="fraction"><span><i>F</i><sub>b</sub></span><span><i>A</i><sub>t</sub></span></span> = <span class="fraction"><span>5,346 lbf</span><span>0.334 in<sup>2</sup></span></span> = 16,006 psi' },
        { html: 'Notes:<br>• Answer A is derived by dividing the stud preload by the number of studs.<br>• Answer B is derived by dividing the stud preload by the number of studs and the neglecting the joint coefficient.<br>• Answer D is derived by neglecting the joint coefficient.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Joints and Fasteners > Tension Connections - External Loads'
    },
    {
      id: '1707009', complexity: 'Hard',
      html: 'A small pressure vessel is created by fillet welding class 300 slip-on flanges, having a bore of 4.57 in, onto a NPS 4 schedule 40 steel pipe and sealing the ends with class 300 blind flanges as shown in the figure below. All pipe and flanges are made from CSA Z245.1 grade 359 steel (minimum yield stress of 52.1 ksi and ultimate stress of 66.0 ksi). The flanges have eight 0.75-in UNC studs equally spaced around the circumference of the flanges. What is the minimum leg length of an equal-length fillet weld if the shear stress in the weld is not to exceed 40% of yield, assuming an internal pressure of 750 psi and that the welds are made using an E6018 electrode?',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 12 image.png',
      choices: ['0.035 in', '0.044 in', '0.049 in', '0.062 in'], answer: 3,
      blocks: [
        { html: 'From the “Minimum Weld-Metal Properties” table in the NCEES <i>PE Mechanical Reference Handbook: Joints and Fasteners: Tension Connections - External Loads</i>, the yield and ultimate strength of E6018 filler material are 50 ksi and 62 ksi, respectively. Note that the weld material is slightly under matched to the parent material and yields at a lower stress than the pipe or flange material.' },
        { html: 'The available area for shear in the throat of the fillet weld <i>A</i><sub>s</sub> can be computed as:' },
        { math: '<i>A</i><sub>s</sub> = <span class="fraction"><span>π<i>Dh</i></span><span>√2</span></span> = <span class="fraction"><span>2π<i>rh</i></span><span>√2</span></span> = √2π<i>rh</i>,' },
        { html: 'where<br><i>D</i>(<i>r</i>) is the outer diameter (radius) of the pipe and h is the length of the fillet weld’s leg. (NCEES <i>PE Mechanical Reference Handbook: Welding</i>) From the “Schedule 40 Steel Pipe” table in the NCEES <i>PE Mechanical Reference Handbook: Pipe and Tube Data</i>, the outer diameter of a schedule 40 steel pipe can be computed as (4.026 in + 2 × 0.237 in) = 4.5 in. The available area for shear is:' },
        { math: '<i>A</i><sub>s</sub> = <span class="fraction"><span>π<i>Dh</i></span><span>√2</span></span> = <span class="fraction"><span>π(4.5 in)h</span><span>√2</span></span> = 9.996<i>h</i> in<sup>2</sup>' },
        { html: 'The effective load carried by each fillet weld P is the product of the internal pressure <i>P</i><sub>i</sub> and the area in the blind flange that the internal pressure acts on; P is calculated as:' },
        { math: '<i>P</i> = <span class="fraction"><span>π</span><span>4</span></span><i>P</i><sub>i</sub><i>B</i><sup>2</sup> = <span class="fraction"><span>π</span><span>4</span></span>(750 psi)(4.57 in)<sup>2</sup> = 12302 lbf,' },
        { text: 'where B is the bore of the slip-on flange. The shear stress in the weld τ can then be computed as:' },
        { math: 'τ = <span class="fraction"><span><i>P</i></span><span><i>A</i><sub>s</sub></span></span> = <span class="fraction"><span>12,302 lbf</span><span>9.996<i>h</i> in<sup>2</sup></span></span> = (<span class="fraction"><span>1,231</span><span><i>h</i></span></span>) psi' },
        { text: 'Setting equation above equal to 40% of the yield stress of the electrode material gives:' },
        { math: '(<span class="fraction"><span>1,231</span><span><i>h</i></span></span>) psi = 0.4 × 50,000 psi ⇒ <i>h</i> = 0.062 in' },
        { html: 'Notes:<br>• Answer A is derived by using the ultimate strength of the weld and neglecting the factor of 1/√2 in equation (1).<br>• Answer B is derived by neglecting the factor of √2 in equation (1).<br>• Answer C is derived by using the ultimate strength of the weld.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Pipe and Tube Data\nNCEES PE Mechanical Reference Handbook: Welding\nNCEES PE Mechanical Reference Handbook > Joints and Fasteners > Tension Connections - External Loads'
    },
    {
      id: '1707013', complexity: 'Easy',
      text: 'Which of the following symbols would be used if a part required intermittent welding in the field?',
      choices: [
        '<img class="choice-image" src="Screenshots and Questions/Solutions/Mechanical Attachments/Problem 13 answer A image.png" alt="Weld symbol A">',
        '<img class="choice-image" src="Screenshots and Questions/Solutions/Mechanical Attachments/Problem 13 answer B image.png" alt="Weld symbol B">',
        '<img class="choice-image" src="Screenshots and Questions/Solutions/Mechanical Attachments/Problem 13 answer C image.png" alt="Weld symbol C">',
        '<img class="choice-image" src="Screenshots and Questions/Solutions/Mechanical Attachments/Problem 13 answer D image.png" alt="Weld symbol D">'
      ], answer: 3,
      blocks: [
        { image: 'Screenshots and Questions/Solutions/Mechanical Attachments/problem 13 solution image.png', alt: 'Intermittent field weld symbol explanation' }
      ],
      reference: ''
    },
    {
      id: '1707014', complexity: 'Medium',
      html: 'A single lap bolted joint is loaded in tension as shown in the figure below. The plates and bolts have the same properties:<br><br>Shear Strength, <i>S</i><sub>s</sub> = 8,000 psi<br><br>Tensile Strength, <i>S</i><sub>t</sub> = 12,000 psi<br><br>Bearing Strength, <i>S</i><sub>b</sub> = 18,000 psi<br><br>Determine the failure load if the joint fails by bolt shear.',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 14 image.png',
      choices: ['1,220 lbf', '1,178 lbf', '1,324 lbf', '1,417 lbf'], answer: 1,
      blocks: [
        { text: 'Bolt Shear Failure load:' },
        { math: '<i>A</i><sub>b,s</sub> = <span class="fraction"><span>π</span><span>4</span></span> <i>d</i><sup>2</sup> × N = <span class="fraction"><span>π</span><span>4</span></span>(0.25 in)<sup>2</sup> × 3 = 0.147 in<sup>2</sup>' },
        { math: '<i>F</i><sub>(b,s)</sub> = <i>A</i><sub>(b,s)</sub> × <i>S</i><sub>s</sub> = (0.147 in<sup>2</sup>) × 8,000 psi = 1,178 lbf' }
      ],
      reference: ''
    },
    {
      id: '1707015', complexity: 'Medium',
      html: 'A single lap bolted joint is loaded in tension as shown in the figure below. The plates and bolts have the same properties:<br><br>Shear Strength, <i>S</i><sub>s</sub> = 8,000 psi<br><br>Tensile Strength, <i>S</i><sub>t</sub> = 12,000 psi<br><br>Bearing Strength, <i>S</i><sub>b</sub> = 18,000 psi<br><br>Determine the load at which the joint will first fail (governing failure load).',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 15 image.png',
      choices: ['1,178 lbf', '3,375 lbf', '9,750 lbf', '10,500 lbf'], answer: 0,
      blocks: [
        { text: 'Sheet Bearing Failure load (Failure by Crushing of Rivet or Member [Bearing Stress]:' },
        { math: '<i>A</i><sub>b</sub> = <i>tdN</i> = (0.25 in)(0.25 in)(3) = 0.1875 in<sup>2</sup>' },
        { math: '<i>F</i><sub>b</sub> = <i>A</i><sub>b</sub> × <i>S</i><sub>b</sub> = 0.1875 in<sup>2</sup> × 18,000 psi = 3,375 lbf' },
        { text: 'Bolt Shear Failure load:' },
        { math: '<i>A</i><sub>b,s</sub> = <span class="fraction"><span>π</span><span>4</span></span> <i>d</i><sup>2</sup> × N = <span class="fraction"><span>π</span><span>4</span></span>(0.25 in)<sup>2</sup> × 3 = 0.147 in<sup>2</sup>' },
        { math: '<i>F</i><sub>b,s</sub> = <i>A</i><sub>b,s</sub> × <i>S</i><sub>s</sub> = (0.147 in<sup>2</sup>) × 8,000 psi = 1,178 lbf' },
        { text: 'Sheet Shear Failure/ Shear Tear Out Load:' },
        { math: '<i>A</i><sub>s,s</sub> = N2<i>t</i>(<i>a</i>) = 3 × 2 × 0.25 in (<span class="fraction"><span>1 in − 0.25 in</span><span>2</span></span>) = 1.5 in<sup>2</sup>' },
        { math: '<i>F</i><sub>s,s</sub> = <i>A</i><sub>s,s</sub><i>S</i><sub>s</sub> = 1.5 in<sup>2</sup> × 8,000 psi = 12,500 lbf' },
        { text: 'Sheet Tension Failure load:' },
        { math: '<i>A</i><sub>t</sub> = (<i>b</i> − 3<i>d</i>)<i>t</i> = (4 in − 3(0.25 in))(0.25 in) = 0.8125 in<sup>2</sup>' },
        { math: '<i>F</i><sub>t</sub> = <i>A</i><sub>t</sub><i>S</i><sub>t</sub> = 0.8125 in<sup>2</sup> × 12,000 psi = 9750 lbf' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, V2.0>Chapter 2:Machine Design and Materials>2.18 Joints and Fasteners>2.18.1 Bolts>2.18.1.1 Bolted and Riveted Joints Loaded in Shear.'
    },
    {
      id: '1707016', complexity: 'Medium',
      html: 'What installation torque is required to impart a preload equivalent to 80% of the proof load for a lubricated bolt (1/2-13-UNC-2A)? The bolt head is marked with 6 tics over a 180° arc and the bolt will be in a permanent installation.',
      choices: ['1.3 lbf-in', '1.8 lbf-in', '1,100 lbf-in', '1,800 lbf-in'], answer: 2,
      blocks: [
        { html: 'Refer to NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Joints and Fasteners' },
        { html: '6 tics over a 180° arc is associated with SAE grade 8.2, proof strength<br><i>S</i><sub>p</sub> = 120 ksi' },
        { html: 'Bolt tensile area,<br><i>A</i><sub>t</sub> = 0.1419 in<sup>2</sup>' },
        { html: 'Lubricated torque coefficient,<br><i>K</i><sub>T</sub> = 0.18' },
        { text: 'For a permanent installation, we see an added 0.9 factor is applied to the torque requirement.' },
        { html: 'We know the torque requirements for a bolted connection is defined as: T=(K)(Fᵢ)(d) where Fᵢ=(Aₜ)(Sₚ), and Fᵢ is the preload on the bolt. Since we are looking to impart a preload equivalent to 80% of the proof strength, we see:' },
        { math: '<i>T</i> = 0.9 × <i>K</i><sub>T</sub> × <i>d</i> × <i>F</i><sub>i</sub> = (0.9)<i>K</i><sub>T</sub><i>d</i>(0.8<i>A</i><sub>t</sub><i>S</i><sub>p</sub>) = (0.9)(0.18)(0.5 in)(0.8)(0.1419 in<sup>2</sup>)(120,000 psi)' },
        { math: '<i>T</i> = 1,103 lb<sub>f</sub>−in' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Joints and Fasteners'
    },
    {
      id: '1707017', complexity: 'Medium',
      html: 'A plate is welded to a column flange, as illustrated below, using fillet welds along the width of the plate on both sides. If the plate is ½ in thick and 4 in wide, and the weld measures ¼ in, what stress is developed in the weld from a 25-kip load?',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 17 image.jpg',
      choices: ['8.8 ksi', '12.5 ksi', '17.7 ksi', '25 ksi'], answer: 2,
      blocks: [
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook:</i> Welding and NCEES <i>PE Mechanical Reference Handbook:</i> Joints and Fasteners.' },
        { text: 'Throat size per weld:' },
        { math: '<i>t</i><sub>c</sub> = <span class="fraction"><span><i>h</i></span><span>√2</span></span> = <span class="fraction"><span>0.25 in</span><span>√2</span></span> = 0.177 in' },
        { text: 'Effective weld area:' },
        { math: '<i>A</i><sub>w</sub> = n × <i>t</i><sub>c</sub> × <i>w</i> = 2 × 0.177 in × 4 in = 1.41 in<sup>2</sup>' },
        { text: 'Stress:' },
        { math: 'σ = <span class="fraction"><span><i>F</i></span><span><i>A</i><sub>w</sub></span></span> = <span class="fraction"><span>25 kip</span><span>1.41 in<sup>2</sup></span></span> = 17.7 ksi' },
        { html: 'Equivalently, using the formula from the NCEES <i>PE Mechanical Reference Handbook:</i> Welding shown below would yield the same result.' },
        { image: 'Screenshots and Questions/Solutions/Mechanical Attachments/problem 17 image solution.png', alt: 'Weld stress formula diagram' },
        { math: 'σ = <span class="fraction"><span>0.707(25 kips)</span><span>(.25 in)(4 in)</span></span> = <span class="fraction"><span>17.675 kips</span><span>1 in<sup>2</sup></span></span> = 17.7 ksi' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Welding\nNCEES PE Mechanical Reference Handbook > Joints and Fasteners'
    },
    {
      id: '1707018', complexity: 'Easy',
      text: 'Which of the following is not a common failure mode of a riveted joint?',
      choices: ['Bearing/crushing', 'Delamination', 'Shear tear-out', 'Tensile rupture'], answer: 1,
      blocks: [
        { html: 'Refer to NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Joints and Fasteners Design' },
        { text: 'Delamination is a common failure mode of an adhesive joint. Bearing, shear tear-out, and tensile rupture are common failure modes of bolted and riveted joints.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Joints and Fasteners Design'
    },
    {
      id: '1707019', complexity: 'Medium',
      text: 'Three plates are connected in double shear, forming a tension joint. The plates are bonded with a urethane adhesive covering an area of 2 in × 4 in on each interface. Which of the following is a reasonable estimate of the maximum tensile force that the bond can withstand?',
      choices: ['1 kip', '8 kip', '20 kip', '100 kip'], answer: 2,
      blocks: [
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Joints and Fasteners' },
        { html: 'Urethane lap shear strength:<br><i>S</i><sub>s</sub> = [1,000,2,500] psi<br>(note interval notation)' },
        { math: '<i>A</i><sub>a</sub> = n × l × w = 2 × 2 in × 4 in = 16 in<sup>2</sup>' },
        { math: '<i>F</i> = <i>S</i><sub>s</sub> × <i>A</i><sub>a</sub> = [1,000,2,500] psi × 16 in<sup>2</sup> = [16,000,40,000] lbf × (<span class="fraction"><span>1 kip</span><span>1,000 lbf</span></span>) = [16,40] kip' },
        { text: 'Answers A, B, and D are outside the calculated range of maximum tensile force. Answer B may be calculated using the lower bound of shear strength if the adhesive area was obtained using one interface (single shear). Therefore, C is the correct answer.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Joints and Fasteners'
    },
    {
      id: '1707020', complexity: 'Hard',
      html: 'A bolted joint consists of twelve A325 3/4-10-UNC-2A bolts evenly spaced in a 12-in diameter circle, as illustrated. It is eccentrically loaded with a vertical 10,000-lbf load located 5 ft from the center of the bolt group. What is the safety factor relative to yield strength in shear? Use the elastic method.',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 20 image.jpg',
      choices: ['1.9', '4.0', '8.2', '15.4'], answer: 0,
      blocks: [
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Joints and Fasteners for the formulas for fastener groups in shear, for 3/4&quot; A325 bolt mechanical properties, and for the tensile area of UNC bolts.' },
        { text: 'Decompose the reaction into that caused by direct shear and that caused by moment. Then determine the magnitude of force vector.' },
        { text: 'Shear-caused force per bolt:' },
        { math: '<i>F</i><sub>s</sub> = <span class="fraction"><span><i>P</i></span><span><i>n</i></span></span> = <span class="fraction"><span>−10 kip</span><span>12</span></span> = −0.833 kip (direction:vertical)' },
        { text: 'Moment caused by applied force:' },
        { math: '<i>M</i> = r × <i>P</i> = 5 ft × <span class="fraction"><span>12 in</span><span>ft</span></span> × 10 kip = 600 kip−in' },
        { text: 'Moment-caused force per bolt:' },
        { math: '<i>F</i><sub>m</sub> = <span class="fraction"><span><i>M</i> × r</span><span>∑<i>r</i><sub>i</sub><sup>2</sup></span></span> = <span class="fraction"><span>(600 kip−in) × 6 in</span><span>12 × (6 in)<sup>2</sup></span></span> = 8.33 kip(direction:circumferential)' },
        { text: 'The most heavily loaded fasteners are identified by inspection as those closest to the load. However, the load on every fastener can be found to prove this:' },
        { html: 'Split moment-caused force into vector components.<br>θ = 15°,45°,75°,105°,135°,165°,195°,225°,255°,285°,315°,345°<br>horizontal:<br><i>F</i><sub>m,h</sub> = <i>F</i><sub>m</sub> sinθ<br>vertical:<br><i>F</i><sub>m,v</sub> = −<i>F</i><sub>m</sub> cos θ<br>Combine forces.' },
        { math: '∑<i>F</i><sub>h</sub> : <i>F</i><sub>m,h</sub> = <i>F</i><sub>m</sub> sinθ = 8.33 kip × sinθ' },
        { math: '∑<i>F</i><sub>v</sub> : <i>F</i><sub>s</sub> + <i>F</i><sub>v,h</sub> = <i>F</i><sub>s</sub> − <i>F</i><sub>m</sub> cos θ = −0.833 kip − 8.33 kip × cosθ' },
        { math: '|<i>F</i>| = √[(∑<i>F</i><sub>h</sub>)<sup>2</sup> + (∑<i>F</i><sub>v</sub>)<sup>2</sup>] = √[(8.33 kip × sinθ)<sup>2</sup> + (−0.833 kip − 8.33 kip × cosθ)<sup>2</sup>]' },
        { math: '|<i>F</i>| = {9.14,8.94,8.58,8.15,7.76,7.52,7.52,7.76,8.15,8.58,8.94,9.14} kip' },
        { math: 'Maximum force = 9.14 kip' },
        { text: 'Stress:' },
        { math: 'τ = <span class="fraction"><span>|<i>F</i>|</span><span><i>A</i><sub>t</sub></span></span> = <span class="fraction"><span>9.14 kip</span><span>0.334 in<sup>2</sup></span></span> = 27.4 ksi' },
        { html: ', where A is the tensile area of the 3/4&quot; bolt.<br><br>Estimate A325 yield stress in shear from tensile yield stress (92 ksi), as described in NCEES’s Handbook’s description of Sys based on Syt in their spring design section.' },
        { math: '<i>S</i><sub>ys</sub> ≈ <span class="fraction"><span><i>S</i><sub>y</sub></span><span>√3</span></span> = <span class="fraction"><span>92 ksi</span><span>√3</span></span> = 53.1 ksi' },
        { text: 'Calculate safety factor.' },
        { math: '<i>SF</i> = <span class="fraction"><span><i>S</i><sub>ys</sub></span><span>τ</span></span> = <span class="fraction"><span>53.1 ksi</span><span>27.4 ksi</span></span> = 1.94' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Joints and Fasteners'
    },
    {
      id: '1707022', complexity: 'Hard',
      text: 'The above beam is made by gluing four half inch thick plastic bars together. Determine the maximum shear stress in the glue between the beams. Dimensions given are in inches, F = 250 lbf, and the width of the beam is 2 in.',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 21 image.png',
      choices: ['125 psi', '94 psi', '47 psi', '35 psi'], answer: 2,
      blocks: [
        { text: 'The highest stress will be in the glue joint closest to the midline of the beam. Since there is a glue joint exactly at the midline, that’s where the failure will occur. A shear and bending moment diagram can be used to verify that the maximum shear force (V) value will be equal to the reaction force at either end, which is 125 lb.' },
        { math: 'τ = <span class="fraction"><span><i>QV</i></span><span><i>Ib</i></span></span>' },
        { text: 'Where “Q” is the first moment of area,' },
        { math: 'Q = A′y′' },
        { html: 'where A′ is the area above the plane of interest, which is two ½” thickness times the width (b) or two inches, totaling 2 in<sup>2</sup>. y’ is the vertical distance from the beam centerline to the centroid of the area of interest (0.5 in.).' },
        { text: 'Next find the moment of inertia of the area above of the entire assembly, where “h” is the total height of 2 in.' },
        { math: 'I = <span class="fraction"><span>bh<sup>3</sup></span><span>12</span></span>' },
        { text: 'The shear stress is then:' },
        { math: 'τ = <span class="fraction"><span><i>QV</i></span><span><i>Ib</i></span></span> = <span class="fraction"><span>(2tb)yV</span><span><span class="fraction"><span>bh<sup>3</sup></span><span>12</span></span>(b)</span></span> = <span class="fraction"><span>12(2t)yV</span><span>bh<sup>3</sup></span></span>' },
        { text: 'Calculate the horizontal shear stress at the midline:' },
        { math: 'τ = <span class="fraction"><span>12(1 in)(0.5 in)(125 lbf)</span><span>2 in × (2 in)<sup>3</sup></span></span> = 47 psi' },
        { text: 'Answer A is the maximum shear force, not maximum shear stress' },
        { text: 'Answer B uses the area of the entire assembled beam instead of the area above midline' },
        { text: 'Answer D is the shear stress at the glue joint beneath the top layer' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Mechanics of Materials > Beams'
    },
    {
      id: '1707023', complexity: 'Easy',
      html: 'The head of an SAE bolt has 6 radial tics going 360&deg; around the head. What is the grade of the bolt?',
      choices: ['Grade 2', 'Grade 5', 'Grade 6', 'Grade 8'], answer: 3,
      blocks: [
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Joints and Fasteners' },
        { text: 'An SAE bolt with 6 radial tics going 360° around the head is a grade-8 bolt.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design > Elements of Machine Design and Methodologies > Joints and Fasteners'
    },
    {
      id: '1707024', complexity: 'Easy',
      text: 'What weld does the symbol below specify?',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 23 image.png',
      choices: ['A 0.25-in single-bevel-groove weld on the arrow side of joint', 'A 0.25-in single-bevel-groove weld on the other side of joint', 'A 0.25-in fillet weld on the arrow side of joint', 'A 0.25-in fillet weld on the other side of joint'], answer: 2,
      blocks: [
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Welding' },
        { text: 'This weld specifies a 0.25-in fillet weld on the arrow side of the joint.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Welding'
    },
    {
      id: '1707025', complexity: 'Medium',
      html: 'What is the allowable load for the above weld given that the filler material strength = 70 ksi, the width of the plate and each weld = 4 in, and the factor of safety = 2?',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 24 image.png',
      choices: ['24.8 kip', '49.5 kip', '99.1 kip', '70 kip'], answer: 1,
      blocks: [
        { text: 'Refer to the Weld configurations and respective equations show in the PE Mechanical Reference Handbook. Find the effective throat size using equation 53.48.' },
        { math: 'σ = <span class="fraction"><span>0.707P</span><span>hl</span></span> → P = <span class="fraction"><span>σhl</span><span>0.707</span></span>' },
        { text: 'Determine the ultimate strength of the weld.' },
        { math: 'P = <span class="fraction"><span>(70 ksi)(.25 in)(4 in)</span><span>0.707</span></span> = 99.01 kip' },
        { text: 'Divide by the factor of safety.' },
        { math: 'P′ = <span class="fraction"><span>P</span><span>FS</span></span> = <span class="fraction"><span>99.01 kip</span><span>2</span></span> = 49.5 kip' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Welding'
    },
    {
      id: '1707026', complexity: 'Medium',
      text: 'What is most nearly the minimum number of half-inch diameter steel rivets required to withstand a force of 85,000 lbf force on the single shear connection shown below? Assume the rivets are equally spaced and shear failure of the fastener is the relevant failure mode. Rivets have a max shear stress of 35 ksi.',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 25 image.png',
      choices: ['3', '10', '12', '13'], answer: 3,
      blocks: [
        { text: '[NCEES PE Reference Handbook > Machine Design > Joints and Fasteners > Section 2.18.1.1' },
        { text: 'Equation for pure shear:' },
        { math: 'τ = <span class="fraction"><span>F</span><span>A</span></span>' },
        { math: 'A = <span class="fraction"><span>F</span><span>τ</span></span> = <span class="fraction"><span>85,000 lbf</span><span>35,000 psi</span></span> = 2.4285 in<sup>2</sup>' },
        { text: 'Area of a single rivet:' },
        { math: 'A<sub>i</sub> = πr<sup>2</sup> = π × (<span class="fraction"><span>0.5 in</span><span>2</span></span>)<sup>2</sup> = 0.196 in<sup>2</sup>' },
        { math: '<i>number of rivets needed</i> <span class="fraction"><span>A</span><span>A<sub>i</sub></span></span>' },
        { math: '<span class="fraction"><span>2.4285 in<sup>2</sup></span><span>0.196 in<sup>2</sup></span></span> = 12.36' },
        { math: '12.36 → 13 rivets' }
      ],
      reference: 'NCEES PE Reference Handbook > Machine Design > Joints and Fasteners > Section 2.18.1.1'
    },
    {
      id: '1707028', complexity: 'Medium',
      text: 'An 8-bolt flange experiences a 5,000-lbf load. If the flange is twice as stiff as the bolts that fasten it to the pipe, and the bolts are preloaded to 12 kips, what is the load carried by the bolt group in lbf?',
      choices: ['1,666 lbf.', '416 lbf.', '625 lbf.', '1,708 lbf.'], answer: 0,
      blocks: [
        { text: '[Section 2.18.2 Tension Connections-External Loads]' },
        { math: 'P = 5,000 lbf' },
        { math: 'k<sub>m</sub> = 2k<sub>b</sub>' },
        { math: 'C = <span class="fraction"><span>k<sub>b</sub></span><span>k<sub>b</sub> + k<sub>m</sub></span></span> = 1⁄3' },
        { math: 'P<sub>b</sub> = PC = (<span class="fraction"><span>k<sub>b</sub>P</span><span>k<sub>b</sub> + k<sub>m</sub></span></span>)' },
        { math: 'P<sub>b</sub> = <span class="fraction"><span>1</span><span>3</span></span> * P' },
        { text: 'Load added to all bolts due to external load' },
        { math: 'P<sub>b</sub> = <span class="fraction"><span>5,000 lbf</span><span>3</span></span> = 1,666 lbf' },
        { text: 'This is the incremental tensile load taken by all bolts due to the external load.' },
        { text: 'Te preload (12 kips per bolt) is not added because the question asks for load carried by the bolt group, not total bolt force. If asked for load per bolt, you would divide by 8:' },
        { math: '1,666.778≈208 lbf per bolt' }
      ],
      reference: 'NCEESS PE Mechanical Reference Handbook > Machine Design > 2.18 Joint and Fasteners > Tension Connections, External load 2.18.2'
    },
    {
      id: '1707029', complexity: 'Medium',
      text: 'Two 1/2-in thick plates are joined by a rivet. The plates are both made of A36 steel, and the connection is placed in tension by a 50,000-lbf force. What is most nearly the minimum diameter rivet that will not cause a bearing stress failure? Assume no deformation of the rivet.',
      choices: ['2-1/8 in', '2-1/2 in', '2-7/8 in', '3-1/8 in'], answer: 2,
      blocks: [
        { text: 'bearing stress (p. 204)' },
        { math: 'σ = <span class="fraction"><span>F</span><span>A</span></span>' },
        { text: 'A-36 yield strength is: 36,000 psi. See Chapter 1: Basic Engineering Practice, Section 1.2.12 Material Properties, Average Mechanical Properties of Typical Engineering Materials Table.' },
        { text: 'Rearrange the equation to solve for A:' },
        { math: 'σ = <span class="fraction"><span>F</span><span>A</span></span>' },
        { math: 'A = <span class="fraction"><span>F</span><span>σ</span></span> = <span class="fraction"><span>50,000 lbf</span><span>36,000 psi</span></span> = 1.388 in<sup>2</sup>' },
        { text: 'Use projected area to solve for rivet diameter:' },
        { math: 'A = td' },
        { math: 'd = <span class="fraction"><span>A</span><span>t</span></span>' },
        { math: 'd = <span class="fraction"><span>1.388 in<sup>2</sup></span><span>0.5 in</span></span> = 2.777 in' },
        { math: '2.777 → 2.875 = 2−7⁄8 in' }
      ],
      reference: 'NCEES Mechanical Engineering Handbook, V.2.0, Chapter 1, Basing Engineering Practice, 1.2.12 Material Properties.'
    },
    {
      id: '1707031', complexity: 'Easy',
      html: 'Cyanoacrylate glue is used to bond two metal plates to support a hanging load. The plates are positioned such that the glue is loaded vertically in pure shear. One plate is affixed permanently to the ceiling, and a 50 lb weight is hung from the other plate. How much surface area must be covered in glue to achieve a factor of safety of 3? Assume the most conservative numbers for glue performance.',
      choices: ['0.10 in<sup>2</sup>', '0.15 in<sup>2</sup>', '0.20 in<sup>2</sup>', '0.25 in<sup>2</sup>'], answer: 1,
      blocks: [
        { html: 'First find the shear strength of cyanoacrylate glue using the table in the NCEES <i>PE Mechanical Reference Handbook:</i> Elements of Machine Design and Methodologies: Joints and Fasteners (1,000 psi).' },
        { text: 'Next, find the failure equation' },
        { math: 'τ = <span class="fraction"><span>F</span><span>A</span></span>' },
        { math: '1000 psi = <span class="fraction"><span>50 lbf</span><span>A</span></span>' },
        { text: 'Apply three times the load for a factor of safety of 3:' },
        { math: '1,000 psi = <span class="fraction"><span>150 lbf</span><span>A</span></span>' },
        { math: 'A = <span class="fraction"><span>150 lbf</span><span>1,000 psi</span></span>' },
        { math: 'A = 0.15 in<sup>2</sup>' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Joints and Fasteners'
    },
    {
      id: '1707032', complexity: 'Hard',
      text: 'A 20 in long, 0.75 in diameter carbon steel rod is placed between an immovable block wall and an L-shaped bracket, as shown in Figure 1. The L-shaped bracket is affixed to the base with a 2.5 in × 2.5 in pad of urethane glue. The bar is then slowly heated. At what temperature increase would the glue most likely separate in shear? Assume that the glue is loaded only in shear and that no thermal damage occurs or is transferred to the glue.',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 29 image.png',
      choices: ['40°F', '55°F', '60°F', '75°F'], answer: 3,
      blocks: [
        { html: 'First, find the shear strength of urethane glue in the table “Adhesives and Bonding” in the NCEES <i>PE Mechanical Reference Handbook:</i> Joints and Fasteners: Adhesives and Bonding.' },
        { text: 'The urethane shear strength is 1,000 psi.' },
        { html: 'Use the shear stress equation for failure by pure shear in the NCEES <i>PE Mechanical Reference Handbook:</i> Joints and Fasteners: Tension Connections-External Loads to determine the force needed to break the glue.' },
        { math: 'τ = <span class="fraction"><span>F</span><span>A</span></span>' },
        { math: '1,000 psi = <span class="fraction"><span>F</span><span>(2.5 in × 2.5 in)</span></span>' },
        { math: '1,000 psi = <span class="fraction"><span>F</span><span>6.25 in<sup>2</sup></span></span>' },
        { math: 'F = 6,250 lbf' },
        { html: 'Use the axial loading equation from “Uniaxial loading and deformation” in the NCEES <i>PE Mechanical Reference Handbook:</i> Strength of Materials: Uniaxial Loading and Deformation to determine the elastic longitudinal deformation with given force F:' },
        { math: 'δ = <span class="fraction"><span>PL</span><span>AE</span></span>' },
        { text: 'Note that the force F found is P in this equation.' },
        { html: 'Calculate the area of the rod and find E in the NCEES <i>PE Mechanical Reference Handbook:</i> Properties of Materials: Material Properties from the table “Typical Material Properties.”' },
        { math: 'steel E = 29,000,000 psi' },
        { math: 'A = πr<sup>2</sup>' },
        { math: 'A = π(<span class="fraction"><span>0.75 in</span><span>2</span></span>)<sup>2</sup>' },
        { math: 'A = 0.44 in<sup>2</sup>' },
        { text: 'Next, put these numbers into the deformation equation:' },
        { math: 'δ = <span class="fraction"><span>PL</span><span>AE</span></span>' },
        { math: 'δ = <span class="fraction"><span>6,250 lbf × 20 in</span><span>0.44 in<sup>2</sup> × 29,000,000 psi</span></span>' },
        { math: 'δ = 0.0098 in' },
        { html: 'Find the thermal expansion coefficient for steel on the “Material Properties” chart in the NCEES <i>PE Mechanical Reference Handbook:</i> Properties of Materials: Material Properties:' },
        { math: 'α = <span class="fraction"><span>6.5 × 10<sup>−6</sup></span><span>1 °F</span></span>' },
        { html: 'Use the thermal deformation equation from “thermal deformation” from the NCEES <i>PE Mechanical Reference Handbook:</i> Strength of Materials: Thermal Deformations, to find the change in temperature:' },
        { math: 'δ<sub>t</sub> = αL(T − T<sub>0</sub>)' },
        { math: '<span class="fraction"><span>δ<sub>t</sub></span><span>αL</span></span> = (T − T<sub>0</sub>) = ΔT' },
        { math: '<span class="fraction"><span>0.0098 in</span><span>(<span class="fraction"><span>6.5 × 10<sup>−6</sup></span><span>1°F</span></span>) × 20 in</span></span> = ΔT = 75 °F' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Strength of Materials > Thermal Deformations\nNCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties\nNCEES PE Mechanical Reference Handbook > Strength of Materials > Uniaxial Loading and Deformation\nNCEES PE Mechanical Reference Handbook > Joints and Fasteners > Tension Connections-External Loads\nNCEES PE Mechanical Reference Handbook > Joints and Fasteners > Adhesives and Bonding'
    },
    {
      id: '1707033', complexity: 'Medium',
      html: 'As shown in Figure 1, a 4in wide steel plate is adhesively bonded to a steel substrate. Urethane glue with the highest possible peel strength is used for the bond. What is the maximum distributed load F that the adhesive can withstand before peeling? (Ignore the moment effect)',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 30 image.png',
      choices: ['1.5 lbf/in', '8 lbf/in', '10 lbf/in', '50 lbf/in'], answer: 2,
      blocks: [
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook:</i> Joints and Fasteners: Adhesives and Bonding.' },
        { text: 'The highest possible peel strength of urethane glue is 10 lbf/in.' },
        { text: 'Therefore, the maximum distributed load F that the adhesive can withstand before peeling is 10 lbf/in.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Joints and Fasteners > Adhesives and Bonding'
    },
    {
      id: '1707034', complexity: 'Hard',
      text: 'A pair of steel plates are held together by three A307 bolts, each 3/8 in in diameter in a lap joint as shown in Figure 1. The engineer wishes to replace the bolts with an unmodified epoxy adhesive of the highest available strength. What size lap joint will be required to match the shear strength of the mechanical fasteners with a safety factor of 3? Assume that shear yield and that shear area is through an unthreaded shank.',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 31 image.png',
      choices: ['0.2 in', '0.3 in', '0.5 in', '0.7 in'], answer: 2,
      blocks: [
        { html: 'Determine the bolt strength using “Specifications and Identification Markings for bolts, screws, studs, sems, and U Bolts” from the NCEES <i>PE Mechanical Reference Handbook:</i> Joints and Fasteners: Tension Connections-External Loads.' },
        { math: 'A307 yield = 36,000 psi' },
        { math: 'A307 shear = 18,000 psi per problem statement assumption' },
        { text: 'Calculate the shear area of the bolts and determine the shear force:' },
        { math: 'A = πr<sup>2</sup> = π × (<span class="fraction"><span>0.375 in</span><span>2</span></span>)<sup>2</sup>' },
        { math: 'A = 0.110 in<sup>2</sup>' },
        { math: 'A<sub>T</sub> = A × 3 = 0.11 in<sup>2</sup>× 3 bolts = 0.330 in<sup>2</sup>' },
        { html: '“Failure in Pure Shear” NCEES <i>PE Mechanical Reference Handbook:</i> Joints and Fasteners: Bolts, we find:' },
        { math: 'τ = <span class="fraction"><span>F</span><span>A</span></span>' },
        { math: '18,000 psi = <span class="fraction"><span>F</span><span>0.330 in<sup>2</sup></span></span>' },
        { math: 'F = 5,940 lbf' },
        { html: 'Next, find the shear strength of the unmodified epoxy from the NCEES <i>PE Mechanical Reference Handbook:</i> Joints and Fasteners: Adhesives and Bonding, 4,000 psi.' },
        { html: 'Use the shear strength and refer to “Failure in Pure Shear” from the NCEES <i>PE Mechanical Reference Handbook:</i> Joints and Fasteners: Bolts, to determine the lap distance:' },
        { math: 'τ = <span class="fraction"><span>F</span><span>A</span></span>' },
        { math: '4,000 psi = <span class="fraction"><span>5,940 lbf × 3</span><span>A</span></span>' },
        { math: 'A = <span class="fraction"><span>5,940 lbf × 3</span><span>4,000 psi</span></span> = 4.46 in<sup>2</sup>' },
        { math: 'A = lap × width' },
        { math: '<span class="fraction"><span>4.46 in<sup>2</sup></span><span>10 in</span></span> = lap = 0.445 = 0.5 in' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Joints and Fasteners > Adhesives and Bonding\nNCEES PE Mechanical Reference Handbook > Joints and Fasteners > Bolts\nNCEES PE Mechanical Reference Handbook > Joints and Fasteners > Tension Connections-External Loads'
    },
    {
      id: '1707035', complexity: 'Medium',
      text: 'The bracket shown in Figure 1 is bonded to the wall with a spray-on rubber modified acrylic glue. Spray coverage is 65% of the bonded area. Assuming the lowest possible lap strength, what value is closest to the greatest load that the bracket can withstand?',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 32 image.png',
      choices: ['2,000 lbf', '13,300 lbf', '20,400 lbf', '24,000 lbf'], answer: 1,
      blocks: [
        { html: 'Calculate the bonded area using the equations from the NCEES <i>PE Mechanical Reference Handbook</i> &gt; <i>Basic Engineering Practice</i> &gt; <i>Mensuration of Areas &amp; Volumes</i>' },
        { math: 'A = bh' },
        { math: 'A<sub>R</sub> = 3 in × 4 in = 12 in<sup>2</sup>' },
        { text: 'Subtract the area of the hole:' },
        { math: 'A = πa<sup>2</sup>' },
        { math: 'a = <span class="fraction"><span>D</span><span>2</span></span>' },
        { math: 'a = <span class="fraction"><span>1.5 in</span><span>2</span></span> = 0.75 in' },
        { math: 'A<sub>C</sub> = π × (0.75 in)<sup>2</sup> = 1.77 in<sup>2</sup>' },
        { math: 'A<sub>B</sub> = A<sub>R</sub> − A<sub>C</sub> = 12 in<sup>2</sup> − 1.77 in<sup>2</sup> = 10.23 in<sup>2</sup>' },
        { text: 'Now, reduce the value by the given coverage percentage:' },
        { math: '10.23 in<sup>2</sup> × 0.65 = 6.65 in<sup>2</sup>' },
        { html: 'Find the shear strength of the rubber-modified acrylic glue from “Adhesives and Bonding” from the NCEES <i>PE Mechanical Reference Handbook</i> Pg. 215' },
        { html: 'Use the shear stress equation from “Failure in Pure Shear” from the NCEES <i>PE Mechanical Reference Handbook</i> p. 203 to determine the needed force to break the glue:' },
        { math: 'τ = <span class="fraction"><span>F</span><span>A</span></span>' },
        { math: '2,000 psi = <span class="fraction"><span>F</span><span>6.65 in<sup>2</sup></span></span>' },
        { math: 'F = 13,300 lbf' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Basic Engineering Practice > Mensuration of Areas & Volumes\nNCEES PE Mechanical Reference Handbook > Joints and Fasteners > Adhesives and Bonding'
    },
    {
      id: '1707036', complexity: 'Medium',
      html: 'Two solid steel shafts, each with a diameter of 2.5 in, are connected using a cast-iron flanged coupling. The shaft assembly is subjected to a transmitted torque of 720 in·lb.<br><br>The coupling consists of two flanges fastened together by five bolts, equally spaced on a 4-inch bolt circle.<br><br>Assuming the allowable (design) shear stress for the bolts is 8,000 psi, determine the required minimum bolt diameter to safely transmit the applied torque.',
      choices: ['0.125 in', '0.327 in', '0.107 in', '0.053 in'], answer: 2,
      blocks: [
        { text: 'Answer: C' },
        { text: 'Solution: Determine the force generated by torque.' },
        { math: 'F<sub>bolt</sub> = <span class="fraction"><span>Mr<sub>i</sub></span><span>∑r<sub>i</sub><sup>2</sup></span></span> = <span class="fraction"><span>720 in-lb × 2 in</span><span>5 × (2in)<sup>2</sup></span></span> = 72 lb' },
        { math: 'σ<sub>bolt</sub> = <span class="fraction"><span>F<sub>bolt</sub></span><span>A<sub>bolt</sub></span></span>' },
        { math: 'A<sub>bolt</sub> = <span class="fraction"><span>F<sub>bolt</sub></span><span>σ<sub>bolt</sub></span></span> = <span class="fraction"><span>72 lb</span><span>8,000 psi</span></span> = 0.009 in<sup>2</sup>' },
        { math: 'A<sub>bolt</sub> = πr<sup>2</sup>' },
        { math: 'r = <math class="mathml-root"><msqrt><mfrac><msub><mi>A</mi><mi>bolt</mi></msub><mi>π</mi></mfrac></msqrt></math> = 0.0535 in' },
        { math: 'd<sub>bolt</sub> = 0.107 in' }
      ],
      reference: 'NCEESS PE Mechanical > Chapter 2: Machine Design and Material > Bolted and Riveted Joints> Fastener Groups in Shear'
    },
    {
      id: '1707038', complexity: 'Medium',
      text: 'A solid 70-mm diameter shaft is welded to a flat plate by a 15-mm fillet weld. If the maximum allowable shear stress in the weld material is 90 MPa, the maximum torque that the weld joint can withstand due to twisting of the shaft is:',
      choices: ['2.22 kN-m.', '5.42 kN-m.', '10.74 kN-m.', '7.34 kN-m'], answer: 3,
      blocks: [
        { text: 'Answer: D' },
        { text: 'Solution: Maximum shear stress is:' },
        { math: 'τ<sub>max</sub> = <span class="fraction"><span>2.83 M<sub>t</sub></span><span>hD<sup>2</sup>π</span></span>' },
        { math: '90 MPa = <span class="fraction"><span>2.83 M<sub>t</sub></span><span>(0.015m)(0.070m)<sup>2</sup>π</span></span>' },
        { math: 'M<sub>t</sub> = 7.34 kN-m' }
      ],
      reference: ''
    },
    {
      id: '1707041', complexity: 'Medium',
      text: 'A 0.25-in fillet weld is used to hold two 6-in wide plates together. If a force of 120 lb is applied to the plates as shown in the figure below, which value is closest to the shear stress in the weld?',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 35 image.png',
      choices: ['113 lb/in<sup>2</sup>', '120 lb/in<sup>2</sup>', '108 lb/in<sup>2</sup>', '117 lb/in<sup>2</sup>'], answer: 0,
      blocks: [
        { math: 'y = 0.25 in' },
        { math: 'b = 6 in' },
        { math: 't<sub>e</sub>(y) = <span class="fraction"><span>√2</span><span>2</span></span> × y' },
        { math: 't<sub>e</sub>(0.25) = 0.177' },
        { math: 'τ(F,b,t<sub>e</sub>) = <span class="fraction"><span>F</span><span>b × t<sub>e</sub></span></span>' },
        { math: 'τ(120 lb,6 in,0.177 in) = 112.994 lb/in<sup>2</sup>' },
        { text: 'Answer: A' }
      ],
      reference: ''
    },
    {
      id: '1707047', complexity: 'Hard',
      text: 'A steel plate carries an 8,000-lb load and is held in place by four 0.5-in diameter bolts as shown in the figure below. What is the shear stress in bolt No. 1?',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 36 image.gif',
      choices: ['68,663 psi', '78,090 psi', '57,781 psi', '42,069 psi'], answer: 0,
      blocks: [
        { math: 'W = 8,000 lb' },
        { math: 'M = 8,000 lb × 10 in = 80,000 in−lb' },
        { math: 'n = 4' },
        { text: 'Primary shear force:' },
        { math: 'F<sub>pi</sub>(W,n) = <span class="fraction"><span>W</span><span>n</span></span>' },
        { math: 'F<sub>pi</sub>(8,000 lb,4) = 2,000 lb' },
        { text: 'Secondary shear force:' },
        { math: 'F<sub>si</sub>(M,r) = <span class="fraction"><span>M × r</span><span>4r<sup>2</sup></span></span>' },
        { math: 'F<sub>si</sub>(80,000 in−lb,1.5 in) = 13,333 lb' },
        { math: 'τ<sub>bolt1</sub>(F<sub>1</sub>,r) = <span class="fraction"><span>F<sub>1</sub></span><span>πr<sup>2</sup></span></span>' },
        { math: 'F<sub>1</sub> = F<sub>3</sub> = √13,333<sup>2</sup>*2,000 = 13,483 lb' },
        { math: 'F<sub>4</sub> = 0' },
        { math: 'F<sub>2</sub> = 2,000 + 13,333 = 15,333 lb' },
        { math: 'τ<sub>bolt1</sub>(13,482 lb,0.25 in) = 68,663 lb/in<sup>2</sup>' },
        { image: 'Screenshots and Questions/Solutions/Mechanical Attachments/problem 36 image solution.png', alt: 'Bolt force diagram' }
      ],
      reference: 'NCEES Mechanical Engineering Handbook V2.0, chapter 2: joints and Fasteners, 2.18'
    },
    {
      id: '1707048', complexity: 'Medium',
      text: 'A steel plate carries an 8,000-lb load and is held in place by four 0.5-in diameter bolts as shown in the figure below. Which bolt has the smallest shear stress?',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 37 image.png',
      choices: ['Bolt 1', 'Bolt 2', 'Bolt 3', 'Bolt 4'], answer: 3,
      blocks: [
        { math: 'W = 8,000 lb' },
        { math: 'M = 8,000 lb × 10 in = 80,000 in−lb' },
        { math: 'n = 4' },
        { text: 'Primary shear force:' },
        { math: 'F<sub>pi</sub>(W,n) = <span class="fraction"><span>W</span><span>n</span></span>' },
        { math: 'F<sub>pi</sub>(8,000 lb,4) = 2,000 lb' },
        { text: 'Secondary shear force:' },
        { math: 'F<sub>si</sub>(M,r) = <span class="fraction"><span>M × r</span><span>4r<sup>2</sup></span></span>' },
        { math: 'F<sub>si</sub>(80,000 in−lb,1.5) = 13,333 lb' },
        { math: 'F<sub>total;bolt1</sub> = √(2,000lb)<sup>2</sup>+(13,333lb)<sup>2</sup> = 13,482 lb' },
        { math: 'τ<sub>bolt</sub>(F<sub>1</sub>,r) = <span class="fraction"><span>F<sub>1</sub></span><span>πr<sup>2</sup></span></span>' },
        { math: 'τ<sub>bolt</sub>(13,482 lb,0.25 in) = 68,663 lb/in<sup>2</sup> for Bolt 1' },
        { math: 'τ<sub>bolt</sub>(15,333 lb,0.25 in) = 78,090 lb/in<sup>2</sup> for Bolt 2' },
        { math: 'τ<sub>bolt</sub>(13,482 lb,0.25 in) = 68,663 lb/in<sup>2</sup> for Bolt 3' },
        { math: 'τ<sub>bolt</sub>(11,333 lb,0.25 in) = 57,718 lb/in<sup>2</sup> for Bolt 4' },
        { image: 'Screenshots and Questions/Solutions/Mechanical Attachments/problem 36 image solution.png', alt: 'Bolt force diagram' },
        { text: 'Answer: D' }
      ],
      reference: ''
    },
    {
      id: '1707049', complexity: 'Hard',
      text: 'A steel plate carries an 8,000-1b load and is held in place by four 0.5-in diameter bolts as shown in the figure below. Find the maximum bolt shear stress.',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 38 image.png',
      choices: ['68,663 psi', '78,090 psi', '57,781 psi', '42,069 psi'], answer: 1,
      blocks: [
        { math: 'P = 8,000 lb' },
        { math: 'M = 8,000 lb × 10 in = 80,000 in−lb' },
        { math: 'n = 4' },
        { text: 'Primary shear force (direct shear): (NCEES FE Handbook, pg 438)' },
        { math: 'F<sub>1i</sub> = <span class="fraction"><span>P</span><span>n</span></span>' },
        { math: 'F<sub>1i</sub> = 2,000 lb' },
        { text: 'Secondary shear force:' },
        { math: 'F<sub>2i</sub> = <span class="fraction"><span>Mr</span><span>∑<sub>i=1</sub><sup>n</sup>r<sup>2</sup></span></span> = <span class="fraction"><span>M</span><span>4r</span></span>' },
        { math: 'F<sub>2i</sub> = <span class="fraction"><span>(8,000 lb * 10 in)</span><span>4 * 1.5in</span></span> = 13,333 lb' },
        { text: 'By inspection, the maximum stress will be on the righthand bolt, bolt 2, due to the direction of the forces caused by direct shear and caused by the moment. However, the stress on any of the bolts can be calculated' },
        { math: 'F<sub>total;bolt1</sub> = √(2,000lb)<sup>2</sup>+(13,333lb)<sup>2</sup> = 13,482 lb' },
        { math: 'τ<sub>bolt</sub>(F<sub>1</sub>,r) = <span class="fraction"><span>F<sub>1</sub></span><span>πr<sup>2</sup></span></span>' },
        { math: 'τ<sub>bolt</sub>(13,482 lb,0.25 in) = 68,663 lb/in<sup>2</sup> for Bolt 1' },
        { math: 'τ<sub>total;bolt2</sub> = 2,000lb + 13,333lb = 15,333 lb' },
        { math: 'τ<sub>bolt2</sub> = 15,333 lb/0.196 in<sup>2</sup> = 78,090 psi for Bolt 2' },
        { math: 'τ<sub>bolt3</sub> = 13,482 lb/0.196 in<sup>2</sup> = 68,663 lb/in<sup>2</sup> for Bolt 3' },
        { math: 'τ<sub>bolt4</sub> = 11,333 lb/0.196 in<sup>2</sup> = 57,718 lb/in<sup>2</sup> for Bolt 4' },
        { image: 'Screenshots and Questions/Solutions/Mechanical Attachments/problem 36 image solution.png', alt: 'Bolt force diagram' },
        { text: 'Answer: B' }
      ],
      reference: 'NCEESS PE Mechanical Handbook V1.8, Chapter 2: Machine Design and Materials, 2.18 Joints and Fasteners'
    },
    {
      id: '1707051', complexity: 'Medium',
      text: 'A lubricated 9/16-in UNF A36 bolt will be reused when the equipment reaches the client’s location. Which torque will be required for assembly on the assembly shop floor?',
      choices: ['271 in x lbf', '537 in x lbf', '303 in x lbf', '471 in x lbf'], answer: 3,
      blocks: [
        { text: 'Using the rule of thumb:' },
        { math: 'σ<sub>p</sub> = 0.85×σ<sub>y</sub> = 0.85×36ksi = 30.6ksi' },
        { text: 'Calculate the proof force. (Look up the tensile area of a 9/16-in bolt.)' },
        { math: 'F<sub>p</sub> = A<sub>t</sub>×σ<sub>p</sub> = 0.203 in<sup>2</sup>×30,600 psi = 6,211.8 lbf' },
        { math: 'F<sub>i</sub> = 0.75×F<sub>p</sub> = 0.75×6211.8 lbf = 4,658.85 lbf' },
        { text: 'Torque required: K = 0.18 for lubricated connections:' },
        { math: 'T = K×F<sub>i</sub>×d = 0.18×4,658.85 lbf×<span class="fraction"><span>9</span><span>16</span></span> in = 471.71in × lbf' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties\nRefer to the NCEES PE Mechanical Reference Handbook > Joints and Fasteners > Bolts'
    },
    {
      id: '1707054', complexity: 'Medium',
      text: 'An 1,150-in-lbf torque was specified for a 1/2-in UNF nonplated steel, black bolt to be permanently assembled at a site. What grade bolt would use the specified torque?',
      choices: ['Grade 1', 'Grade 2', 'Grade 5', 'Grade 8.8'], answer: 1,
      blocks: [
        { text: 'Calculate the preload force:' },
        { math: 'T = K×F<sub>i</sub>×d = F<sub>i</sub> = <span class="fraction"><span>T</span><span>K×d</span></span> = <span class="fraction"><span>1,150 in×lbf</span><span>0.30×<span class="fraction"><span>1</span><span>2</span></span> in</span></span> = 7,667 lbf' },
        { text: 'Bolt will be permanently using the following equation:' },
        { math: 'F<sub>i</sub> = 0.9×F<sub>p</sub> = F<sub>p</sub> = <span class="fraction"><span>F<sub>i</sub></span><span>0.9</span></span> = <span class="fraction"><span>7,667 lbf</span><span>0.9</span></span> = 8,518 lbf' },
        { text: 'Find tensile stress area from chart and solve for proof strength.' },
        { math: 'F<sub>p</sub> = σ<sub>proof</sub>×A<sub>t</sub> = σ<sub>proof</sub> = <span class="fraction"><span>F<sub>p</sub></span><span>A<sub>t</sub></span></span> = <span class="fraction"><span>8,518 lbf</span><span>0.1599 in<sup>2</sup></span></span> = 53.3 ksi' },
        { text: 'According to SAE standards, p. 193, Grade 2 has minimum 55 ksi proof strength' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Joints and Fasteners > Tension Connections-External Loads'
    },
    {
      id: '1707056', complexity: 'Medium',
      text: 'A 3/4-in UNC bolt is lubricated and torqued to 45 ft-lb. The bolt is then stressed in tension by an 8,000-1b load. If sensors on the bolt grip measure the bolt load as 9,000 lbf, which of the following is most nearly the joint coefficient?',
      choices: ['<span class="fraction"><span>1</span><span>8</span></span>', '<span class="fraction"><span>1</span><span>4</span></span>', '<span class="fraction"><span>3</span><span>8</span></span>', '<span class="fraction"><span>5</span><span>8</span></span>'], answer: 3,
      blocks: [
        { text: 'Determine the preload from the torque equation:' },
        { math: 'T = KF<sub>i</sub>d' },
        { math: 'F<sub>i</sub> = <span class="fraction"><span>T</span><span>Kd</span></span> = <span class="fraction"><span>45 ft−lb</span><span>(0.18)(0.75in)(<span class="fraction"><span>1 ft</span><span>12 in</span></span>)</span></span>' },
        { math: 'F<sub>i</sub> = 4,000 lbf' },
        { text: 'Use the equation for resultant bolt load:' },
        { math: 'F<sub>b</sub> = P(<span class="fraction"><span>k<sub>b</sub></span><span>k<sub>b</sub> + k<sub>m</sub></span></span>)+F<sub>i</sub>' },
        { math: '9,000 lbf = 8,000 lbf(<span class="fraction"><span>k<sub>b</sub></span><span>k<sub>b</sub> + k<sub>m</sub></span></span>)+4,000 lbf' },
        { math: '(<span class="fraction"><span>k<sub>b</sub></span><span>k<sub>b</sub> + k<sub>m</sub></span></span>) = <span class="fraction"><span>5</span><span>8</span></span>' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, Section 2.18.2 “Tension Connections—The External Load.”'
    },
    {
      id: '1707058', complexity: 'Medium',
      text: 'A single butt weld is used to connect two plates. Plate 1, which is 2 in wide and 0.625 in thick, is welded edge to edge with plate 2. The grooved butt weld is placed along the width of plate 2 using an E7016 electrode. A tension load of 25 kips is applied on plate 2. Which of the following is most nearly the minimum size of the weld height needed to support this tension load?',
      choices: ['<span class="fraction"><span>1</span><span>8</span></span> in', '<span class="fraction"><span>1</span><span>4</span></span> in', '<span class="fraction"><span>3</span><span>8</span></span> in', '<span class="fraction"><span>1</span><span>2</span></span> in'], answer: 2,
      blocks: [
        { html: 'For E70xx metals, the minimum yield strength is 57 kpsi. According to the American Institute of Steel Construction (AISC) code for welding materials, the permissible stress for tensile loading is 0.60 <i>S</i><sub>y</sub> of the electrode.' },
        { math: 'σ = 0.60×57,000 psi' },
        { math: 'σ = 34,200 psi' },
        { text: 'Solve for weld size.' },
        { math: 'σ = <span class="fraction"><span>P</span><span>hl</span></span>' },
        { math: '34,200 psi = <span class="fraction"><span>25,000 lbf</span><span>h×2 in</span></span>' },
        { math: 'h = 0.365 in' },
        { math: 'h = <span class="fraction"><span>3</span><span>8</span></span> in' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, Section 2.17 “Welding.”'
    },
    {
      id: '1707059', complexity: 'Easy',
      text: 'A polyimide-based adhesive is used to join two sheets of sheet aluminum. The joint has an overlap of 0.5 in. Assuming a minimum lap-shear strength, which of the following is the maximum shear stress per unit width that the joint can sustain?',
      choices: ['500 lb/in', '1,000 lb/in', '1,500 lb/in', '2,000 lb/in'], answer: 1,
      blocks: [
        { text: 'The minimum lap-shear strength for polyimide adhesives is 2,000 lb/in². The maximum shear stress per unit width the joint can sustain is:' },
        { math: '<span class="fraction"><span>F</span><span>w</span></span> = τL' },
        { math: '<span class="fraction"><span>F</span><span>w</span></span> = 2,000 lb/in<sup>2</sup>×0.5 in' },
        { math: '<span class="fraction"><span>F</span><span>w</span></span> = 1,000 lb/in' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, Section 2.18.3 “Adhesives and Bonding.”'
    },
    {
      id: '1707060', complexity: 'Medium',
      text: 'A single-riveted lap joint is composed of two 3/8-in thick plates that are 10 in wide, along with four rivets equally spaced across the joint. The joint is designed to support a shear load on the rivets. Each rivet’s diameter is 1/2 in. The applied shear force is 10,000 lbf. What is most nearly the shear stress in the rivets?',
      choices: ['6 ksi', '9 ksi', '13 ksi', '15 ksi'], answer: 2,
      blocks: [
        { text: 'First, calculate the shear area of one rivet.' },
        { math: 'A = πr<sup>2</sup> = π(<span class="fraction"><span>0.5 in</span><span>2</span></span>)<sup>2</sup> = 0.196 in<sup>2</sup>' },
        { text: 'There are four total rivets. Therefore:' },
        { math: 'Total area = 4 × 0.196 in<sup>2</sup> = 0.784 in<sup>2</sup>' },
        { text: 'Calculate the stress on the rivets.' },
        { math: 'τ = <span class="fraction"><span>F</span><span>A</span></span> = <span class="fraction"><span>10,000 lbf</span><span>0.784 in<sup>2</sup></span></span> = 12,755 psi' },
        { math: '= 13 ksi' }
      ],
      reference: ''
    },
    {
      id: '1708010', complexity: 'Easy',
      text: 'Which of the following processes is not a form of arc welding?',
      choices: ['Oxyacetylene welding', 'MIG welding', 'TIG welding', 'SMA welding'], answer: 0,
      blocks: [
        { text: 'Oxyacetylene welding is a gas welding process that uses oxygen and acetylene to generate a flame.' },
        { text: 'MIG (metal inert gas) welding is an arc welding process. The electrode supplies the current which generates the arc between the electrode and the workpiece.' },
        { text: 'TIG (tungsten inert gas) welding is an arc welding process. The electrode supplies the current which generates the arc between the electrode and the workpiece.' },
        { text: 'SMA (shielded metal arc) welding is an arc welding process. The electrode supplies the current which generates the arc between the electrode and the workpiece.' }
      ],
      reference: ''
    },
    {
      id: '20251041', complexity: 'Easy',
      html: '<b>True or False:</b> Brazing creates a bond by melting the base materials together.',
      choices: ['True', 'False'], answer: 1,
      blocks: [
        { text: 'Brazing involves heating a filler material to its melting point, but not the base materials, which remain solid during the bonding process.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251042', complexity: 'Easy',
      text: 'Which of the following is a key advantage of using adhesives in mechanical design?',
      choices: ['High temperature resistance', 'Ability to bond dissimilar materials', 'Permanent connection', 'Ability to withstand high shear forces'], answer: 1,
      blocks: [
        { text: 'Adhesives are particularly useful for joining materials that may be difficult to weld or braze, especially when bonding dissimilar materials.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251043', complexity: 'Easy',
      html: '<b>True or False:</b> Shackles are primarily used for securing ropes or cables to heavy loads.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Shackles are often used to attach cables or ropes to a load, making them useful in lifting and securing applications.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251044', complexity: 'Easy',
      html: '<b>True or False:</b> Studs are similar to bolts but do not have heads, allowing them to be installed from both sides of an assembly.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Studs are threaded on both ends and do not have heads, making them ideal for installation from either side of an assembly.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251047', complexity: 'Easy',
      html: '<b>True or False:</b> A stud is a type of fastener that lacks a head and is threaded at both ends.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'A stud is a rod-like fastener threaded on both ends, often used in applications where both components are secured with nuts.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251048', complexity: 'Easy',
      text: 'Which of the following fasteners is used to secure components to concrete or masonry structures?',
      choices: ['Bolt', 'Rivet', 'Stud', 'Anchor'], answer: 3,
      blocks: [
        { text: 'Anchors are designed to fasten components to solid materials like concrete or masonry. They expand or grip within the base material to provide a secure connection, often in structural or equipment mounting applications.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251049', complexity: 'Easy',
      text: 'In mechanical assemblies, how does a bolt differ from a screw in typical fastening applications?',
      choices: ['A bolt is used with a nut, whereas a screw engages directly with a tapped hole.', 'A bolt is always stronger than a screw.', 'A screw requires a nut, whereas a bolt does not.', 'A bolt has no threads, whereas a screw is fully threaded.'], answer: 0,
      blocks: [
        { text: 'Bolts are typically used with nuts to clamp components together, whereas screws are designed to engage directly with internal threads in a tapped hole.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251051', complexity: 'Easy',
      text: 'Which type of fastener is commonly used to create a permanent mechanical joint in thin sheet metal assemblies?',
      choices: ['Rivets', 'Snap rings', 'Cotter pins', 'Set screws'], answer: 0,
      blocks: [
        { text: 'Rivets are non-threaded fasteners used to permanently join thin materials, especially sheet metals. Once installed, rivets cannot be removed without destroying the fastener, making them ideal for structural applications requiring permanent joints.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251052', complexity: 'Easy',
      text: 'In mechanical assemblies, which component is commonly used to prevent axial movement of parts such as bearings or gears within a groove?',
      choices: ['Retaining ring', 'Set screw', 'Dowel pin', 'Belleville washer'], answer: 0,
      blocks: [
        { text: 'Retaining rings are designed to fit into a groove in a shaft or housing and prevent axial movement of components like bearings or gears. Unlike set screws or dowel pins, which may control rotation or positioning, retaining rings specifically limit motion along the shaft axis.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251053', complexity: 'Easy',
      html: '<b>True or False:</b> Dowel pins are commonly used in mechanical assemblies to allow easy disassembly of components.',
      choices: ['True', 'False'], answer: 1,
      blocks: [
        { text: 'Dowel pins are primarily used to accurately align or locate components, not to facilitate disassembly. Although pins in general can be used for temporary connections, dowel pins are press-fit and not intended for repeated removal, making them more of a semi-permanent or alignment-focused fastener.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251062', complexity: 'Easy',
      text: 'Which of the following is a key disadvantage of brazing?',
      choices: ['It requires higher temperatures than welding.', 'It may result in a weaker joint compared to welding.', 'It is limited to use with only ferrous metals.', 'It causes melting of the base materials.'], answer: 1,
      blocks: [
        { text: 'One key disadvantage of brazing is that the joints are typically not as strong as welded joints, especially under high-temperature or high-stress conditions. Although brazing uses lower temperatures than welding and does not melt the base materials, these are advantages, not disadvantages. Brazing is also not limited to ferrous metals—it can be used with a wide range of materials' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251063', complexity: 'Easy',
      html: '<b>True or False:</b> Chemical bonds are often used in place of mechanical fasteners in lightweight applications.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Chemical bonding methods like adhesives can be used to join materials in applications where lightweight joints are needed, offering flexibility and high strength without adding significant weight.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '91707041', complexity: 'Medium',
      text: 'A joint is welded as shown in the figure below. The applied force is 2,300 lbf. The base material is A36 steel, and it was welded using E90 filler rod. Assuming a factor of safety of 3 based on the AISC permissible stress, what is most nearly the length of weld required?',
      image: 'Screenshots and Questions/Questions/Mechanical Attachments Questions/problem 58 image.png',
      choices: ['1.58 in', '0.634 in', '0.448 in', '0.542 in'], answer: 1,
      blocks: [
        { html: 'From the <i>NCEES PE Mechanical Reference Handbook:</i> Welding, E90 yield strength is 77k psi and AISC permissible stress (shear/fillet) is 0.40 &times; S<sub>y</sub>.' },
        { math: '&sigma;<sub>allow</sub> = 77,000 psi &times; <span class="fraction"><span>0.4</span><span>3</span></span> = 10,266 psi' },
        { html: 'The normal stress of the configuration shown is (<i>NCEES PE Mechanical Reference Handbook:</i> Welding):' },
        { math: '&sigma;<sub>allow</sub> = <span class="fraction"><span>0.707 P</span><span>hl</span></span>' },
        { text: 'Solve for length (note that the weld symbol specifies a 1/4-in weld):' },
        { math: 'l = <span class="fraction"><span>0.707 &times; 2,300 psi</span><span>(10,266 &times; 0.25 in)</span></span> = 0.634 in' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Welding'
    },
    {
      id: '91707042', complexity: 'Medium',
      html: 'A piston in a motorcycle engine is connected to the crankshaft by a connecting rod. The connecting rod is attached to the crankshaft by 2 SAE Grade-8 3/8&quot;-24 UNF fasteners. When installed, the fasteners are torqued assuming they will not be reused if the engine is disassembled and rebuilt. The stiffness of each bolt is 5.09 &times; 10<sup>6</sup> lbf/in, and the connecting rod cap is roughly 8 times stiffer than a bolt. The maximum tensile force on the piston is 5,000 lbf. What is the resultant tension in each fastener if all of the piston force is applied to the bolted connection?',
      choices: ['9,760 lbf', '9,500 lbf', '7,902 lbf', '8,200 lbf'], answer: 0,
      blocks: [
        { html: 'A<sub>t</sub> = 0.0878 in<sup>2</sup> (<i>NCEES PE Mechanical Reference Handbook:</i> Joints and Fasteners: Tension Connections-External Loads)' },
        { html: 'S<sub>p</sub> = 120,000 psi (proof strength of bolt, <i>NCEES PE Mechanical Reference Handbook:</i> Joints and Fasteners: Tension Connections-External Loads' },
        { math: 'K<sub>s</sub> = 5.09 &times; 10<sup>6</sup> psi &times; 8 = 40.7 &times; 10<sup>6</sup> psi' },
        { math: 'P = <span class="fraction"><span>5,000 lbf</span><span>2</span></span> = 2,500 lbf' },
        { text: '(The applied load through the connecting rod is concentric to the bolt group; therefore, the load is evenly distributed between bolts.)' },
        { math: 'F<sub>p</sub> = A<sub>t</sub> &times; S<sub>p</sub> = 10,536 lbf' },
        { math: 'F<sub>i</sub> = 0.9 &times; 10,536 lbf = 9,482 lbf' },
        { html: 'Resultant bolt load (<i>NCEES PE Mechanical Reference Handbook:</i> Joints and Fasteners: Tension Connections-External Loads):' },
        { math: 'F<sub>b</sub> = F<sub>i</sub> + P &times; <span class="fraction"><span>K<sub>b</sub></span><span>(K<sub>b</sub> + K<sub>s</sub>)</span></span> = 9,760 lbf' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Joints and Fasteners > Tension Connections-External Loads'
    }
  ],
  components: [
    {
      id: '1701008', complexity: 'Medium',
      text: 'Which plan view representation accurately portrays the weld called out by the following weld symbol?',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 1 image.png',
      choices: [
        '<img class="choice-figure" src="Screenshots and Questions/Solutions/Mechanical Components & Assemblies/problem 1 answer A.png" alt="Plan-view weld representation A">',
        '<img class="choice-figure" src="Screenshots and Questions/Solutions/Mechanical Components & Assemblies/problem 1 answer B.png" alt="Plan-view weld representation B">',
        '<img class="choice-figure" src="Screenshots and Questions/Solutions/Mechanical Components & Assemblies/problem 1 answer C.png" alt="Plan-view weld representation C">',
        '<img class="choice-figure" src="Screenshots and Questions/Solutions/Mechanical Components & Assemblies/problem 1 answer D.png" alt="Plan-view weld representation D">'
      ], answer: 2,
      blocks: [
        { text: 'The weld symbol indicates that the weld bead should be 2 in long and should be spaced 6 in apart (from center of bead to center of bead).' }
      ],
      reference: ''
    },
    {
      id: '1701009', complexity: 'Medium',
      html: 'In vibration theory, the natural frequency is defined as<br><span class="math">&omega;<sub>n</sub> = ' + componentFractionRoot('<msub><mi>k</mi><mi>e</mi></msub>', '<msub><mi>m</mi><mi>e</mi></msub>') + '</span>.<br><br>Some situations may require using the damped frequency,<br><span class="math">&omega;<sub>d</sub> = &omega;<sub>n</sub>' + componentExpressionRoot('<mn>1</mn><mo>&minus;</mo><msup><mi>&xi;</mi><mn>2</mn></msup>') + '</span> where &xi; is the fraction of critical damping<br><span class="math">&xi; = <span class="fraction"><span>c<sub>e</sub></span><span>(c<sub>e</sub>)<sub>c</sub></span></span></span>.</span><br><br>If the mass, <i>m</i><sub>e</sub>, is quadrupled (increased by 4), which factor best describes the effect of the increased mass on the ratio of <span class="math"><span class="fraction"><span>&omega;<sub>d</sub></span><span>&omega;<sub>n</sub></span></span></span>?',
      choices: ['1', '<span class="fraction"><span>1</span><span>2</span></span>', '4', '2'], answer: 0,
      blocks: [
        { text: 'Both the natural and damped frequencies would be halved. The requested ratio can be simplified as follows:' },
        { math: '<span class="fraction"><span>&omega;<sub>d</sub></span><span>&omega;<sub>n</sub></span></span> = <span class="fraction"><span>&omega;<sub>n</sub>' + componentExpressionRoot('<mn>1</mn><mo>&minus;</mo><msup><mi>&xi;</mi><mn>2</mn></msup>') + '</span><span>&omega;<sub>n</sub></span></span> = ' + componentExpressionRoot('<mn>1</mn><mo>&minus;</mo><msup><mi>&xi;</mi><mn>2</mn></msup>') },
        { text: 'From this relationship, the ratio is not dependent on the mass of the system. The effect of quadrupling the mass will not impact the ratio of damped frequency compared to natural frequency. Thus, A is the correct answer.' }
      ],
      reference: 'NCEES PE Mechanical Handbook, 1.8, Section 2.15 Vibration/dynamic analysis.'
    },
    {
      id: '1701039', complexity: 'Easy',
      text: 'What is the purpose of a check valve in a hydraulic system?',
      choices: ['To prevent fluid pressure from rising and causing damage to the system', 'To allow an operator to monitor the fluid in the system', 'To prevent backflow of the fluid in the system', 'To manually turn on and off branches of a system'], answer: 2,
      blocks: [
        { text: 'A check valve allows fluid to flow in one direction and does not allow it to flow in the opposite direction. It is commonly used to prevent a higher-pressure line from flowing back into a lower-pressure line, preventing unnecessary strain on a pump.' }
      ],
      reference: ''
    },
    {
      id: '1702002', complexity: 'Hard',
      html: 'A mass of 0.15 lb<sub>m</sub> is resting on a spring. The spring is depressed from its equilibrium position by 18 in and has a spring constant of 34 lbf/ft. Once the spring is released, the mass is catapulted straight up into the air. At the apex of the trajectory, a projectile is launched out of the side (parallel to the ground) at a velocity of 8 ft/s. How far from the spring will the projectile land?',
      choices: ['32 ft', '12 ft', '4 ft', '9 ft'], answer: 0,
      blocks: [
        { text: 'The potential energy of the depressed spring will be converted into the kinetic energy of the mass as it leaves the spring, which will then be converted back to potential energy when the mass reaches the apex.' },
        { math: 'PE<sub>spring</sub> = <span class="fraction"><span>1</span><span>2</span></span>kx<sup>2</sup> = <span class="fraction"><span>1</span><span>2</span></span>(34 lbf/ft)(1.5ft)<sup>2</sup> = 38.3 lb<sub>f</sub> &times; ft' },
        { math: 'PE<sub>spring</sub> = KE<sub>mass</sub> = PE<sub>mass</sub> = <span class="fraction"><span>mgh</span><span>g<sub>c</sub></span></span> = <span class="fraction"><span>(0.15 lbm)(32.2 ft/s<sup>2</sup>)h</span><span><span class="fraction"><span>32.2 lbm ft</span><span>lbf s<sup>2</sup></span></span></span></span> = 38.3 lbf &times; ft &there4; 255 ft = h' },
        { text: 'Since the projectile is launched from a height of 255 ft, the time it takes to fall to the ground is given by:' },
        { math: 't = ' + componentFractionRoot('<mn>2</mn><mi>h</mi>', '<mi>g</mi>') + ' = ' + componentFractionRoot('<mrow><mn>2</mn><mo>(</mo><mn>255</mn><mtext> ft</mtext><mo>)</mo></mrow>', '<mrow><mn>32.2</mn><mtext> ft/s</mtext></mrow>') + ' = 4.0 s' },
        { text: "The distance from the spring is calculated by using the projectile's initial velocity." },
        { math: 'R = v<sub>o</sub>t = 32 ft' }
      ],
      reference: ''
    },
    {
      id: '1702004', complexity: 'Medium',
      text: 'A solid vertical cylinder is fixed at one end and free to rotate at the other end. At the free end of the vertical cylinder is a 3-m horizontal rod that weighs 2.2 kg and is attached to the vertical cylinder at the midpoint of the rod. The horizontal rod has a 6 N force couple acting on the ends (that is, a 6 N force pushes the left side into the page and a 6 N force pulls the right side out of the page), which causes the free end of the vertical cylinder to rotate by 50°. If the force couple is removed, what is the undamped natural frequency of the system?',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 5 image.png',
      choices: ['5 rad/s', '1.5 rad/s', '3.5 rad/s', '15 rad/s'], answer: 2,
      blocks: [
        { text: 'The force couple produces an equivalent torque.' },
        { math: 'T = Fd = (6 N)(3 m) = 18 N &times; m' },
        { text: 'Since the system is a torsional spring, T = k&theta;, rearranging yields:' },
        { math: 'k = <span class="fraction"><span>T</span><span>&theta;</span></span> = 20.6 <span class="fraction"><span>N &times; m</span><span>rad</span></span>' },
        { text: 'The natural undamped frequency is defined as:' },
        { math: '&omega;<sub>n</sub> = ' + componentFractionRoot('<mi>k</mi>', '<mi>I</mi>') + ' where I = <span class="fraction"><span>ml<sup>2</sup></span><span>12</span></span> for a rod about the mid&ndash;point. Thus I = 1.7 kg &times; m<sup>2</sup>.' },
        { math: '&omega;<sub>n</sub> = 3.5 rad/s' }
      ],
      reference: 'NCEES PE Mechanical Handbook-Chapter 2: Machine Design and Material. Section 15.2 Torsional Vibration'
    },
    {
      id: '1702008', complexity: 'Hard',
      text: 'A brick with a mass of 1.5 kg is loaded onto a frictionless surface with an incline of 35 degrees above horizontal. The block is pushed into a spring with k = 160 kN/m. The spring is compressed by 5 in and then released. What is the initial speed of the block as it leaves the incline and the horizontal distance it travels from the edge of the incline? Assume the spring is in its fully extended position as the block reaches the end of the incline.',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 6 image.png',
      choices: ['16.33 m/sec; 25.54 m', '41.48 m/sec; 25.54 m', '16.33 m/sec; 164.80 m', '41.48 m/sec; 164.80 m'], answer: 3,
      blocks: [
        { text: 'Begin by calculating spring energy and converting to kinetic energy to obtain initial velocity.' },
        { html: 'Refer to NCEES <i>PE Mechanical Reference Handbook:</i> Mechanical Components: Springs.' },
        { html: 'Refer to NCEES <i>PE Mechanical Reference Handbook:</i> Principles of work and Energy: Kinetic Energy.' },
        { math: 'U = k<span class="fraction"><span>x<sup>2</sup></span><span>2</span></span>' },
        { math: 'U = (160 <span class="fraction"><span>kN</span><span>m</span></span> &times; <span class="fraction"><span>1,000 N</span><span>1 kN</span></span>)<span class="fraction"><span>(5 in &times; <span class="fraction"><span>0.0254 m</span><span>1 in</span></span>)<sup>2</sup></span><span>2</span></span>' },
        { math: 'U = 1,290.32 J' },
        { math: 'U = KE' },
        { math: 'KE = <span class="fraction"><span>1</span><span>2</span></span>mv<sup>2</sup>' },
        { math: '1,290.32J = <span class="fraction"><span>1</span><span>2</span></span> &times; 1.5 kg &times; v<sup>2</sup>' },
        { math: 'v = 41.48 <span class="fraction"><span>m</span><span>sec</span></span>' },
        { text: 'Now use projectile motion equation for Vy to determine time t.' },
        { text: 'We know that initial vertical velocity up is equal to final vertical velocity down. With this t can be determined from the Vy equation.' },
        { html: 'Refer to NCEES <i>PE Mechanical Reference Handbook:</i> Laws of Motion: Projectile Motion.' },
        { math: 'v<sub>y</sub> = &minus;gt + v<sub>o</sub>sin(&theta;)' },
        { math: 'v<sub>y</sub> = &minus;v<sub>o</sub>sin(&theta;)' },
        { math: '&minus;v<sub>o</sub>sin(&theta;) = &minus;gt + v<sub>o</sub>sin(&theta;)' },
        { math: '&minus;2v<sub>o</sub>sin(&theta;) = &minus;gt' },
        { math: '2v<sub>o</sub>sin(&theta;) = gt' },
        { math: 't = <span class="fraction"><span>2v<sub>o</sub>sin(&theta;)</span><span>g</span></span>' },
        { math: 't = <span class="fraction"><span>2 &times; 41.48 <span class="fraction"><span>m</span><span>sec</span></span> &times; sin(35°)</span><span>9.81 <span class="fraction"><span>m</span><span>sec<sup>2</sup></span></span></span></span>' },
        { math: 't = 4.85 sec' },
        { text: 'Use t in the projectile equation for horizontal position to determine horizontal distance traveled.' },
        { math: 'x = v<sub>o</sub>cos(&theta;)t' },
        { math: 'x = 41.48 <span class="fraction"><span>m</span><span>sec</span></span> &times; cos(35°) &times; 4.85 sec' },
        { math: 'x = 164.8 m' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook &gt; Laws of Motion &gt; Projectile Motion<br><br>NCEES PE Mechanical Reference Handbook &gt; Principles of work and Energy &gt; Kinetic Energy<br><br>NCEES PE Mechanical Reference Handbook &gt; Mechanical Components &gt; Springs'
    },
    {
      id: '1702010', complexity: 'Hard',
      text: 'A railcar with mass 82,000 kg is sitting on a flat track. Another railcar (mass 100,000 kg) rolls into it at 10 kph. the rail cars couple and continue down the track until they hit a stop. If the stop compresses 40 cm to bring the rail cars to a complete stop, the spring factor K of the stop is most nearly which of the following? Assume no energy lost to friction or rolling resistance.',
      choices: ['2,600 N/m', '2,600 kN/m', '17,142 N/m', '17,142 kN/m'], answer: 1,
      blocks: [
        { text: 'First calculate the speed of the coupled rail cars after collision.' },
        { html: 'Refer to NCEES <i>PE Mechanical Reference Handbook:</i> Principles of Work and Energy: Coefficient of Restitution.' },
        { math: 'm<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub> = m<sub>1</sub>v&prime;<sub>1</sub> + m<sub>2</sub>v&prime;<sub>2</sub>' },
        { math: 'm<sub>1</sub> = 82,000kg' },
        { math: 'm<sub>2</sub> = 100,000kg' },
        { math: 'v<sub>2</sub> = 10kph' },
        { math: 'v&prime;<sub>1</sub> = v&prime;<sub>2</sub>' },
        { text: 'Since cars will be couple, m1 and m2 can be combined and the equation will simplify' },
        { math: 'm<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub> = m<sub>1</sub>v&prime;<sub>1</sub> + m<sub>2</sub>v&prime;<sub>2</sub>' },
        { math: 'm<sub>1</sub>v<sub>1</sub> + m<sub>2</sub>v<sub>2</sub> = v&prime;<sub>1</sub>(m<sub>1</sub> + m<sub>2</sub>)' },
        { math: '100,000kg &times; 10kph = v&prime;<sub>1</sub> &times; (100,000kg + 82,000kg)' },
        { math: 'v&prime;<sub>1</sub> = 5.49 kph' },
        { math: 'v&prime;<sub>1</sub> = 5.49 <span class="fraction"><span>km</span><span>hr</span></span> &times; <span class="fraction"><span>1 hr</span><span>3,600 sec</span></span> &times; <span class="fraction"><span>1,000 m</span><span>1 km</span></span> = 1.53 <span class="fraction"><span>m</span><span>sec</span></span>' },
        { text: 'Calculate Kinetic energy of the railcars.' },
        { html: 'Refer to NCEES <i>PE Mechanical Reference Handbook:</i> Principles of Work and Energy: Kinetic Energy' },
        { math: 'KE = <span class="fraction"><span>1</span><span>2</span></span>mv<sup>2</sup>' },
        { math: 'KE = <span class="fraction"><span>1</span><span>2</span></span> &times; 182,000 kg &times; (1.53 <span class="fraction"><span>m</span><span>sec</span></span>)<sup>2</sup>' },
        { math: 'KE = 213,021.9 J' },
        { text: 'Use the known energy to determine K value of spring based on given deflection of 40 cm' },
        { html: 'Refer to NCEES <i>PE Mechanical Reference Handbook:</i> Mechanical Components: Springs' },
        { math: 'U = k<span class="fraction"><span>x<sup>2</sup></span><span>2</span></span>' },
        { math: 'KE = U' },
        { math: '213,021.9J = k<span class="fraction"><span>(40 cm &times; <span class="fraction"><span>1 m</span><span>100 cm</span></span>)<sup>2</sup></span><span>2</span></span>' },
        { math: 'k = 2,662,773.75 <span class="fraction"><span>N</span><span>m</span></span>' },
        { math: 'k = 2,662,773.75 <span class="fraction"><span>N</span><span>m</span></span> &times; <span class="fraction"><span>1 kN</span><span>1,000 N</span></span> = 2662.77 <span class="fraction"><span>kN</span><span>m</span></span> = 2,600 <span class="fraction"><span>kN</span><span>m</span></span>' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook &gt; Mechanical Components &gt; Springs<br><br>NCEES PE Mechanical Reference Handbook &gt; Principles of Work and Energy &gt; Kinetic Energy<br><br>NCEES PE Mechanical Reference Handbook &gt; Principles of Work and Energy &gt; Coefficient of Restitution.'
    },
    {
      id: '1702027', complexity: 'Medium',
      html: 'What are R<sub>1</sub> and R<sub>2</sub> for the above system given that F = 10000 lbf and all dimensions are given in feet?',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 8 image.png',
      choices: ['R<sub>1</sub> = 5000, R<sub>2</sub> = 5000 lbf', 'R<sub>1</sub> = 5,856 lbf, R<sub>2</sub> = 4,144 lbf', 'R<sub>1</sub> = 6,337 lbf, R<sub>2</sub> = 3,663 lbf', 'R<sub>1</sub> = 7071 lbf, R<sub>2</sub> = 8,660 lbf'], answer: 2,
      blocks: [
        { text: 'Determine the length of the adjacent side of the 45° right triangle.' },
        { math: 'cos &theta; = <span class="fraction"><span>a</span><span>h</span></span>' },
        { math: 'a = cos &theta; &times; h = 0.707 &times; 5.18 ft = 3.663 ft' },
        { html: 'Determine R<sub>2</sub> by summing moments around R<sub>1</sub>.' },
        { math: '∑M<sub>R<sub>1</sub></sub> = 3.663 ft &times; F &minus; 10ft &times; R<sub>2</sub>' },
        { math: 'R<sub>2</sub> = <span class="fraction"><span>3.663ft &times; 10,000 lbf</span><span>10 ft</span></span> = 3,663 lbf' },
        { html: 'Determine R<sub>1</sub> by subtracting R<sub>2</sub> from F.' },
        { math: 'R<sub>1</sub> = F &minus; R<sub>2</sub> = 10,000 lbf &minus; 3,663 lbf = 6,337 lbf' }
      ],
      reference: ''
    },
    {
      id: '1702028', complexity: 'Medium',
      text: 'What is the moment on the beam at point x given that w = 200 lbf/ft, x = 3 ft, and all dimensions are given in feet?',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 9 image.png',
      choices: ['900 ft-lbf', '-2,700 ft-lbf', '500 ft-lbf', '-225 ft-lbf'], answer: 0,
      blocks: [
        { math: 'M<sub>x</sub> = (wx)(3L / 8 &minus; x/2)' },
        { math: 'M<sub>x</sub> = (200 <span class="fraction"><span>lbf</span><span>ft</span></span> &times; 3 ft)(<span class="fraction"><span>3 &times; 8 ft</span><span>8</span></span> &minus; <span class="fraction"><span>3</span><span>2</span></span>) = 900 ft&ndash;lbf' }
      ],
      reference: 'NCEES PE Mechanical Engineering Reference Handbook V2.0&gt; Chapter 2 &gt; Machine Design and Materials &gt; Beams &gt;2.11.6.1 Stress in Beams'
    },
    {
      id: '1702029', complexity: 'Medium',
      text: 'What is the load on member BC? Assume there is no moment fixity between members AB, AC, and BC, F = 3000 lbf, and all dimensions are given in feet.',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 10 image.png',
      choices: ['1,500 lbf', '8,933 lbf', '6,700 lbf', '5,018 lbf'], answer: 1,
      blocks: [
        { text: 'Determine the load at point C by summing the moments with respect to point A. There is a force in opposite direction of F which is noted as Cy.' },
        { math: '∑M<sub>AY</sub> = 3 ft &times; C<sub>y</sub> &minus; 4 ft &times; 3,000 lbf = 0' },
        { math: 'C<sub>y</sub> = <span class="fraction"><span>4 ft &times; 3,000 lbf</span><span>3 ft</span></span> = 4,000 lbf' },
        { text: 'Determine the load multiplication factor due to the angle.' },
        { math: '<span class="fraction"><span>3.35 ft</span><span>1.50 ft</span></span> = 2.23' },
        { text: 'Determine the load in BC.' },
        { text: 'Summation of the forces in "y" direction, the angle of triangle ABC can be obtained by using:' },
        { image: 'Screenshots and Questions/Solutions/Mechanical Components & Assemblies/problem 10 image solution.gif', alt: 'Forces acting at point C' },
        { math: 'sin &empty; = <span class="fraction"><span>1.5</span><span>3.35</span></span>' },
        { math: '∑F<sub>y</sub> = 0' },
        { math: 'Cy = BC sin &empty;' },
        { math: '4,000 * <span class="fraction"><span>3.35</span><span>1.5</span></span> = BC' },
        { math: 'BC = 8,933 lbf' }
      ],
      reference: ''
    },
    {
      id: '1704004', complexity: 'Easy',
      text: 'When determining the distribution of stress in curved flexural members, which of the following statements is true?',
      choices: ['It is assumed that the modulus of elasticity is the same in both tension and compression under bending.', 'The neutral axis for a circular cross section under bending is not located through the centroid.', 'The neutral axis is determined as the plane in which there is zero stress when acted upon by a bending moment.', 'All of the above'], answer: 3,
      blocks: [
        { text: 'All are true statements' }
      ],
      reference: ''
    },
    {
      id: '1704007', complexity: 'Medium',
      text: 'A beam experiences some unknown loading. Which conditions would most likely result in the following shear stress diagram?',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 12 image.png',
      choices: ['A beam supported by two rollers that experiences a distributed load.', 'A cantilever beam that experiences a uniformly varying distributed load.', 'A cantilever beam that experiences a single point load.', 'A cantilever beam that experiences a single point load and a distributed load.'], answer: 3,
      blocks: [
        { text: 'A. Two rollers indicate the shear force would need to jump more positive a second time after x = 0. This option is incorrect.' },
        { text: 'B. If the load is uniformly varying, we would see a section that has a constant changing slope, which does not occur on this chart. This option is incorrect.' },
        { text: 'C. This would not account for the final segment decreasing at a constant slope. This option is incorrect.' },
        { text: 'D. These conditions satisfy the shear force diagram. A single point load produces a flat linear slope, and a uniformly distributed load provides a linearly decreasing slope. Both are present in the provided diagram. Correct.' }
      ],
      reference: ''
    },
    {
      id: '1704008', complexity: 'Medium',
      html: 'A cantilever cylindrical beam of length <i>L</i> and diameter <i>d</i> is subjected to a downward point load <i>F</i> at the end of the beam. The moment of inertia for the circle is <i>I</i>. From the options below, select which one corresponds to the correct stress at the location corresponding to the labeled cross section taken at the wall.',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 13 image.png',
      choices: [
        'Normal stress at (i) is |<span class="fraction"><span>FLd</span><span>I</span></span>|',
        'Shear stress at (ii) is &minus;|<span class="fraction"><span>4F</span><span>3 &times; &pi;d<sup>2</sup></span></span>|',
        'Normal stress at (iii) is |FL|',
        'Normal stress at (iv) is &minus;|<span class="fraction"><span>FLd</span><span>2I</span></span>|'
      ], answer: 3,
      blocks: [
        { text: 'The moment created by F on the cross section is F × L and produces a maximum tensile normal stress on the top outer radius and maximum compressive normal stress on the bottom outer radius.' },
        { math: '&sigma;<sub>i</sub> = &minus;&sigma;<sub>iv</sub> = <span class="fraction"><span>FL(<span class="fraction"><span>d</span><span>2</span></span>)</span><span>I</span></span>' },
        { text: 'This makes A incorrect because it lacks a factor of 2, and D correct because it contains a factor of 2.' },
        { html: 'Shear stress is maximum along the center dotted line and oriented downward at both (ii) and (iii). For a circular cross section, &tau; = 4F / (3 &times; &pi;d<sup>2</sup>), the answer in B would be correct if the cross section was rectangular.' }
      ],
      reference: ''
    },
    {
      id: '1704011', complexity: 'Hard',
      html: 'A hollow steel cylinder has an outside diameter of 10 in. and a wall thickness of 1 in. A rigid rod with a diameter of 7.9 in. is positioned concentrically inside the cylinder and carries no axial load.<br><br>The cylinder is subjected to a uniform axial tensile force. Assuming linear-elastic behavior, determine the minimum magnitude of the tensile force required to reduce the cylinder&rsquo;s inside diameter from 8.0 in. to 7.9 in., causing the inner surface of the cylinder to contact the rigid rod.<br><br>Use the following material properties for steel:<br><br><i>E</i> = 29 &times; 10<sup>6</sup> psi<br><i>&nu;</i> = 0.3<br><br>Neglect local contact deformation and assume the cylinder remains uniformly stressed.',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 14 image.png',
      choices: ['1.88&times;10<sup>5</sup> kips', '2.12&times;10<sup>5</sup> kips', '2.38&times;10<sup>5</sup> kips', '2.73&times;10<sup>5</sup> kips'], answer: 3,
      blocks: [
        { text: 'In order to solve this problem, take a cross section through the center axis and examine it along the x and y plane only:' },
        { image: 'Screenshots and Questions/Solutions/Mechanical Components & Assemblies/problem 14 image solution.png', alt: 'Cylinder center-axis cross section' },
        { html: 'Now analyze the top cut of the cylinder as if it is a single beam. As the force P compresses the part, there will be a change in length and a change in thickness. Using the assumption that the beam will increase in thickness equally along the center of it, the change in inner radius of the cylinder needs to shrink by (R<sub>inner</sub> &minus; R<sub>rod</sub>) and the thickness of the beam will need to increase double that amount because it expands evenly on both sides (&Delta;t = 2(R<sub>inner</sub> &minus; R<sub>rod</sub>)).' },
        { text: 'Using Hooke’s Law, the following relation can be made below:' },
        { math: '&epsilon;<sub>y</sub> = &Delta;t/t = &minus;&nu;&epsilon;<sub>x</sub> where &epsilon;<sub>x</sub> = <span class="fraction"><span><span class="fraction"><span>P</span><span>A<sub>cyl</sub></span></span></span><span>E</span></span>' },
        { html: 'From “Typical Material Properties” in the NCEES <i>PE Mechanical Reference Handbook:</i> Properties of Materials: Typical Material Properties, the modulus of elasticity and Poisson&rsquo;s ratio for steel are 29 Mpsi and 0.3, respectively.' },
        { math: 't = 1 in, &Delta;t = 2*(<span class="fraction"><span>8</span><span>2</span></span>) &minus; (<span class="fraction"><span>7.9</span><span>2</span></span>) = 0.1 in, A<sub>cyl</sub> = &pi;(R<sub>outer</sub><sup>2</sup> &minus; R<sub>inner</sub><sup>2</sup>) = 28.27 in<sup>2</sup>' },
        { text: 'Solve for P' },
        { math: 'P = (<span class="fraction"><span>&Delta;t</span><span>t</span></span>) &times; <span class="fraction"><span>EA<sub>cyl</sub></span><span>&minus;&nu;</span></span> = (<span class="fraction"><span>0.1 in</span><span>1 in</span></span>)(<span class="fraction"><span>29&times;10<sup>6</sup>psi &times; 28.27in<sup>2</sup></span><span>&minus;0.3</span></span>) = &minus;2.73&times;10<sup>8</sup> lb<sub>f</sub> or &minus;2.73&times;10<sup>5</sup> kips.' },
        { text: 'Note: the question asks for the magnitude, so the negative sign is NOT required. The negative sign implies the force is compressive in nature' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook &gt; Properties of Materials &gt; Typical Material Properties'
    },
    {
      id: '1704015', complexity: 'Medium',
      text: 'What is the maximum bending stress in the following beam with height of 6 in and thickness of 1 in?',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 15 image.png',
      choices: ['16 psi', '32 psi', '48 psi', '576 psi'], answer: 0,
      blocks: [
        { text: 'Concept: determine reaction forces, construct V-M diagrams' },
        { math: '∑M<sub>left</sub><sup>ccw</sup> = &minus;4 ft &times; 5 lbf + 6 ft &times; 5 lbf + 10 &times; lbf + 10 ft &times; F<sub>right</sub> = 0 &rarr; F<sub>right</sub> = &minus;2 lbf' },
        { math: '∑F<sub>&uarr;</sub> = F<sub>left</sub> &minus; 5 lbf + 5 lbf + F<sub>right</sub> = 0 &rarr; F<sub>left</sub> = 2 lbf' },
        { image: 'Screenshots and Questions/Solutions/Mechanical Components & Assemblies/problem 15 image solution.png', alt: 'Shear and moment diagrams' },
        { math: 'I = <span class="fraction"><span>bh<sup>3</sup></span><span>12</span></span> = <span class="fraction"><span>1in &times; (6 in)<sup>3</sup></span><span>12</span></span> = 18 in<sup>4</sup>' },
        { math: 'c = <span class="fraction"><span>h</span><span>2</span></span> = 3 in' },
        { math: '&sigma; = <span class="fraction"><span>Mc</span><span>I</span></span> = <span class="fraction"><span>8 lb ft &times; 3 in</span><span>18 in<sup>4</sup></span></span> &times; (<span class="fraction"><span>12 in</span><span>ft</span></span>) = 16 psi' },
        { text: 'The moment used in the stress equation is the maximum moment that is found in the moment diagram.' }
      ],
      reference: ''
    },
    {
      id: '1704017', complexity: 'Hard',
      html: 'A steel beam is loaded as illustrated below. The deflection at the tip is 0.25 in down. The beam section is 0.75 in &times; 0.75 in. The modulus of elasticity is 30 &times; 10<sup>6</sup> psi. What is most nearly the max stress on the beam?',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 16 image.png',
      choices: ['34,000 psi', '40,000 psi', '49,000 psi', '60,000 psi'], answer: 1,
      blocks: [
        { text: 'Given: Tip deflection y_tip = 0.25 in (down)' },
        { text: 'Beam cross section = 0.75 in by 0.75 in' },
        { text: 'Modulus of elasticity E = 30 × 10^6 psi' },
        { text: 'Total length from left support to tip = 18 in' },
        { text: 'Distance between supports = 6 in' },
        { text: 'Let: a = distance from right support to tip = 12 in' },
        { text: 'b = distance between supports = 6 in' },
        { text: 'Step 1: Area moment of inertia' },
        { math: 'I = bh<sup>3</sup> / 12 = 0.75 &times; (0.75)<sup>3</sup> / 12 | &asymp; 0.0264 in<sup>4</sup>' },
        { text: 'Step 2: Use tip deflection to find load P' },
        { text: 'For this specific beam configuration (two supports with an overhang and a load P at the free end), the tip deflection can be written as:' },
        { math: 'y<sub>tip</sub> = (P a<sup>2</sup> / (3 E I)) &times; (a + b)' },
        { text: 'Solve for P:' },
        { math: 'P = y<sub>tip</sub> &times; 3 E I / (a<sup>2</sup> (a + b))' },
        { text: 'Substitute values:' },
        { math: 'P = 0.25 &times; 3 &times; (30 &times; 10<sup>6</sup>) &times; 0.0264 / (12<sup>2</sup> &times; (12 + 6))' },
        { text: 'Compute:' },
        { math: 'Numerator &asymp; 0.25 &times; 3 &times; 30 &times; 10<sup>6</sup> &times; 0.0264' },
        { math: 'Denominator = 12<sup>2</sup> &times; 18 = 144 &times; 18 = 2592' },
        { math: 'P &asymp; 229 lb' },
        { text: 'Step 3: Maximum bending moment' },
        { text: 'The maximum moment occurs at the right support under the overhang:' },
        { math: 'M<sub>max</sub> = P &times; a' },
        { math: 'M<sub>max</sub> = 229 &times; 12' },
        { math: 'M<sub>max</sub> &asymp; 2750 lb&middot;in' },
        { text: 'Step 4: Maximum bending stress' },
        { text: 'For a rectangular section, c = half the depth = 0.75 / 2 = 0.375 in' },
        { math: '&sigma;<sub>max</sub> = M<sub>max</sub> c / I' },
        { math: '&sigma;<sub>max</sub> = 2750 &times; 0.375 / 0.0264 &sigma;<sub>max</sub> &asymp; 39,063 psi &asymp; 40,000 psi' },
        { text: 'Correct answer: B. 40,000 psi' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook &gt; Stress Analysis &gt; Beams'
    },
    {
      id: '1704019', complexity: 'Easy',
      text: 'A beam is loaded as shown below. The cross section of the beam at R1 is also shown. Which point or points most likely indicate the location with the highest shear stress?',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 17 image.jpg',
      choices: ['I', 'II', 'III', 'I and III'], answer: 1,
      blocks: [
        { text: 'Point I has high tensile stress.' },
        { text: 'Point II has high shear stress.' },
        { text: 'Point III has high compressive stress.' }
      ],
      reference: ''
    },
    {
      id: '1704020', complexity: 'Medium',
      html: 'Determine the maximum bending stress in the above beam. The section modulus of the beam is 54.6 in<sup>3</sup>, and P = 10,000 lbf. <b>Dimensions are given in feet.</b>',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 18 image.png',
      choices: ['6,593 psi', '549 psi', '183 psi', '2,198 psi'], answer: 0,
      blocks: [
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook:</i> Stress Analysis: Beams.' },
        { text: 'Determine the moment on the beam.' },
        { math: 'M = Pa = 10,000 lbf &times; 3 ft = 30,000 ft &times; lbf' },
        { text: 'Since the section modulus of the beam is given but not the moment of inertia, use a modified version of the bending stress equation as shown below.' },
        { math: '&sigma; = <span class="fraction"><span>Mc</span><span>I</span></span>' },
        { math: 'S = <span class="fraction"><span>I</span><span>c</span></span>' },
        { math: '&sigma; = <span class="fraction"><span>M</span><span>S</span></span> = <span class="fraction"><span>30,000 ft &times; lbf</span><span>54.6 in<sup>3</sup></span></span> &times; <span class="fraction"><span>12 in</span><span>1 ft</span></span> = 6,593 psi' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook &gt; Stress Analysis &gt; Beams'
    },
    {
      id: '1704029', complexity: 'Medium',
      html: 'A steel diving board that is 2 ft wide is shown below. If an individual weighing 150 lb stands on the very edge of the board and the end of the board sags 8.5 in below its unbent position, the area moment of inertia of the diving board cross section is most nearly:',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 19 image.png',
      choices: ['1.125 in<sup>4</sup>', '2.125 in<sup>4</sup>', '3.5 in<sup>4</sup>', '4 in<sup>4</sup>'], answer: 0,
      blocks: [
        { text: 'Find the needed equation for beam deflection. This diving board is a simple beam with overhung load.' },
        { text: 'Section 2.11.6.1 stresses in beams, simple beam with overhung load, p. 159' },
        { text: 'Use the deflection equation for the tip to work backward to area moment of inertia:' },
        { math: 'y<sub>tip</sub> = (<span class="fraction"><span>pa<sup>2</sup></span><span>3EI</span></span>)(a+b)' },
        { html: 'Convert <i>a</i> and <i>b</i> into inches from feet:' },
        { math: '13ft &times; <span class="fraction"><span>12 in</span><span>1 ft</span></span> = 156 in' },
        { math: '6 ft &times; <span class="fraction"><span>12 in</span><span>1 ft</span></span> = 72 in' },
        { text: 'Find modulus of elasticity for steel:' },
        { text: 'p. 32 section 1.2.12' },
        { math: 'E = 29,000,000 psi' },
        { text: 'Plug all values into the equation and solve for I:' },
        { math: 'y<sub>tip</sub> = (<span class="fraction"><span>pa<sup>2</sup></span><span>3EI</span></span>)(a+b)' },
        { math: '8.5 in = (<span class="fraction"><span>150 lbf(156 in)<sup>2</sup></span><span>3(29,000,000 psi)I</span></span>)(156 in + 72 in)' },
        { math: 'I = = 1.125 in<sup>4</sup>' }
      ],
      reference: ''
    },
    {
      id: '1704037', complexity: 'Hard',
      text: 'A pressurized cylinder made of Al2014-T6 is pulled axially in tension. The cylinder has an outer diameter of 6 in, a thickness of 0.25 in, and is pressurized to 800 psi. Using the distortion energy theory, what is the critical value of tension expected to cause plastic deformation of the cylinder?',
      choices: ['268 kips', '104 kips', '214 kips', '182 kips'], answer: 0,
      blocks: [
        { text: 'Given:' },
        { html: '&bull; Material: Al 2014-T6 &rarr; tensile yield strength Sy = 60 ksi' },
        { html: '&bull; Outer diameter: Do = 6 in' },
        { html: '&bull; Wall thickness: t = 0.25 in' },
        { html: '&bull; Internal pressure: p = 800 psi = 0.8 ksi' },
        { text: 'Inner diameter:' },
        { math: 'Di = Do &minus; 2t = 6 &minus; 2(0.25) = 5.5 in' },
        { text: 'Mean radius:' },
        { math: 'rm = (Do/2 + Di/2) / 2 = (3.0 + 2.75) / 2 = 2.875 in' },
        { text: '1. Stresses from internal pressure' },
        { text: 'For a thin-walled cylinder:' },
        { html: '&bull; Hoop (circumferential) stress &sigma;t = p rm / t &sigma;t = (0.8 ksi)(2.875 in) / 0.25 in = 9.2 ksi' },
        { html: '&bull; Longitudinal stress from pressure &sigma;l,p = p rm / (2t) &sigma;l,p = (0.8 ksi)(2.875 in) / (2 &times; 0.25 in) = 4.6 ksi' },
        { text: '2. Longitudinal stress from axial tension' },
        { text: 'Let F be the axial tensile load. The cross-sectional area of the cylinder wall is:' },
        { math: 'A = (&pi;/4)(Do<sup>2</sup> &minus; Di<sup>2</sup>) A = (&pi;/4)(6<sup>2</sup> &minus; 5.5<sup>2</sup>) A = (&pi;/4)(36 &minus; 30.25) A = (&pi;/4)(5.75) &asymp; 4.52 in<sup>2</sup>' },
        { text: 'Additional longitudinal stress from axial load:' },
        { math: '&sigma;l,t = F / A' },
        { text: 'Total longitudinal principal stress:' },
        { math: '&sigma;2 = &sigma;l = &sigma;l,p + &sigma;l,t = 4.6 ksi + F/A' },
        { text: 'Hoop stress is the other principal stress:' },
        { math: '&sigma;1 = &sigma;t = 9.2 ksi' },
        { text: '3. Distortion energy (von Mises) criterion' },
        { text: 'For a biaxial state with principal stresses σ1 and σ2:' },
        { math: '&sigma;vm<sup>2</sup> = &sigma;1<sup>2</sup> &minus; &sigma;1&sigma;2 + &sigma;2<sup>2</sup> = Sy<sup>2</sup>' },
        { text: 'Substitute:' },
        { math: '&sigma;1 = 9.2 ksi &sigma;2 = 4.6 ksi + F/A' },
        { math: '(9.2)<sup>2</sup> &minus; 9.2(4.6 + F/A) + (4.6 + F/A)<sup>2</sup> = (60)<sup>2</sup>' },
        { text: 'Let X = F/A. Then:' },
        { math: '(9.2)<sup>2</sup> &minus; 9.2(4.6 + X) + (4.6 + X)<sup>2</sup> = 60<sup>2</sup>' },
        { text: 'Compute:' },
        { math: '9.2<sup>2</sup> = 84.64 &minus; 9.2(4.6 + X) = &minus;42.32 &minus; 9.2X (4.6 + X)<sup>2</sup> = 4.6<sup>2</sup> + 2(4.6)X + X<sup>2</sup> = 21.16 + 9.2X + X<sup>2</sup>' },
        { text: 'Sum:' },
        { math: '&sigma;vm<sup>2</sup> = 84.64 &minus; 42.32 &minus; 9.2X + 21.16 + 9.2X + X<sup>2</sup> &sigma;vm<sup>2</sup> = (84.64 &minus; 42.32 + 21.16) + X<sup>2</sup> &sigma;vm<sup>2</sup> &asymp; 63.48 + X<sup>2</sup> &asymp; 63.5 + X<sup>2</sup>' },
        { text: 'Set equal to Sy²:' },
        { math: '63.5 + X<sup>2</sup> = 60<sup>2</sup> = 3600' },
        { math: 'X<sup>2</sup> = 3600 &minus; 63.5 = 3536.5' },
        { math: 'X = F/A = ' + componentExpressionRoot('<mn>3536.5</mn>') + ' &asymp; 59.47 ksi' },
        { text: '4. Solve for the critical axial load F' },
        { math: 'F = (F/A) &middot; A = 59.47 ksi &times; 4.52 in<sup>2</sup> &asymp; 268 kips' },
        { text: 'Therefore, the critical axial tension that causes yielding by the distortion energy theory is:' },
        { math: 'F &asymp; 268 kips' },
        { text: 'Correct Option: A' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook v.2.0<br><br>&bull; Chapter 1 &ndash; Basic Engineering Practice &rarr; Material Properties (Tensile yield strength for Al 2014-T6)<br>&bull; Chapter 2 &ndash; Machine Design and Materials &rarr; Failure Theories (Distortion Energy / von Mises)<br>&bull; Chapter 2 &ndash; Machine Design and Materials &rarr; Thin-Walled Pressure Vessels (Hoop and Longitudinal Stress Equations)'
    },
    {
      id: '1704040', complexity: 'Hard',
      text: 'A 3/4-in thick plate is welded on each end as shown in the image below. A 700-lbf load is applied at B, in the Y direction. Some components need to pass through the plate at A, requiring a 0.5-in-diameter hole. What is most nearly the maximum normal stress (in psi) at A before the hole is drilled?',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 21 image.jpg',
      choices: ['22', '11', '311', '622'], answer: 1,
      blocks: [
        { image: 'Screenshots and Questions/Solutions/Mechanical Components & Assemblies/problem 21 image solution.jpg', alt: 'Fixed-beam force diagram' },
        { text: 'Using the Fixed Beam, concentrated load at any point, Page 158, when a>b. (The reference must be flipped to make the equations works for this application)' },
        { text: 'Beam sectional dimensions' },
        { math: 'Bb=3/4 in , H=4in' },
        { text: 'Load Location, follows the assigned letters in the NCEES PE Handbook, Fixed Beam, Page 156' },
        { math: 'a=12 in, b= 4 i, and l=16 in.' },
        { math: 'Therefore, the distance for point A is as follows: x<sub>A</sub> = l-(a+7)=16 in &minus; 11 in' },
        { math: 'x<sub>A</sub> = 5 in, I = <span class="fraction"><span>BbH<sup>3</sup></span><span>12</span></span> = .75 in &times; <span class="fraction"><span>(4 in)<sup>3</sup></span><span>12</span></span> = 4 in' },
        { math: 'R1 = <span class="fraction"><span>(P*b<sup>2</sup>)</span><span>l<sup>3</sup></span></span> &times; (l+2a) = <span class="fraction"><span>(700 *4<sup>2</sup>)</span><span>16<sup>3</sup></span></span>*(16+ 2*12) = 109.375 lbf' },
        { text: 'To get the normal stress, the moment at Point A must be found:' },
        { text: 'The following equation is derived from Fixed Beam: concentrated Load at any point table' },
        { math: 'M<sub>A</sub> = R1*x<sub>A</sub> &minus; <span class="fraction"><span>P*a*b<sup>2</sup></span><span>l<sup>2</sup></span></span> =109.375*5&minus;<span class="fraction"><span>700*12*4<sup>2</sup></span><span>16<sup>2</sup></span></span>' },
        { math: 'M<sub>A</sub> = 21.7 in&middot;lb' },
        { math: '&sigma;<sub>A</sub> = <span class="fraction"><span>M<sub>A</sub>y</span><span>I</span></span> = 21.9 in&middot;lb &times; <span class="fraction"><span><span class="fraction"><span>4 in</span><span>2</span></span></span><span>4 in<sup>4</sup></span></span> = 10.9 psi' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook v1.9 &gt; Mensuration of Areas and Volumes &gt; Relations of Mass and Space<br><br>NCEES PE Mechanical Reference Handbook v1.9 &gt; Mensuration of Areas and Volumes &gt; Relations of Mass and Space'
    },
    {
      id: '1705003', complexity: 'Medium',
      text: 'A 20-ft-long, simply supported beam deflects at the center of the beam by 2 in due to the weight of the beam alone. The roller supports are each located 1 ft away from the respective ends of the beam. What is the undamped natural frequency of this static beam?',
      choices: ['4 rad/s', '10 rad/s', '14 rad/s', '26 rad/s'], answer: 2,
      blocks: [
        { text: 'The undamped natural frequency can be determined from the static deflection of the beam as seen below:' },
        { math: '&omega;<sub>n</sub> = ' + componentFractionRoot('<mi>g</mi>', '<msub><mi>&delta;</mi><mi>ST</mi></msub>') },
        { text: 'The static deflection was given in the problem as 2 inches. Either the gravitational constant or static deflection need to be converted so that the length unit is entirely inches or feet.' },
        { math: 'g = 32.2 ft&ndash;lbm/lbf&ndash;s<sup>2</sup>, &delta;<sub>ST</sub> = 2 in / 12(in/ft) = 0.167 ft' },
        { math: '&omega;<sub>n</sub> = ' + componentFractionRoot('<mn>32.2</mn>', '<mn>0.167</mn>') + ' = 13.9 rad/s' }
      ],
      reference: 'NCEES Mechanical Engineering Handbook V2.0&gt; Chapter 2, Machine Design and Materials &gt; 2.15 vibration/Dynamic Analysis&gt;2.15.1 Free Vibration'
    },
    {
      id: '1705004', complexity: 'Easy',
      text: 'A system begins to vibrate after an initial disturbing force is applied and then removed from the system. The system with mass m has an equivalent damping constant c and an equivalent spring constant k. What is a typical form for the equation of motion described in this situation?',
      choices: ['mẍ + cẋ + kx = 0', 'mẍ + cẋ + kx = F<sub>i</sub>', 'mẍ - cẋ - kx = 0', 'mẍ - cẋ + kx = 0'], answer: 0,
      blocks: [
        { text: 'Because there is no outside force to the vibrating system, this is considered a free vibration and the equation of motion does not have any outside forces. Therefore, option B is not valid.' },
        { text: 'By summing the damping and spring forces and setting that equal to mass multiplied by acceleration, you can turn the equation into a differential equation where velocity is ẋ and acceleration is ẍ. This means that options C and D are not valid.' },
        { math: 'mẍ + cẋ + kx = 0' },
        { text: 'would return the correct answer.' }
      ],
      reference: ''
    },
    {
      id: '1705006', complexity: 'Medium',
      html: 'A mass rests on a frictionless surface and is connected to a wall on one side by a spring, k<sub>1</sub> = 12 N/m and damper, c = 16 kg/s. The mass is also connected to a second wall on the opposite side, connected by a single spring, k<sub>2</sub> = 18 N/m. When the mass is in the center of the two walls, both springs are at their free lengths. Determine the mass of the system that would create a critically damped condition.',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 24 image.png',
      choices: ['1.0 kg', '2.2 kg', '3.1 kg', '5.6 kg'], answer: 1,
      blocks: [
        { text: 'First, add up the forces acting on the mass.' },
        { math: 'Ma = &minus;x(k<sub>1</sub> + k<sub>2</sub>) &minus; v(c) Ma = &minus;x(k<sub>1</sub> &minus; k<sub>2</sub>) &minus; v(c)' },
        { text: 'The associated equation of motion is:' },
        { math: 'mẍ + cẋ + x(k<sub>1</sub> + k<sub>2</sub>) = 0  mẍ + cẋ + x(k<sub>1</sub> &minus; k<sub>2</sub>) = 0' },
        { text: 'Critical damping occurs if the following equation is met:' },
        { math: '(c / (2 m))<sup>2</sup> = k<sub>e</sub> / m' },
        { text: 'Since the springs are in parallel, they can be added together as such:' },
        { math: 'k<sub>e</sub> = k<sub>1</sub> + k<sub>2</sub> = 12 + 18 = 30 N/m' },
        { math: 'm = c<sup>2</sup> / (4k<sub>e</sub>) = 16<sup>2</sup> / (4 &times; 30) = 2.13 kg' }
      ],
      reference: ''
    },
    {
      id: '1705007', complexity: 'Medium',
      text: 'The below equation shows a general solution to a forced-vibration differential equation. First identify which of the two expressions represent the transient solution, then select the expression in which an engineer analyzing the system would likely be most interested.',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 25 image.jpg',
      choices: ['(I) and (I)', '(I) and (II)', '(II) and (I)', '(II) and (II)'], answer: 1,
      blocks: [
        { text: 'The transient solution is expression I. This term will tend towards zero as time continues due to the exponent on the e. The expression that the engineer is most often interested in is the second expression since it is the steady state and is what will remain after the transient vibrations are no longer present.' }
      ],
      reference: ''
    },
    {
      id: '1705008', complexity: 'Easy',
      text: 'Which statement below about resonance is false?',
      choices: ['There is a single resonant frequency for systems with multiple degrees of freedom.', 'Resonance occurs when the system operates near the maximum forced vibration amplitude.', 'The resonant frequency for an undamped system is the natural frequency.', 'Resonance results when an oscillatory force operates near the natural frequency.'], answer: 0,
      blocks: [
        { text: 'For a system with multiple degrees of freedom, there will be multiple natural frequencies and resonance can occur at each of them.' }
      ],
      reference: ''
    },
    {
      id: '1705009', complexity: 'Medium',
      text: 'In what order will the different types of unforced damped systems approach an amplitude of x = 0 asymptotically the quickest?',
      choices: ['underdamped, overdamped, critically damped', 'critically damped, underdamped, overdamped', 'overdamped, critically damped, underdamped', 'critically damped, overdamped, underdamped'], answer: 3,
      blocks: [
        { text: 'Both the critically damped and overdamped cases do not oscillate and only decrease in amplitude magnitude over time. However, the critical damping returns to zero first. Underdamped has an oscillatory motion with decreasing amplitude and tends to zero after the other damped types.' }
      ],
      reference: ''
    },
    {
      id: '1705011', complexity: 'Hard',
      html: 'A steel cylinder with radius R is connected to the end of a massless rod with the axis of rotation through the center of the circular cross section. A similar massless rod is attached to a hollow steel cylinder with an outer radius R and an inner radius, 0.3R. Both cylinders have the same length. At what factor F does the undamped circular natural frequency of the hollow cylindrical end mass vary from the solid cylindrical end mass (<span class="math">F &times; &omega;<sub>n,hollow</sub> = &omega;<sub>n,solid</sub></span>)?',
      choices: ['0.845', '0.902', '0.996', '1.004'], answer: 2,
      blocks: [
        { text: 'The equation for undamped circular natural frequency is seen below.' },
        { math: '&omega;<sub>n</sub> = <math class="mathml-root" xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mrow><mo>(</mo><mfrac><msub><mi>k</mi><mi>t</mi></msub><mi>I</mi></mfrac><mo>)</mo></mrow></msqrt></math>' },
        { html: 'Where k<sub>t</sub> is the stiffness of the massless rod (which does not change between the hollow and solid cylinder) and I is the mass moment of inertia of the end mass. The mass moment of inertias can be found using the table in the NCEES <i>PE Mechanical Reference Handbook: Mensuration of Areas and Volumes: Relations of Mass and Space</i>. The factor F that we are solving for can be simplified to the following equation:' },
        { math: 'F = <span class="fraction"><span>&omega;<sub>n,solid</sub></span><span>&omega;<sub>n,hollow</sub></span></span> = <math class="mathml-root" xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mrow><mo>(</mo><mfrac><msub><mi>I</mi><mi>hollow</mi></msub><msub><mi>I</mi><mi>solid</mi></msub></mfrac><mo>)</mo></mrow></msqrt></math>' },
        { math: 'I<sub>hollow</sub> = <span class="fraction"><span>M(R<sub>o</sub><sup>2</sup> + R<sub>i</sub><sup>2</sup>)</span><span>2</span></span>' },
        { math: 'I<sub>solid</sub> = <span class="fraction"><span>MR<sup>2</sup></span><span>2</span></span>' },
        { text: 'Because both end masses are made from the same material, we can assume the same density and that their masses are proportional to their volumes.' },
        { math: 'V<sub>hollow</sub> = L &times; &pi; (R<sub>o</sub><sup>2</sup> - R<sub>i</sub><sup>2</sup>)' },
        { math: 'V<sub>solid</sub> = L &times; &pi;(R<sup>2</sup>)' },
        { math: 'F = <math class="mathml-root" xmlns="http://www.w3.org/1998/Math/MathML"><msqrt><mrow><mo>(</mo><mfrac><mrow><mo>(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>&minus;</mo><msup><mrow><mo>(</mo><mn>0.3</mn><mi>R</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>)</mo><mo>(</mo><msup><mi>R</mi><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mn>0.3</mn><mi>R</mi><mo>)</mo></mrow><mn>2</mn></msup><mo>)</mo></mrow><msup><mi>R</mi><mn>4</mn></msup></mfrac><mo>)</mo></mrow></msqrt></math>' },
        { text: 'We will substitute in an arbitrary value for R so that we can compute the factor easier (R = 10).' },
        { math: 'F = 0.996' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Mensuration of Areas and Volumes > Relations of Mass and Space'
    },
    {
      id: '1705012', complexity: 'Medium',
      text: 'A spring-mass system is arranged in a linear manner. The mass is 100 lbm and the spring constant is 150 lbf/in. What is most nearly the linear natural frequency under free vibration in Hz?',
      choices: ['3.83', '0.2', '0.675', '24.07'], answer: 0,
      blocks: [
        { text: 'Find the angular natural frequency:' },
        { math: '&omega;<sub>n</sub> = ' + componentFractionRoot('<mi>k</mi>', '<mi>m</mi>') },
        { math: '&omega;<sub>n</sub> = ' + componentExpressionRoot('<mfrac><mrow><mn>150</mn><mtext> lbf/in</mtext></mrow><mrow><mn>100</mn><mtext> lbm</mtext></mrow></mfrac><mo>&times;</mo><mfrac><mrow><mn>12</mn><mtext> in</mtext></mrow><mrow><mn>1</mn><mtext> ft</mtext></mrow></mfrac><mo>&times;</mo><mfrac><mrow><mn>32.2</mn><mtext> lbm·ft/s²</mtext></mrow><mrow><mn>1</mn><mtext> lbf</mtext></mrow></mfrac>') + ' = 24.07 rad/s <span class="fraction"><span>1 cycle</span><span>2&pi; rad</span></span> = 3.83 Hz' },
        { html: 'Answer B results from neglecting the conversion from lbf to lbm and in to ft, which is necessary because ft are involved in the relationship between lbf and lbm.<br>Answer C results from failing to reconcile the units of lbm and lbf<br>Answer D reports the answer in the incorrect units of radians per second' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Vibration/Dynamic Analysis > Free Vibration'
    },
    {
      id: '1705013', complexity: 'Easy',
      html: 'In a torsional spring-mass system, the massless rod has a stiffness of 27 N&bull;m/rad. The mass moment of inertia of the end mass is 50 kg&bull;m<sup>2</sup>. What is most nearly the undamped natural circular frequency?',
      choices: ['0.035 rad/s', '0.735 rad/s', '0.925 rad/s', '1.254 rad/s'], answer: 1,
      blocks: [
        { text: 'Find the undamped natural circular frequency:' },
        { math: '&omega;<sub>n</sub> = ' + componentFractionRoot('<msub><mi>k</mi><mi>t</mi></msub>', '<mi>I</mi>') },
        { math: '&omega;<sub>n</sub> = ' + componentFractionRoot('<mrow><mn>27</mn><mtext> N·m/rad</mtext></mrow>', '<mrow><mn>50</mn><mtext> kg·m²</mtext></mrow>') + ' = 0.735 rad/s' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook V1.9, 2. Machine Design and Material, 2.15.2. Torsional Springs'
    },
    {
      id: '1705016', complexity: 'Easy',
      text: 'A vibrating system has an undamped natural frequency of 4.70 Hz and a damping ratio of 0.211. Find the damped natural frequency.',
      choices: ['2.1 Hz', '2.5 Hz', '4.6 Hz', '4.7 Hz'], answer: 2,
      blocks: [
        { text: 'Damped natural frequency:' },
        { math: '&omega;<sub>d</sub> = &omega;<sub>n</sub> ' + componentExpressionRoot('<mn>1</mn><mo>&minus;</mo><msup><mi>&zeta;</mi><mn>2</mn></msup>') },
        { text: 'Convert formula for frequency:' },
        { math: '&omega; = 2&pi; &times; f' },
        { math: 'f<sub>d</sub> = f<sub>n</sub>' + componentExpressionRoot('<mn>1</mn><mo>&minus;</mo><msup><mi>&zeta;</mi><mn>2</mn></msup>') },
        { math: 'f<sub>d</sub> = 4.70' + componentExpressionRoot('<mn>1</mn><mo>&minus;</mo><msup><mrow><mo>(</mo><mn>0.211</mn><mo>)</mo></mrow><mn>2</mn></msup>') + ' = 4.59 Hz' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Vibration/Dynamic Analysis >Torsional Vibration'
    },
    {
      id: '1705017', complexity: 'Medium',
      text: 'A mass and spring are hung from a base plate that can induce vibration. The mass is 6 kg and the spring has a constant of 400 N/m. If the frequency ratio of the system is 0.65 when the base induces a vibration, the maximum amplitude of the force transmitted to the weight is most nearly:',
      choices: ['33 N.', '102 N.', '63 N.', '85 N.'], answer: 1,
      blocks: [
        { text: 'Given' },
        { html: '<ul><li>Mass: m = 6 kg</li><li>Spring constant: k = 400 N/m</li><li>Frequency ratio: r = <span class="fraction"><span>&omega;</span><span>&omega;<sub>n</sub></span></span> = 0.65</li><li>Damping: not mentioned &rarr; assume undamped</li></ul>' },
        { text: 'We&rsquo;re asked for the maximum amplitude of the force transmitted to the mass.' },
        { text: 'Static deflection and reference force' },
        { text: 'Static deflection under the weight:' },
        { math: 'x<sub>s</sub> = <span class="fraction"><span>W</span><span>k</span></span> = <span class="fraction"><span>mg</span><span>k</span></span> = <span class="fraction"><span>6 &times; 9.81</span><span>400</span></span> = 0.147 m' },
        { text: 'Corresponding spring force:' },
        { math: 'F<sub>0</sub> = kx<sub>s</sub> = 400 &times; 0.147 = 58.8 N' },
        { text: 'Force transmissibility (base excitation, undamped)' },
        { text: 'For base excitation with zero damping, the force transmissibility is:' },
        { math: '<span class="fraction"><span>F<sub>T</sub></span><span>F<sub>0</sub></span></span> = <span class="fraction"><span>1</span><span>|1-r<sup>2</sup>|</span></span>' },
        { text: 'With r = 0.65:' },
        { math: '1 - r<sup>2</sup> = 1 - 0.65<sup>2</sup> = 1 - 0.4225 = 0.5775' },
        { math: '<span class="fraction"><span>F<sub>T</sub></span><span>F<sub>0</sub></span></span> = <span class="fraction"><span>1</span><span>0.5775</span></span> = 1.731' },
        { text: 'So the transmitted force amplitude is:' },
        { math: 'F<sub>T</sub> = F<sub>0</sub> &middot; <span class="fraction"><span>1</span><span>1-r<sup>2</sup></span></span> = 58.8 &times; 1.731 &asymp; 101.7 N' },
        { math: 'F<sub>T</sub> &asymp; 102 N' }
      ],
      reference: '&ldquo;Vibration Transmissibility, Base Motion&rdquo; and &ldquo;Springs&rdquo; in the NCEES PE Mechanical Reference Handbook'
    },
    {
      id: '1705018', complexity: 'Medium',
      text: 'A hanging spring mass system has a block and two springs. The block is 50 kg. The springs are of equal length and mounted in parallel with spring constants 6 kN/m and 4 kN/m, respectively. The block is pulled down 40 mm from equilibrium and released. What is the period of vibration?',
      choices: ['0.100 s', '0.229 s', '0.312 s', '0.444 s'], answer: 3,
      blocks: [
        { text: 'The constant k of the single equivalent spring is:' },
        { math: 'k = k<sub>1</sub> + k<sub>2</sub> = 6 kN/m + 4 kN/m = 10 kN/m = 10<sup>4</sup> N/m' },
        { text: 'Period of vibration:' },
        { math: '&omega;<sub>n</sub><sup>2</sup> = <span class="fraction"><span>k</span><span>m</span></span> = <span class="fraction"><span>10<sup>4</sup> <span class="fraction"><span>N</span><span>m</span></span></span><span>50 kg</span></span>' },
        { math: '&omega;<sub>n</sub> = 14.14 rad/s' },
        { math: '&tau;<sub>n</sub> = <span class="fraction"><span>2&pi;</span><span>&omega;<sub>n</sub></span></span> = 0.444 s' }
      ],
      reference: ''
    },
    {
      id: '1705019', complexity: 'Medium',
      text: 'Four springs in parallel, each having a constant of 800 lb/in, are used to support a motor weighing 400 lb. The motor can only move in the vertical direction. The speed in RPM at which resonance will occur is most nearly:',
      choices: ['153', '530', '56', '94'], answer: 1,
      blocks: [
        { html: 'The resonance speed is equal to the natural circular frequency <span class="math">&omega;<sub>n</sub></span> (in rpm) of the free vibration of the motor. It is calculated as:' },
        { math: 'm = 400 lbm' },
        { math: 'k = 4 <span class="math">(800 <span class="fraction"><span>lbf</span><span>in</span></span>)</span> = 3,200 <span class="fraction"><span>lbf</span><span>in</span></span> = 38,400 <span class="fraction"><span>lbf</span><span>ft</span></span>' },
        { math: '&omega;<sub>n</sub> = ' + componentFractionRoot('<mi>k</mi>', '<mi>m</mi>') + ' = ' + componentExpressionRoot('<mfrac><mrow><mn>38,400</mn><mtext> lbf/ft</mtext></mrow><mrow><mn>400</mn><mtext> lbm</mtext></mrow></mfrac><mo>&times;</mo><mfrac><mrow><mn>32.2</mn><mtext> lbm·ft/s²</mtext></mrow><mrow><mn>1</mn><mtext> lbf</mtext></mrow></mfrac>') + ' = 55.60 <span class="fraction"><span>rad</span><span>s</span></span> <span class="fraction"><span>1 rev</span><span>2&pi;rad</span></span> <span class="fraction"><span>60s</span><span>1min</span></span> = 531 rpm' },
        { html: 'Answer A results from failing to adjust the units on the spring stiffness to lbf/ft.<br>Answer C reports the answer in radians per second instead of the requested RPM.<br>Answer D results from failure to reconcile the units of lbm and lbf before taking the square root.' }
      ],
      reference: ''
    },
    {
      id: '1705021', complexity: 'Easy',
      text: 'A spring block system oscillates once every 5 seconds. If the spring constant is 10 N/m, what is the approximate mass of the block?',
      choices: ['6.33 kg', '7.45 kg', '3.65 kg', '4.78 kg'], answer: 0,
      blocks: [
        { math: '&omega; = ' + componentFractionRoot('<mi>k</mi>', '<mi>m</mi>') + ' = <span class="fraction"><span>2&pi;</span><span>T<sub>n</sub></span></span>' },
        { math: '<span class="fraction"><span>k</span><span>m</span></span> = <span class="fraction"><span>4&pi;<sup>2</sup></span><span>T<sub>n</sub><sup>2</sup></span></span>' },
        { math: 'm = <span class="fraction"><span>k &times; T<sub>n</sub><sup>2</sup></span><span>4 &pi;<sup>2</sup></span></span> = <span class="fraction"><span>(10 <span class="fraction"><span>N</span><span>m</span></span>) (5 s)<sup>2</sup></span><span>4 &pi;<sup>2</sup></span></span> = 6.33 kg' }
      ],
      reference: ''
    },
    {
      id: '1705022', complexity: 'Easy',
      text: 'An oscillating body has a period of oscillation of 1.6 s. The natural frequency of the oscillating body is most nearly:',
      choices: ['3.9 rad/s', '4.1 rad/s.', '2.5 rad/s', '3.6 rad/s.'], answer: 0,
      blocks: [
        { math: 'T<sub>n</sub> = <span class="fraction"><span>2&pi;</span><span>&omega;<sub>n</sub></span></span>' }
      ],
      reference: ''
    },
    {
      id: '1705024', complexity: 'Easy',
      html: 'What is the natural frequency, <span class="math">&omega;</span>, of an oscillating spring mass system?',
      choices: [
        '<span class="fraction"><span>k</span><span>m</span></span>',
        componentFractionRoot('<mi>k</mi>', '<mi>m</mi>'),
        '<span class="fraction"><span>m</span><span>k</span></span>',
        componentFractionRoot('<mi>m</mi>', '<mi>k</mi>')
      ], answer: 1,
      blocks: [
        { text: 'Natural frequency is calculated using the following equation:' },
        { math: '&omega;<sub>n</sub> = ' + componentFractionRoot('<mi>k</mi>', '<mi>m</mi>') }
      ],
      reference: ''
    },
    {
      id: '1705025', complexity: 'Easy',
      html: 'What is the natural frequency, <span class="math">&omega;</span>,of a torsional vibrating system?',
      choices: [
        '<span class="fraction"><span>k</span><span>I</span></span>',
        componentFractionRoot('<mi>k</mi>', '<mi>I</mi>'),
        '<span class="fraction"><span>I</span><span>k</span></span>',
        componentFractionRoot('<mi>I</mi>', '<mi>k</mi>')
      ], answer: 1,
      blocks: [
        { text: 'Natural frequency is calculated using the following equation:' },
        { math: '&omega;<sub>n</sub> = ' + componentFractionRoot('<mi>k</mi>', '<mi>I</mi>') }
      ],
      reference: ''
    },
    {
      id: '1705026', complexity: 'Medium',
      html: 'A hollow stainless-steel shaft (G = 11.5 &times; 10<sup>6</sup> psi) is under torsion. The shaft is 100 in long, has an inner diameter of 1 in, and has a wall thickness of 0.0625 in. What is the equivalent spring constant of the shaft?',
      choices: ['6,794 lb/in', '7,745 lb/in', '5,752 lb/in', '8,153 lb/in'], answer: 0,
      blocks: [
        { text: 'Solution: Determine the outer diameter.' },
        { math: 'D = d + 2t = 1.125 in' },
        { text: 'Determine the spring constant.' },
        { math: 'K<sub>eq</sub> = <span class="fraction"><span>&pi;G</span><span>32l</span></span>(D<sup>4</sup> &minus; d<sup>4</sup>)' },
        { math: '<span class="fraction"><span>&pi; &times; 11.5 &times; 10<sup>6</sup> psi</span><span>32 &times; 100 in</span></span>((1.125 in)<sup>4</sup> &minus; (1 in<sup>4</sup>)) = 6,794 lb/in' }
      ],
      reference: 'NCESS PE Mechanical Handbook 1.9, 2 Machine Design and Materials, 2.15.19 Equivalent Masses, Spring, and Dampers'
    },
    {
      id: '1705027', complexity: 'Easy',
      text: 'A mass of 0.025 kg is hanging from a spring. The spring constant is 0.44 N/m. If the mass is pulled down and released, what will be the period of oscillation?',
      choices: ['0.668 sec', '0.357 sec', '1.5 sec', '2.03 sec'], answer: 2,
      blocks: [
        { math: '&omega; = ' + componentFractionRoot('<mi>K</mi>', '<mi>m</mi>') + ' = ' + componentFractionRoot('<mn>0.44</mn>', '<mn>0.025</mn>') + ' = 4.195 rad/sec' },
        { math: '&omega; = 2&pi;F' },
        { math: 'F = <span class="fraction"><span>4.195</span><span>2 &pi;</span></span> = 0.668 Hz' },
        { math: 'F = <span class="fraction"><span>1</span><span>T</span></span>' },
        { math: 'T = <span class="fraction"><span>1</span><span>F</span></span> = <span class="fraction"><span>1</span><span>0.668</span></span> = 1.5 sec' }
      ],
      reference: ''
    },
    {
      id: '1705028', complexity: 'Easy',
      html: 'A spring has <i>K</i> = 10 kN/m and supports a block of mass of 5 kg. The mass is pulled down 8 mm and then released. What is the period of vibration?',
      choices: ['7.1 sec', '1.4 sec', '0.14 sec', '44.72 sec'], answer: 2,
      blocks: [
        { math: '&omega; = ' + componentFractionRoot('<mi>k</mi>', '<mi>m</mi>') + ' = ' + componentExpressionRoot('<mn>10</mn><mo>&times;</mo><mfrac><mn>1,000</mn><mn>5</mn></mfrac>') + ' = 44.72 rad/sec' },
        { math: 'T = <span class="fraction"><span>2&pi;</span><span>&omega;</span></span>' },
        { math: 'T = <span class="fraction"><span>2&pi;</span><span>44.72</span></span> = 0.14 sec' }
      ],
      reference: ''
    },
    {
      id: '1706003', complexity: 'Easy',
      html: 'Four helical compression springs are made with the same parameters as listed below:<br><br>pitch = 20 mm<br><br>wire diameter = 8 mm<br><br>number of active coils = 16<br><br>If the only difference is the end treatment of the spring, which end treatment provides the longest free length of the spring?',
      choices: ['Plain end', 'Plain and ground end', 'Square and closed end', 'Square and ground end'], answer: 2,
      blocks: [
        { text: 'Refer to “Compression Spring Dimensions” in the FE Reference Manual.' },
        { math: 'Plain: free length = pN + d = (20 mm)(16) + 8 mm = 328 mm' },
        { math: 'Plain and ground: free length = p(N + 1) = 20 mm(16 +1) = 340 mm' },
        { math: 'Square and closed: free length = pN + 3d = (20 mm)(16) + (3)(8 mm) = 344 mm' },
        { math: 'Square and ground: free length = pN + 2d = (20 mm)(16) + (2)(8 mm) = 336 mm' },
        { text: 'Answer C is correct because the square end provides the longest free length.' }
      ],
      reference: ''
    },
    {
      id: '1706004', complexity: 'Medium',
      html: 'A thin-walled sphere with a diameter of 18 ft is constrained by the design parameter of a 2.5-inch-thick wall. The designer is told to use 15 psig as the expected pressure for the sphere&rsquo;s failure. What is the wall stress expected to be in the sphere at failure, and what is the factor of safety of this design if the allowable wall stress is set at 150 psi?',
      choices: [
        '&sigma;<sub>wall</sub> = 500 psi; FOS = 1.5',
        '&sigma;<sub>wall</sub> = 320 psi; FOS = 2.1',
        '&sigma;<sub>wall</sub> = 440 psi; FOS = 1.9',
        '&sigma;<sub>wall</sub> = 280 psi; FOS = 2.5'
      ], answer: 1,
      blocks: [
        { text: 'For a thin-walled sphere, the wall stress is governed by:' },
        { math: '&sigma; = <span class="fraction"><span>pr</span><span>2t</span></span> = <span class="fraction"><span>15 psi*9ft*12 <span class="fraction"><span>in</span><span>ft</span></span></span><span>2*2.5 in</span></span> = 324 psi' },
        { html: 'The factor of safety is FOS = <span class="fraction"><span>&sigma;<sub>fail</sub></span><span>&sigma;<sub>allow</sub></span></span>' },
        { math: 'FOS = <span class="fraction"><span>324</span><span>150</span></span> = 2.2' }
      ],
      reference: 'NCEES Mechanical Engineering Handbook V1.9> Chapter 2 Machine Design and Materials > 2.19 Pressure Vessels> 2.19.2 Definitions'
    },
    {
      id: '1706016', complexity: 'Medium',
      html: 'Determine the maximum shear stress in a helical spring with the following properties:<br><br>Wire diameter = 0.09 in<br><br>Mean spring diameter = 0.8 in<br><br>Applied force = 5 lb',
      choices: ['16,076 psi', '20,020 psi', '40,533 psi', '40,098 psi'], answer: 0,
      blocks: [
        { html: 'Refer to the mechanical springs equations in the NCEES <i>PE Reference Handbook &gt; Machine Design &gt; Mechanical Components &gt; Mechanical Springs</i>' },
        { math: '&tau; = K <span class="fraction"><span>8FD</span><span>&pi;d<sup>3</sup></span></span>' },
        { math: '<i>d</i> = wire diameter' },
        { math: '<i>D</i> = mean spring diameter' },
        { math: '<i>F</i> = applied force' },
        { math: 'K = <span class="fraction"><span>4C + 2</span><span>4C &minus; 3</span></span>' },
        { math: 'C = <span class="fraction"><span>D</span><span>d</span></span>' },
        { text: 'Find the spring factor:' },
        { math: 'C = <span class="fraction"><span>D</span><span>d</span></span> = <span class="fraction"><span>0.8 in</span><span>0.09 in</span></span> = 8.88' },
        { math: 'K = <span class="fraction"><span>4(8.88) + 2</span><span>4(8.88) &minus; 3</span></span> = 1.15' },
        { math: '&tau; = K <span class="fraction"><span>8FD</span><span>&pi;d<sup>3</sup></span></span> = 1.15 &times; <span class="fraction"><span>8 &times; 5 lb &times; 0.8 in</span><span>&pi; &times; (0.09 in)<sup>3</sup></span></span> = 16,076 psi' }
      ],
      reference: ''
    },
    {
      id: '1706032', complexity: 'Medium',
      text: 'The allowable normal stress (in psi) of A229 oil-tempered wire with a diameter of 0.125 inches is most nearly:',
      choices: ['169,157 psi.', '216,868 psi.', '2,135 psi.', '97,590 psi.'], answer: 0,
      blocks: [
        { html: 'From the NCEES <i>PE Mechanical Reference Handbook: Mechanical Components: Springs</i>, A229 has the following properties:' },
        { math: '<i>A</i> = 147' },
        { math: '<i>m</i> = 0.187' },
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook: Mechanical Components: Springs</i> for the tensile stress equation.' },
        { math: 'S<sub>ut</sub> = <span class="fraction"><span>A</span><span>d<sup>m</sup></span></span>' },
        { math: 'S<sub>ut</sub> = <span class="fraction"><span>147,000</span><span>0.125<sup>0.187</sup></span></span>' },
        { math: '= 216,868 psi' },
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook: Mechanical Components: Springs</i> for the allowable stress equation.' },
        { math: 'S<sub>y</sub> = S<sub>ut</sub> &times; 0.78' },
        { math: 'S<sub>y</sub> = 216,868 &times; 0.78' },
        { math: 'S<sub>y</sub> = 169,157 psi' },
        { text: 'Therefore, answer A is correct.' },
        { html: 'Answer B reports S<sub>ut</sub>.<br>Answer C is calculated using the wrong value of A from the table (the SI value).<br>Answer D reports the S<sub>sy</sub> &ndash; yield strength in torsion, not tensile/normal yield strength.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Mechanical Components > Springs'
    },
    {
      id: '1706048', complexity: 'Medium',
      text: 'A helical compression spring has a spring wire diameter of 0.1875 in and a mean spring diameter of 1.5 in. The spring is subjected to a mean force of 4.5 lbf and an amplitude force of 1.5 lbf. What is the approximate maximum shear stress of the compression spring?',
      choices: ['3,000 psi', '4,000 psi', '6,500 psi', '9,500 psi'], answer: 1,
      blocks: [
        { text: 'Calculate the spring index:' },
        { math: 'C = <span class="fraction"><span>D</span><span>d</span></span> = <span class="fraction"><span>1.5 in</span><span>0.1875 in</span></span> = 8' },
        { html: 'Calculate the K<sub>s</sub> factor:' },
        { math: 'K<sub>s</sub> = <span class="fraction"><span>4C + 2</span><span>4C &minus; 3</span></span>' },
        { math: 'K<sub>s</sub> = <span class="fraction"><span>4(8) + 2</span><span>4(8) &minus; 3</span></span> = 1.172' },
        { text: 'Determine maximum force on the spring:' },
        { math: 'F<sub>mean</sub> = 4.5 lbf' },
        { math: 'F<sub>max</sub> = 1.5 lbs.' },
        { text: 'As per Section 2.15.4 Vibration Transmissibility, Base motion, the maximum transmitted force is also known as amplitude force.' },
        { text: 'Use the spring stress equation with the determined maximum input force:' },
        { math: '&tau; = K<sub>s</sub><span class="fraction"><span>8FD</span><span>&pi;d<sup>3</sup></span></span>' },
        { math: '&tau; = 1.172 <span class="fraction"><span>8 &times; (4.5 + 1.5) lbf &times; 1.5 in</span><span>&pi;(0.1875 in)<sup>3</sup></span></span>' },
        { math: '&tau; = 4074.8 psi' }
      ],
      reference: 'Section 2.16.1.2 “Mechanical Springs” in the NCEES PE Mechanical Reference Handbook'
    },
    {
      id: '1706049', complexity: 'Medium',
      text: 'A 6 in diameter single plate clutch is used to transmit 50 ft-lb of engine torque to the transmission. The clutch ID is 1 in and the friction material has a friction coefficient of 0.55. The clutch actuator is attached to a hydraulic cylinder with a 2 in diameter internal piston. Assuming uniform wear, the hydraulic pressure required to apply the clutch is most nearly:',
      choices: ['30 psi.', '60 psi.', '100 psi.', '200 psi.'], answer: 3,
      blocks: [
        { text: 'Calculate the force required to actuate the clutch:' },
        { math: 'T = <span class="fraction"><span>Ff</span><span>4</span></span>(D + d)' },
        { math: '50 ft &minus; lbf = <span class="fraction"><span>F &times; 0.55</span><span>4</span></span>(6 in + 1 in)<span class="math">(<span class="fraction"><span>1 ft</span><span>12 in</span></span>)</span>' },
        { math: 'F = 623.37 lbf' },
        { math: 'F<sub>R</sub> = <span class="math">(<span class="fraction"><span>&pi;D<sub>1</sub><sup>2</sup></span><span>4</span></span>)</span>P<sub>R</sub>' },
        { math: '623.37 lbf = <span class="math">(<span class="fraction"><span>&pi;(2 in)<sup>2</sup></span><span>4</span></span>)</span>P<sub>R</sub>' },
        { math: 'P<sub>R</sub> = 198.42 psi' }
      ],
      reference: 'Section 2.16.7 “Clutches and Brakes” and Section 3.7.2 “Force and Pressure to Extend Cylinder” in the NCEES PE Mechanical Reference Handbook'
    },
    {
      id: '1706058', complexity: 'Easy',
      html: 'Steam at a pressure of 2.25 N/m<sup>2</sup> is generated in a thin-walled cylindrical pressure vessel. The diameter of the vessel is 1.6 m. If the circumferential stress is 56 Pa, then the minimum wall thickness is:',
      choices: ['12 mm', '25 mm', '33 mm', '41 mm'], answer: 2,
      blocks: [
        { text: 'Minimum wall thickness is:' },
        { math: '&sigma;<sub>t1</sub> = <span class="fraction"><span>pd</span><span>2t</span></span>' },
        { math: 't = <span class="fraction"><span>pd</span><span>2&sigma;<sub>t1</sub></span></span> = <span class="fraction"><span>2.25 <span class="fraction"><span>N</span><span>m<sup>2</sup></span></span> &times; 1,600mm</span><span>2 &times; 56 <span class="fraction"><span>N</span><span>m<sup>2</sup></span></span></span></span> = 32.14 mm' }
      ],
      reference: ''
    },
    {
      id: '1706059', complexity: 'Medium',
      html: 'A thin-walled spherical vessel 20 mm thick is subjected to an internal pressure of 2.5 N/m<sup>2</sup>. If the maximum allowed stress is 120 Pa and the efficiency is 80%, the diameter of the vessel is:',
      choices: ['1 m', '3 m', '5 m', '7 m'], answer: 1,
      blocks: [
        { text: 'Given: Wall thickness,' },
        { math: 't = 20 mm = 0.020 m' },
        { math: 'Internal pressure, p = 2.5 N/m^2' },
        { math: 'Allowable stress, &sigma;_allow = 120 Pa' },
        { math: 'Joint efficiency, &eta; = 0.80' },
        { text: 'For a thin-walled spherical vessel, the hoop (membrane) stress is:' },
        { math: '&sigma; = p r / (2 t)' },
        { text: 'Using diameter d = 2 r, this can be rearranged to:' },
        { math: 't = p d / (4 &sigma; &eta;)' },
        { text: 'Solving for d:' },
        { math: 'd = 4 t &sigma; &eta; / p' },
        { text: 'Substitute the given values:' },
        { math: 'd = 4 &times; 0.020 &times; 120 &times; 0.80 / 2.5' },
        { text: 'First compute the numerator:' },
        { math: '4 &times; 0.020 = 0.08' },
        { math: '0.08 &times; 120 = 9.6' },
        { math: '9.6 &times; 0.80 = 7.68' },
        { text: 'Now divide by p:' },
        { math: 'd = 7.68 / 2.5 = 3.072 m' },
        { text: 'So the calculated diameter that produces the allowable stress is approximately:' },
        { math: 'd &asymp; 3.07 m' }
      ],
      reference: 'NCEES PE Mechanical Handbook, Chapter 2, Machine Design and Materials, Definitions, 2.19.2 Thin-Walled Spherical Tanks'
    },
    {
      id: '1706060', complexity: 'Easy',
      html: 'A pipe delivers 3,600 m<sup>3</sup> of steam per hour at a velocity of 40 m/s. The inside diameter of pipe is most nearly:',
      choices: ['150 mm', '180 mm', '190 mm', '210 mm'], answer: 1,
      blocks: [
        { math: 'Q = 3,600 <span class="fraction"><span>m<sup>3</sup></span><span>hr</span></span> = 60 <span class="fraction"><span>m<sup>3</sup></span><span>min</span></span> = 1 <span class="fraction"><span>m<sup>3</sup></span><span>s</span></span>' },
        { math: 'v = 40 <span class="fraction"><span>m</span><span>s</span></span>' },
        { math: 'A = &pi;r<sup>2</sup>' },
        { math: 'Q = Av = &pi;r<sup>2</sup> &times; v' },
        { math: 'r = ' + componentFractionRoot('<mfrac><mrow><mn>1</mn><mtext> m³</mtext></mrow><mi>s</mi></mfrac>', '<mrow><mi>&pi;</mi><mo>&times;</mo><mn>40</mn><mfrac><mi>m</mi><mi>s</mi></mfrac></mrow>') + ' = 0.089 m' },
        { math: 'D = 2 (0.089 m) = 0.178 m = 178 mm' }
      ],
      reference: 'NCEES PE Mechanical Handbook > Chapter 3: Hydraulics, Fluids and Pipe Flow'
    },
    {
      id: '1706061', complexity: 'Medium',
      html: 'A helical spring with square and ground ends has 19 coils and a shear modulus of elasticity of 11.5 &times; 10<sup>6</sup> psi. If the outside diameter of the spring is 3.9 in and the wire diameter is 0.35 in, how much deflection will the spring have under a load of 85 lb?',
      choices: ['4.8 in', '2.3 in', '3 in', '3.6 in'], answer: 2,
      blocks: [
        { text: 'Find number of active coils.' },
        { text: 'For squared and ground ends:' },
        { math: 'n<sub>a</sub> = n<sub>t</sub> &minus;2 = 17 active coils' },
        { text: 'Find the mean diameter of the spring' },
        { math: 'D = D<sub>o</sub> &minus; D<sub>wire</sub> = 3.55 in' },
        { text: 'Find the spring constant:' },
        { math: 'k = <span class="fraction"><span>d<sup>4</sup>G</span><span>8D<sup>3</sup>n<sub>a</sub></span></span> = <span class="fraction"><span>(0.35in)<sup>4</sup>(11.5 &times;10<sup>6</sup>psi)</span><span>8(3.55in)<sup>3</sup>(17)</span></span> = 28.36 lb/in' },
        { text: 'Solve for deflection.' },
        { math: 'F = kx' },
        { math: 'x = <span class="fraction"><span>F</span><span>k</span></span> = <span class="fraction"><span>85 lb</span><span>28.36 lb/in</span></span> = 2.996 in (3 in)' }
      ],
      reference: ''
    },
    {
      id: '1706068', complexity: 'Medium',
      html: 'A pressure vessel is constructed of SA-515 grade 70 plate with a category B double-welded butt joint. The joint efficiency of a double-welded butt joint is 0.70. The only non-destructive testing and inspection completed on the welds is ultrasonic. The inside diameter of the vessel is 36 in. The head must withstand a temperature of 300&deg;F and a pressure of 1,000 psi. The maximum allowable stress for SA-515 grade 70 plate at 300&deg;F is 20,000 psi. The minimum wall thickness of the pressure vessel is most nearly',
      choices: ['1.05 in.', '1.34 in.', '1.57 in', '1.88 in.'], answer: 1,
      blocks: [
        { math: 't = <span class="fraction"><span>p.r<sub>i</sub></span><span>Se &minus;0.6p<sub>i</sub></span></span> = <span class="fraction"><span>1,000 <span class="fraction"><span>lbf</span><span>in<sup>2</sup></span></span> &times;(18in)</span><span>20,000 <span class="fraction"><span>lbf</span><span>in<sup>2</sup></span></span> &times; 0.70 &minus; 0.6 &times; 1,000 <span class="fraction"><span>lbf</span><span>in<sup>2</sup></span></span></span></span> = 1.343 in' }
      ],
      reference: ''
    },
    {
      id: '1706069', complexity: 'Medium',
      html: 'A 120&deg; journal bearing has a 7-in diameter, an 11-in length, and a radial clearance of 0.006 in. The lubricating fluid is SAE 10 oil with a viscosity of 2.2 &times; 10<sup>-6</sup> lb-s/in<sup>2</sup>, and the bearing carries a load of 72 psi at 1,100 rpm. What is the bearing frictional torque using Petroff&rsquo;s equation?',
      choices: ['112 in-lbf', '145 in-lbf', '125 in-lbf', '131 in-lbf'], answer: 2,
      blocks: [
        { math: 'N = 1,100 <span class="fraction"><span>rev</span><span>min</span></span> = 18.33 <span class="fraction"><span>rev</span><span>s</span></span>' },
        { text: 'Petroff&rsquo;s equation:' },
        { math: 'T = <span class="fraction"><span>4&pi;<sup>2</sup>r<sup>3</sup>L&mu;N</span><span>c</span></span> = <span class="fraction"><span>(4&pi;<sup>2</sup>(3.5in)<sup>3</sup>(11 in)(2.2&times;10<sup>&minus;6</sup>))(18.33 <span class="fraction"><span>rev</span><span>s</span></span>)</span><span>0.006</span></span> = 125.138 in-lbf' }
      ],
      reference: ''
    },
    {
      id: '1706077', complexity: 'Medium',
      text: 'A cylindrical pressure vessel has an inner radius of 8 in, an outer radius of 9 in, and a length of 40 in. If the cylinder is pressurized to 4,800 psi and the yield stress of the material is 40,000 psi, find the normal stress and circumferential stress at the inner surface of the cylinder.',
      choices: [
        '&sigma;<sub>r</sub> = 4,800 psi; &sigma;<sub>&theta;</sub> = -4,094 psi',
        '&sigma;<sub>r</sub> = -4,800 psi; &sigma;<sub>&theta;</sub> = 40,941 psi',
        '&sigma;<sub>r</sub> = 2,700 psi; &sigma;<sub>&theta;</sub> = -2,084 psi',
        '&sigma;<sub>r</sub> = -2,700 psi; &sigma;<sub>&theta;</sub> = 2,084 psi'
      ], answer: 1,
      blocks: [
        { math: 'r<sub>i</sub> = 8in' },
        { math: 'r<sub>o</sub> = 9in' },
        { math: 'S<sub>y</sub> = 40,000 psi' },
        { math: 'p<sub>i</sub> = 4,800 psi' },
        { math: '&sigma;<sub>r</sub>(p<sub>i</sub>) = -p<sub>i</sub>' },
        { math: '&sigma;<sub>r</sub>(p<sub>i</sub>) = -4.8 &times; 10<sup>3</sup>psi' },
        { math: '&sigma;<sub>&theta;</sub>(p<sub>i</sub>,r<sub>o</sub>,r<sub>i</sub>) = <span class="fraction"><span>p<sub>i</sub> &times; (r<sub>o</sub><sup>2</sup> + r<sub>i</sub><sup>2</sup>)</span><span>r<sub>o</sub><sup>2</sup> - r<sub>i</sub><sup>2</sup></span></span>' },
        { math: '&sigma;<sub>&theta;</sub>(p<sub>i</sub>,r<sub>o</sub>,r<sub>i</sub>) = (4.0941 &times; 10<sup>4</sup>) psi' },
        { text: 'Answer: B' }
      ],
      reference: ''
    },
    {
      id: '1706079', complexity: 'Hard',
      text: 'A cylindrical pressure vessel has an inner radius of 8.9 in, an outer radius of 9 in, and a length of 40 in. If the yield stress of the material is 40,000 psi, which value is closest to the internal pressure that will cause the cylinder to yield?',
      choices: ['513 psi', '520 psi', '400 psi', '450 psi'], answer: 3,
      blocks: [
        { math: 'r<sub>i</sub> = 8.9in' },
        { math: 'r<sub>o</sub> = 9 in' },
        { math: 'S<sub>y</sub> = 40,000 psi' },
        { math: 't(r<sub>o</sub>,r<sub>i</sub>) = r<sub>o</sub> &minus; r<sub>i</sub>' },
        { math: 't(r<sub>o</sub>,r<sub>i</sub>) = 0.1 in' },
        { math: '&sigma;<sub>r</sub>(p<sub>i</sub>) = &minus;p<sub>i</sub>' },
        { math: '&sigma;<sub>r</sub>(p<sub>i</sub>) = &minus;1p<sub>i</sub>' },
        { math: '&sigma;<sub>&theta;</sub>(p<sub>i</sub>,r<sub>i</sub>,t) = <span class="fraction"><span>p<sub>i</sub> &times; r<sub>i</sub></span><span>t</span></span>' },
        { math: '&sigma;<sub>&theta;</sub>(1,8.9in,0.1in) = 89 p<sub>i</sub>' },
        { math: '&sigma;<sub>z</sub>(p<sub>i</sub>,r<sub>i</sub>,t) = <span class="fraction"><span>p<sub>i</sub> &times; r<sub>i</sub></span><span>2t</span></span>' },
        { math: '&sigma;<sub>z</sub>(1,8.9in,0.1in) = 44.5 p<sub>i</sub>' },
        { math: 'S<sub>y</sub>(&sigma;<sub>r</sub>,&sigma;<sub>&theta;</sub>,&sigma;<sub>z</sub>) = ' + componentMathFraction('<mn>1</mn>', '<msqrt><mn>2</mn></msqrt>') + ' &times; ' + componentExpressionRoot('<msup><mrow><mo>(</mo><msub><mi>&sigma;</mi><mi>r</mi></msub><mo>&minus;</mo><msub><mi>&sigma;</mi><mi>&theta;</mi></msub><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><msub><mi>&sigma;</mi><mi>r</mi></msub><mo>&minus;</mo><msub><mi>&sigma;</mi><mi>z</mi></msub><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><msub><mi>&sigma;</mi><mi>&theta;</mi></msub><mo>&minus;</mo><msub><mi>&sigma;</mi><mi>z</mi></msub><mo>)</mo></mrow><mn>2</mn></msup>') },
        { math: 'S<sub>y</sub>(&minus;1,89,44.5) = 77.944 p<sub>i</sub>' },
        { text: 'Since the combined stress state (77.9p<sub>i</sub>) is less than the hoop stress (89p<sub>i</sub>), the tangential (hoop) stress will govern the yielding of the material. In this case, we see:' },
        { math: 'p<sub>i</sub> = <span class="fraction"><span>40,000 psi</span><span>89</span></span>' },
        { math: 'p<sub>i</sub> = 449.4 psi' }
      ],
      reference: ''
    },
    {
      id: '1706084', complexity: 'Hard',
      html: 'A tank car pressure relief valve uses a helical spring with squared and ground ends. The special spring is made of 3-mm diameter wire that has a shear modulus of 2.1 &times; 10<sup>9</sup> N/mm<sup>2</sup>. The spring index is 8, and the maximum spring deflection is 15 mm. The maximum operating force is 3.9 &times; 10<sup>6</sup> N. How many total coils must the spring have?',
      choices: ['6', '7', '8', '9'], answer: 2,
      blocks: [
        { text: 'Use the equation for spring index.' },
        { math: 'C = <span class="fraction"><span>D</span><span>d</span></span>' },
        { math: 'D = Cd' },
        { text: 'Deflection and force are related per the following equation:' },
        { math: 'k = <span class="fraction"><span>d<sup>4</sup>G</span><span>8D<sup>3</sup>N</span></span>' },
        { math: 'D = Cd' },
        { math: 'k = <span class="math">(<span class="fraction"><span>d<sup>4</sup>G</span><span>8(Cd)<sup>3</sup>N</span></span>)</span> = <span class="fraction"><span>dG</span><span>8C<sup>3</sup>N</span></span>' },
        { text: 'Rearrange F = kx to k = F/x and plug it into the equation as follows:' },
        { math: 'k = <span class="fraction"><span>dG</span><span>8C<sup>3</sup>N</span></span><br><span class="fraction"><span>F</span><span>x</span></span> = <span class="fraction"><span>dG</span><span>8C<sup>3</sup>N</span></span>' },
        { text: 'Rearrange to solve for N.' },
        { math: 'N = <span class="fraction"><span>dG</span><span>8C<sup>3</sup>(<span class="fraction"><span>F</span><span>x</span></span>)</span></span> = <span class="fraction"><span>3 mm &times; (2.1 &times;10<sup>9</sup> <span class="fraction"><span>N</span><span>mm<sup>2</sup></span></span>)</span><span>8 &times; 8<sup>3</sup> &times; (<span class="fraction"><span>3.9 &times;10<sup>6</sup>N</span><span>15 mm</span></span>)</span></span>' },
        { math: 'N = 5.9157' },
        { text: 'Use the “Compression Spring Dimensions” table to solve for the total number of coils.' },
        { math: 'N<sub>t</sub> = N + 2' },
        { math: 'N<sub>t</sub> = 5.9157 + 2 = 7.9157' },
        { text: 'Round up to the nearest whole number.' },
        { math: 'N<sub>t</sub> = 8' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook, Section 2.16.1 “Springs.”'
    },
    {
      id: '1707007', complexity: 'Hard',
      text: 'The composite beam shown in the figure below, where all dimensions are in inches, is created by gluing three distant regions together. The maximum load P that can be applied to the beam if the shear stress in the adhesive is not to exceed 500 psi is most nearly:',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 57 image.png',
      choices: ['192 lbf', '235 lbf', '2,113 lbf', '2,305 lbf'], answer: 2,
      blocks: [
        { text: 'The shear stress &tau; at a point located a distance y′ from the neutral axis of the cross section is given by:' },
        { math: '&tau; = <span class="fraction"><span>VQ</span><span>Ib</span></span>, &nbsp; and b is the thickness.' },
        { html: 'where<br>V = P<br>is the transverse shear force; Q is the first moment of the area about the neutral axis for the area located above or below, as appropriate, y′;<br>I<br>is the area moment of inertia of the entire cross section about the neutral axis; and t is the thickness of the cross section where the shear stress is being computed. &nbsp; (<i>NCEES PE Mechanical Reference Handbook: Elements of Machine Design and Methodologies: Stress Analysis</i>)' },
        { html: 'The cross section of the beam is broken into the three regions shown in the figure below, where the location of the centroid is indicated by the small circle. Table 1 summarizes for each region: the area, the vertical coordinate of the centroid for the region, area moment of the region about its own centroid (see “Properties of Various Shapes” table in the NCEES PE Mechanical Reference Handbook: Mensuration of Areas and Volumes: Properties of Shapes ), the distance between the region&rsquo;s centroid and section&rsquo;s neutral axis, and the region&rsquo;s area moment of inertia about the section&rsquo;s neutral axis. The region&rsquo;s area moment of inertia about the section&rsquo;s neutral axis was calculated by applying the parallel axis theorem (<i>NCEES PE Mechanical Reference Handbook: Mensuration of Areas and Volumes: Properties of Shapes</i>).' },
        { html: 'Table: Summary of Areas, Centroid Coordinate, Area Moments of Inertias for the Three Regions of the Composite Beam<table class="solution-workflow-table"><thead><tr><th>Region</th><th>Area, in<sup>2</sup><br>(A′)</th><th>Vertical Coordinate of Region Centroid, in<br>(y′)</th><th>Area Moment of Inertia About Region Centroid, in<sup>4</sup><br>(I<sub>xc</sub>)</th><th>Distance Between Region Centroid and Neutral Axis, in<br>(d<sub>y</sub>)</th><th>Moment of Inertia About Neutral Axis, in<sup>4</sup><br>(I′<sub>x</sub>)</th></tr></thead><tbody><tr><td>1</td><td>4.0</td><td>0.50</td><td>0.33</td><td>1.80</td><td>13.29</td></tr><tr><td>2</td><td>3.0</td><td>2.50</td><td>2.25</td><td>0.20</td><td>2.37</td></tr><tr><td>3</td><td>3.0</td><td>4.50</td><td>0.25</td><td>2.20</td><td>14.77</td></tr></tbody></table>' },
        { text: 'Since there is symmetry about the y-axis, we know the x-coordinate for the neutral axis will be 0. The y-coordinate will need to be calculated since the top and bottom flanges of the beam are NOT symmetrical.' },
        { text: 'The formula for the location of centroids can be extrapolated for the location of the neutral axis:' },
        { math: 'y<sub>N</sub>A = &sum;y′<sub>n</sub><span class="fraction"><span>A′<sub>n</sub></span><span>A</span></span>' },
        { html: '&nbsp;&nbsp;&nbsp;&nbsp;where y′<sub>n</sub> is the n<sup>th</sup> region&rsquo;s centroid, A′<sub>n</sub> is the n<sup>th</sup> region&rsquo;s area, and A is the total cross-sectional area of the composite regions.' },
        { math: 'y<sub>N</sub>A = &sum;y′<sub>n</sub><span class="fraction"><span>A′<sub>n</sub></span><span>A</span></span> = [(0.5 in)(<span class="fraction"><span>4.0 in</span><span>10.0 in</span></span>)] + [(2.5 in)(<span class="fraction"><span>3.0 in</span><span>10.0 in</span></span>)] + [(4.5 in)(<span class="fraction"><span>3.0 in</span><span>10.0 in</span></span>)] = 2.30' },
        { text: 'To find the moment of inertia of the composite cross-section about the neutral axis, we utilize the parallel axis theorem to calculate the separate moment of inertias of each component about the neutral axis, and then some the component moment of inertias together:' },
        { math: 'I′<sub>x</sub> for Region 1 = I<sub>xc</sub> + d<sub>y</sub><sup>2</sup>A′ = 0.33 in<sup>4</sup> + (1.8 in)<sup>2</sup>(4.0 in<sup>2</sup>) = 13.29 in<sup>4</sup>' },
        { math: 'I′<sub>x</sub> for Region 2 = I<sub>xc</sub> + d<sub>y</sub><sup>2</sup>A′ = 2.25 in<sup>4</sup> + (0.2 in)<sup>2</sup>(3.0 in<sup>2</sup>) = 2.37 in<sup>4</sup>' },
        { math: 'I′<sub>x</sub> for Region 3 = I<sub>xc</sub> + d<sub>y</sub><sup>2</sup>A′ = 0.25 in<sup>4</sup> + (2.2 in)<sup>2</sup>(3.0 in<sup>2</sup>) = 14.77 in<sup>4</sup>' },
        { text: 'The area moment of inertia of the cross section can be shown to be 30.43 in<sup>4</sup> by summing the contributions from each region.' },
        { html: 'To solve for Q (the first moment area of the region "above" the plane of interest), we use Q=A′ d<sub>y</sub> where d<sub>y</sub> is the distance between the neutral axis and the centroid of the area "above" the plane of interest. Thus we see:' },
        { math: 'Q for Region 1 = A′ d<sub>y</sub> = (4.0in<sup>2</sup>)(1.8in) = 7.2in<sup>3</sup>' },
        { math: 'Q for Region 3 = A′ d<sub>y</sub> = (3.0in<sup>2</sup>)(2.2in) = 6.6in<sup>3</sup>' },
        { text: 'Rearranging Equation (1) for v gives:' },
        { math: 'V = <span class="fraction"><span>Ibt</span><span>Q</span></span>' },
        { text: 'Inspection of the equation above shows that the limiting value of v is obtained by selecting the region having the largest value of Q, which corresponds to the glue line associated with Region 1. Substituting numerical values into the equation gives:' },
        { math: 'V = <span class="fraction"><span>Ibt</span><span>Q</span></span> = <span class="fraction"><span>(30.43 in<sup>4</sup>)(1 in)(500 psi)</span><span>7.2 in</span></span> = 2,113 lbf' },
        { html: 'Notes:<ul><li>Answers A and B are derived by using the maximum normal stress (located at the fixed end) for the glue line of Region 3 and Region 1, respectively.</li><li>Answer D is derived by using the glue line for Region 1 rather than Region 3.</li></ul>' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Mensuration of Areas and Volumes > Properties of Shapes<br><br>NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Stress Analysis'
    },
    {
      id: '1708023', complexity: 'Easy',
      html: 'What component is symbolized by the following ANSI hydraulic power symbol?<br><br><svg width="460" height="150" viewBox="0 0 460 150" aria-label="ANSI nonreturn valve symbol"><line x1="15" y1="75" x2="215" y2="75" stroke="currentColor" stroke-width="4"/><circle cx="255" cy="75" r="37" fill="none" stroke="currentColor" stroke-width="4"/><path d="M222 6 L325 75 L222 144" fill="none" stroke="currentColor" stroke-width="4"/><line x1="325" y1="75" x2="455" y2="75" stroke="currentColor" stroke-width="4"/></svg>',
      choices: ['Coupling', 'Nonreturn valve', 'Shutoff valve', 'Shuttle valve'], answer: 1,
      blocks: [],
      reference: 'NCEES PE Mechanical Reference Handbook > Interpretation of Technical Drawings > Symbols for Drawings'
    },
    {
      id: '1806013', complexity: 'Medium',
      html: 'The cantilevered beam shown below has a modulus of elasticity of 29,000,000 <span class="fraction"><span>lb</span><span>in<sup>2</sup></span></span>, and the moment of inertia is 57.6 in<sup>4</sup>. If a factor of safety of 2.0 is required and the yield strength is 53,000 <span class="fraction"><span>lb</span><span>in<sup>2</sup></span></span>, what is the bending stress at point A?<br><br><svg width="900" height="230" viewBox="0 0 900 230" aria-label="Cantilever beam and I-section"><g fill="none" stroke="currentColor" stroke-width="3"><path d="M25 25h125v28H88v88h62v28H25v-28h62V53H25z"/><path d="M365 25v160m10-145h405m-405 55h405m0-45v75"/><path d="M375 115h405"/><path d="M780 115v38m-8-15 8 15 8-15"/></g><g font-family="Georgia,serif" font-size="18" fill="currentColor"><text x="64" y="205">4 in</text><text x="174" y="110">8 in</text><text x="555" y="34">13.26 ft</text><text x="360" y="130">A</text><text x="785" y="130">B</text><text x="790" y="177">1,000 lb</text></g></svg>',
      choices: ['22,100 <span class="fraction"><span>lb</span><span>in<sup>2</sup></span></span>', '5,050 <span class="fraction"><span>lb</span><span>in<sup>2</sup></span></span>', '11,000 <span class="fraction"><span>lb</span><span>in<sup>2</sup></span></span>', '42,100 <span class="fraction"><span>lb</span><span>in<sup>2</sup></span></span>'], answer: 2,
      blocks: [
        { text: 'The yield strength and FS are irrelevant because they are not needed to determine the maximum bending stress at point A.' },
        { text: 'The stress formula is' },
        { math: '&sigma;<sub>max</sub> = <span class="fraction"><span>&plusmn;Mc</span><span>I</span></span>' },
        { text: 'where y = half of the beam&rsquo;s height (as long as it is uniform).' },
        { text: 'The problem statement provides I, but the shear and moment diagrams below help determine the moment force at A.' },
        { image: 'Screenshots and Questions/Solutions/Mechanical Components & Assemblies/problem 59 image solution.jpg', alt: 'Shear and moment diagrams' },
        { text: 'The maximum moment at A is -159,125 in-lb. Therefore, the equation becomes:' },
        { math: '&sigma;<sub>max</sub> = <span class="fraction"><span>159,125 inlb &times; (4in)</span><span>57.6 in<sup>4</sup></span></span> = 11,050.3 <span class="fraction"><span>lb</span><span>in<sup>2</sup></span></span>' }
      ],
      reference: ''
    },
    {
      id: '1806014', complexity: 'Medium',
      html: 'A cylindrical pressure vessel with an OD of 5.5 ft and a wall thickness of 1.5 in has been filled with butane and pressured up to 500 psi for storage.<br><br>What is the approximate maximum shear stress of the vessel?<br><br>ID = OD - 2t',
      choices: ['6,000 PSI', '500 PSI', '11,000 PSI', '25 PSI'], answer: 0,
      blocks: [
        { text: 'Reference: NCEES PE Mechanical Reference Handbook section 2.19.2' },
        { text: 'Maximum shear stress for Internal Pressure of a Cylindrical Pressure Vessel:' },
        { math: 'OD= 5.5ft= 66in' },
        { math: 'r<sub>o</sub> = OD/2=66in/2=33' },
        { math: 'ID=OD-2t=(66 in)-(2)*(1.5 in)=63 in' },
        { math: 'r<sub>i</sub> = ID/2=63 in/2= 31.5 in' },
        { math: '&sigma; = <span class="fraction"><span>P<sub>i</sub>*r<sub>o</sub><sup>2</sup></span><span>(r<sub>o</sub><sup>2</sup>&minus;r<sub>i</sub><sup>2</sup>)</span></span> = [(500 psi)*(33in)<sup>2</sup>]/[(33in)<sup>2</sup>&minus;(31.5in)<sup>2</sup>] = 5,628 PSI' }
      ],
      reference: 'Refer to the NCEES PE Mechanical Reference Handbook, v.1.3, p.204 for Cylindrical Pressure Vessels'
    },
    {
      id: '20251014', complexity: 'Medium',
      text: 'What is the maximum allowable torsional stress for a hard-drawn wire spring (ASTM A227) with a wire diameter of 0.1 in, using the cold-drawn carbon steel rule for shear stress?',
      choices: ['85.4 ksi', '97.7 ksi', '112.5 ksi', '126.3 ksi'], answer: 1,
      blocks: [
        { html: 'Minimum tensile strength: S<sub>ut</sub> = <span class="fraction"><span>A</span><span>d<sup>m</sup></span></span>' },
        { html: 'Maximum allowable torsional stress: S<sub>ys</sub> = 0.45 &times; S<sub>ut</sub>' },
        { html: 'A = 140 ksi, m = 0.190' },
        { math: 'd = 0.1 in' },
        { math: 'd<sup>m</sup> = (0.1)<sup>0.190</sup> = 0.645' },
        { math: 'S<sub>ut</sub> = <span class="fraction"><span>140</span><span>0.645</span></span> = 217.1 ksi' },
        { math: 'S<sub>ys</sub> = 0.45 &times; 217.1 = 97.7 ksi' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Mechanical Components > Springs > Mechanical Springs'
    },
    {
      id: '20251016', complexity: 'Medium',
      text: 'What is the maximum allowable applied force on a helical torsion spring made of hard-drawn wire (ASTM A227) with a wire diameter of 0.1 in, a mean coil diameter of 1.0 in, a radius to load of 0.5 in, and an allowable bending stress of 170 ksi?',
      choices: ['7.8 lbf', '15.6 lbf', '23.5 lbf', '30.9 lbf'], answer: 3,
      blocks: [
        { math: 'Spring index: C = <span class="fraction"><span>D</span><span>d</span></span>' },
        { math: 'Correction factor: K<sub>i</sub> = <span class="fraction"><span>4C<sup>2</sup> &minus; C &minus; 1</span><span>4C(C &minus; 1)</span></span>' },
        { math: 'Bending stress: &sigma; = K<sub>i</sub> <span class="fraction"><span>32 &times; F &times; r</span><span>&pi; &times; d<sup>3</sup></span></span>' },
        { math: 'Solve for force: F = <span class="fraction"><span>&sigma; &times; &pi; &times; d<sup>3</sup></span><span>32 &times; r &times; K<sub>i</sub></span></span>' },
        { html: 'D = 1.0 in; d = 0.1 in; r = 0.5 in; &sigma; = 170 ksi' },
        { math: 'C = <span class="fraction"><span>1.0</span><span>0.1</span></span> = 10' },
        { math: 'K<sub>i</sub> = <span class="fraction"><span>4 &times; 10<sup>2</sup> &minus; 10 &minus; 1</span><span>4 &times; 10 &times; (10 &minus; 1)</span></span> = <span class="fraction"><span>400 &minus; 10 &minus; 1</span><span>360</span></span> = <span class="fraction"><span>389</span><span>360</span></span> &asymp; 1.0806' },
        { math: 'F = <span class="fraction"><span>170000 &times; &pi; &times; (0.1)<sup>3</sup></span><span>32 &times; 0.5 &times; 1.0806</span></span>' },
        { math: '= <span class="fraction"><span>170000 &times; 3.1416 &times; 0.001</span><span>17.2896</span></span>' },
        { math: '= 30.9 lbf' }
      ],
      reference: ''
    },
    {
      id: '20251027', complexity: 'Medium',
      text: 'A helical compression spring has squared and ground ends. The wire diameter is 0.12 in, the mean coil diameter is 0.9 in, the number of active coils is 8, and the spring is compressed to its solid length. The applied force is 60 lbf. What is the shear stress in the wire?',
      choices: ['78.3 ksi', '84.6 ksi', '94.3 ksi', '97.8 ksi'], answer: 2,
      blocks: [
        { math: 'Spring index: C = <span class="fraction"><span>D</span><span>d</span></span>' },
        { math: 'Correction factor: K<sub>s</sub> = <span class="fraction"><span>4C + 2</span><span>4C &minus; 3</span></span>' },
        { math: 'Shear stress: &tau; = K<sub>s</sub> &times; <span class="fraction"><span>8F &times; D</span><span>&pi; &times; d<sup>3</sup></span></span>' },
        { math: 'Solid length for squared and ground ends: L<sub>s</sub> = d &times; N<sub>t</sub>' },
        { math: 'Total coils: N<sub>t</sub> = N + 2' },
        { text: 'Additional information:' },
        { math: 'N<sub>t</sub> = N + 2 = 10' },
        { math: 'L<sub>s</sub> = d &times; N<sub>t</sub> = 0.12 &times; 10 = 1.2 in (used to ensure spring is compressed to solid)' },
        { math: 'd = 0.12 in, D = 0.9 in, F = 60 lbf, N = 8' },
        { math: 'C = <span class="fraction"><span>0.9</span><span>0.12</span></span> = 7.5' },
        { math: 'K<sub>s</sub> = <span class="fraction"><span>4 &times; 7.5 + 2</span><span>4 &times; 7.5 &minus; 3</span></span> = <span class="fraction"><span>32</span><span>30 &minus; 3</span></span> = <span class="fraction"><span>32</span><span>37</span></span> = 1.185' },
        { math: '&tau; = 1.185 &times; <span class="fraction"><span>8 &times; 60 &times; 0.9</span><span>&pi; &times; 0.12<sup>3</sup></span></span>' },
        { math: '&tau; &asymp; 94.299 ksi' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Mechanical Components > Springs'
    },
    {
      id: '20251028', complexity: 'Easy',
      text: 'Which of the following best describes the purpose of a damping mechanism in a single-degree-of-freedom vibration system?',
      choices: ['To increase the natural frequency of the system', 'To prevent all oscillations regardless of the disturbance', 'To dissipate energy and reduce the amplitude of vibrations over time', 'To make system vibrate more'], answer: 2,
      blocks: [
        { text: 'Damping introduces energy loss (usually due to friction or resistance), which reduces the amplitude of free or forced vibrations. It does not eliminate all motion but prevents sustained oscillations.' }
      ],
      reference: ''
    },
    {
      id: '20251029', complexity: 'Medium',
      html: 'A machine is mounted on a base that experiences periodic motion. The system has a damping ratio of &zeta; = 0.2. If the excitation frequency is twice the natural frequency of the system (r = &omega; / &omega;<sub>n</sub> = 2), estimate the transmissibility ratio (F<sub>t</sub> / kY).',
      choices: ['0.3', '0.5', '0.8', '1.4'], answer: 3,
      blocks: [
        { text: 'From the transmissibility chart:' },
        { html: '&bull; At &zeta; = 0.2 and r = 2, follow the vertical line from r = 2 until it intersects the &zeta; = 0.2 curve.' },
        { html: '&bull; At this intersection, the transmissibility ratio (F<sub>t</sub> / kY) is approximately 1.4. (see illustration)' },
        { image: 'Screenshots and Questions/Solutions/Mechanical Components & Assemblies/problem 65 image solution.jpg', alt: 'Transmitting vibrations chart' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook v. 2.0 > Machine Design and Materials > Vibration/Dynamic Analysis > Vibration Transmissibility, Base Motion'
    },
    {
      id: '20251030', complexity: 'Medium',
      html: 'A mechanical system behaves like a spring&ndash;mass system and has a static deflection &delta;<sub>st</sub> of 0.05 ft under its own weight. Assuming no damping, what is the natural frequency of vibration of the system?',
      choices: ['1.42 Hz', '2.25 Hz', '4.04 Hz', '5.47 Hz'], answer: 2,
      blocks: [
        { text: 'Natural frequency:' },
        { math: 'f = <span class="fraction"><span>1</span><span>2&pi;</span></span> &times; ' + componentFractionRoot('<mi>g</mi>', '<msub><mi>&delta;</mi><mi>st</mi></msub>') },
        { text: 'Given:' },
        { math: '&delta;<sub>st</sub> = 0.05 ft<br>g = 32.2 ft/sec<sup>2</sup>' },
        { math: 'f = <span class="fraction"><span>1</span><span>2&pi;</span></span> &times; ' + componentFractionRoot('<mn>32.2</mn>', '<mn>0.05</mn>') },
        { math: '&asymp; <span class="fraction"><span>1</span><span>6.283</span></span> &times; ' + componentExpressionRoot('<mn>644</mn>') },
        { math: '&asymp; 0.1592 &times; 25.38' },
        { math: '&asymp; 4.04 Hz' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Vibration/Dynamic Analysis > Free Vibration'
    },
    {
      id: '20251144', complexity: 'Easy',
      html: '<strong>True or False:</strong> The design of a pressurized vessel must account for both internal pressure and external environmental conditions.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { html: '<strong>Explanation:</strong> Pressurized vessels must be designed to withstand the internal pressure as well as external conditions like temperature, corrosion, and mechanical stresses.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Pressure Vessels > Cylindrical Pressure Vessel'
    },
    {
      id: '20251146', complexity: 'Easy',
      html: '<strong>True or False:</strong> Pneumatic systems are typically used for applications requiring high force generation.',
      choices: ['True', 'False'], answer: 1,
      blocks: [
        { html: '<strong>Explanation:</strong> Pneumatic systems are generally used for lighter applications, as they can generate lower forces compared to hydraulic systems, which are better suited for high-force tasks.' }
      ],
      reference: ''
    },
    {
      id: '20251147', complexity: 'Easy',
      html: '<strong>True or False:</strong> Beams are typically designed to resist bending and shear forces.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Beams are structural elements designed to resist bending due to applied loads and shear forces that act across their length.' }
      ],
      reference: ''
    },
    {
      id: '20251148', complexity: 'Easy',
      html: '<strong>True or False:</strong> The stiffness of a spring (its spring constant, k) is solely a material property.',
      choices: ['True', 'False'], answer: 1,
      blocks: [
        { text: 'The spring k constant is not solely a material property. While it depends on material properties (like Young’s modulus), it also depends on the geometry of the spring (wire diameter, coil diameter, number of coils, length, etc.).' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Machine Design and Materials > Mechanical Components > Springs > Spring Energy'
    },
    {
      id: '20251149', complexity: 'Easy',
      html: '<strong>True or False:</strong> Damping is used to reduce the amplitude of vibrations in mechanical systems.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Damping is the process of reducing the amplitude of vibrations by dissipating energy, often using materials or devices that resist motion.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251150', complexity: 'Easy',
      html: '<strong>True or False:</strong> A gear mechanism is an example of a simple machine.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Gears are considered simple machines that transmit torque and rotational motion, often used to change the speed or direction of motion in a system.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251151', complexity: 'Easy',
      html: '<strong>True or False:</strong> Mechatronics combines mechanical, electrical, and computing systems to enhance automation and control.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Mechatronics is an interdisciplinary field that integrates mechanical, electrical, and computing systems to design smarter, more efficient automated systems.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251158', complexity: 'Easy',
      html: '<strong>True or False:</strong> The material selection for pressurized vessels is based primarily on strength and corrosion resistance.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Material selection for pressurized vessels prioritizes strength to withstand internal pressure and corrosion resistance to maintain the vessel\'s integrity under operating conditions.' }
      ],
      reference: ''
    },
    {
      id: '20251159', complexity: 'Easy',
      html: '<strong>True or False:</strong> Pneumatic actuators are generally used in applications that require high force output.',
      choices: ['True', 'False'], answer: 1,
      blocks: [
        { text: 'Pneumatic actuators are generally used for lighter applications due to the lower forces produced by compressed air, while hydraulic actuators are used in high-force applications.' }
      ],
      reference: ''
    },
    {
      id: '20251160', complexity: 'Easy',
      html: '<strong>True or False:</strong> A truss is typically less efficient than a solid beam in handling a given load.',
      choices: ['True', 'False'], answer: 1,
      blocks: [
        { text: 'A truss is more efficient than a solid beam because it uses a series of interconnected triangular components, distributing loads effectively and using less material.' }
      ],
      reference: ''
    },
    {
      id: '20251161', complexity: 'Easy',
      html: '<strong>True or False:</strong> Compression springs are designed to resist compressive forces by shortening when loaded.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Compression springs are designed to resist compressive forces by shortening as they are compressed, providing force resistance and energy storage.' }
      ],
      reference: ''
    },
    {
      id: '20251162', complexity: 'Easy',
      html: '<strong>True or False:</strong> Resonance is the frequency at which a vibrating system experiences the largest amplitude of oscillation.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'Resonance occurs when the frequency of an external force matches the system’s natural frequency, causing large oscillations that can lead to system failure.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251163', complexity: 'Easy',
      html: '<strong>True or False:</strong> A pulley is a type of simple machine that can change the direction of a force.',
      choices: ['True', 'False'], answer: 0,
      blocks: [
        { text: 'A pulley is a simple machine that allows for the direction of an applied force to be altered, typically used to lift or move heavy loads.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251165', complexity: 'Easy',
      html: '<strong>True or False:</strong> A basic control system in mechatronics never involves feedback to adjust system performance.',
      choices: ['True', 'False'], answer: 1,
      blocks: [
        { text: 'Basic control systems often use feedback to adjust and optimize system performance, ensuring that the system operates within desired parameters.' }
      ],
      reference: 'General Knowledge'
    },
    {
      id: '20251199', complexity: 'Easy',
      text: 'What is the main purpose of a pressurized vessel in a mechanical system?',
      choices: ['To safely contain gases or liquids under high pressure', 'To improve the aesthetic appearance of the piping system', 'To increase the temperature of fluids without using external heat', 'To act as a structural support for rotating machinery'], answer: 0,
      blocks: [
        { text: 'Pressurized vessels are designed to hold liquids or gases under pressure, often used in systems like boilers, reactors, and air tanks.' }
      ],
      reference: ''
    },
    {
      id: '20251201', complexity: 'Easy',
      text: 'A hydraulic cylinder has a piston with a 1-in radius. If 400 psi is applied to the piston via the hydraulic fluid, what force is exerted on the cylinder to extend it?',
      choices: ['458 lb', '689 lb', '1,257 lb', '1,363 lb'], answer: 2,
      blocks: [
        { text: 'Use the formula:' },
        { math: 'F<sub>R</sub> = <span class="fraction"><span>&pi;D<sup>2</sup></span><span>4</span></span>P<sub>R</sub>' },
        { math: '= <span class="fraction"><span>&pi;(2<sup>2</sup>)</span><span>4</span></span>(400 psi) = 1,256.6 lb' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Hydraulics, Fluids, and Pipe Flow > Fluid Flow Machinery > Force and Pressure to Extend Cylinder'
    },
    {
      id: '20251202', complexity: 'Easy',
      text: 'What can be used to direct the flow of fluids and gases in pipes in an industrial setting?',
      choices: ['Control valve', 'Pressure-reducing valve', 'Ball valve', 'Socket valve'], answer: 0,
      blocks: [
        { text: 'Control valves do just as their name suggests: control the flow of fluid or gases through a system. Pressure-reducing valves lower the pressure between the valve ends. Ball valves, a type of control valve, can function as shut-off or check valves, but are not typically suitable for gases.' }
      ],
      reference: ''
    },
    {
      id: '20251204', complexity: 'Easy',
      text: 'What is the total current in the circuit below?',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 84 image.jpg',
      choices: ['1.2 A', '5.7 A', '7.5 A', '8.0 A'], answer: 2,
      blocks: [
        { text: 'Using Ohms law, solve for amps for each complete loop:' },
        { math: 'V = IR derived to I = <span class="fraction"><span>V</span><span>R</span></span>' },
        { text: 'Loop 1' },
        { math: 'I<sub>1</sub> = <span class="fraction"><span>12 V</span><span>8 &Omega;</span></span> = 1.5 A' },
        { text: 'Loop 2' },
        { math: 'I<sub>2</sub> = <span class="fraction"><span>12 V</span><span>2 &Omega;</span></span> = 6 A' },
        { text: 'Add the amps to find the total current in the circuit.' },
        { math: 'I<sub>TOT</sub> = I<sub>1</sub> + I<sub>2</sub> = 1.5 A + 6 A<br>= 7.5 A' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Basic Engineering Practice > Electrical Concepts of Motors > Basic Circuits > Ohm&rsquo;s Law'
    },
    {
      id: '91704043', complexity: 'Medium',
      text: 'A pressure vessel has an inner diameter of 36 in and is made from a 0.25-in-thick steel plate. It is pressurized to 375 psi. What is most nearly the maximum tangential stress?',
      choices: ['26,440 psi', '27,000 psi', '26,800 psi', '26,000 psi'], answer: 1,
      blocks: [
        { text: 'Check if the thin-walled assumption can be used:' },
        { math: '<span class="fraction"><span>D</span><span>t</span></span> &gt; 10?' },
        { math: '<span class="fraction"><span>36</span><span>.25</span></span> = 144 &rarr; Yes' },
        { math: '&sigma;<sub>t</sub> = <span class="fraction"><span>PD</span><span>2t</span></span> = <span class="fraction"><span>375 psi &times; 36 in</span><span>(2 &times; .25 in)</span></span> = 27,000 psi' }
      ],
      reference: ''
    },
    {
      id: '91706070', complexity: 'Medium',
      html: 'A block is connected to springs as shown below and sitting on a table. The coefficient of static friction between the block and the table is .30 and the coefficient of dynamic friction is .15. How far can the block be pushed, then released, before it would slide back toward its original position?',
      image: 'Screenshots and Questions/Questions/Mechanical Components & Assemblies Questions/problem 86 image.png',
      choices: ['7.2 mm', '5.6 mm', '4.0 mm', '6.24 mm'], answer: 1,
      blocks: [
        { text: 'Find equivalent springs:' },
        { math: 'K<sub>eq1</sub> = 20 N/mm + 13 N/mm = 33 N/mm' },
        { math: 'K<sub>eq</sub> = <span class="paren">(</span><span class="fraction"><span>1</span><span>K<sub>eq1</sub></span></span> + <span class="fraction"><span>1</span><span>30 N/mm</span></span><span class="paren">)</span><sup>&minus;1</sup> = <span class="paren">(</span><span class="fraction"><span>1</span><span>33 N/mm</span></span> + <span class="fraction"><span>1</span><span>30 N/mm</span></span><span class="paren">)</span><sup>(&minus;1)</sup> = 15.7 N/mm' },
        { text: 'Find the force required to move the block:' },
        { math: 'F<sub>slipping</sub> = 30 kg &times; (9.8 m/s<sup>2</sup>) &times; .3 = 88.2 N' },
        { math: 'F<sub>slipping</sub> = K<sub>eq</sub> &times; x = 88.2 N = 15.7 N/mm &times; x' },
        { math: 'x = 5.6 mm' }
      ],
      reference: ''
    },
    {
      id: '91706071', complexity: 'Hard',
      text: 'A helical compression spring has a mean diameter of 0.394 inches. The spring is made from ASTM 228 music wire. The spring has a spring index, C = 7. The design requires a 2.25 factor of safety when a 600-lbf load is imparted on the spring. Is the spring sufficient for the task? Yes or no?',
      choices: ['Yes', 'No'], answer: 1,
      blocks: [
        { text: 'Based on NCEES PE Mechanical Reference Handbook > Machine Design > Mechanical Components > Mechanical Springs' },
        { math: '&tau; = K<sub>s</sub><span class="fraction"><span>8FD</span><span>&pi;d<sup>3</sup></span></span> and C = <span class="fraction"><span>D</span><span>d</span></span>' },
        { math: 'C and D are known, so d = D/C = 0.394in./7 = 0.056286in.' },
        { math: 'K<sub>s</sub> = <span class="fraction"><span>4C + 2</span><span>4C &minus; 3</span></span> = 1.2' },
        { math: '&tau; = K<sub>s</sub><span class="fraction"><span>8FD</span><span>&pi;d<sup>3</sup></span></span> = 1.2<span class="fraction"><span>8(600lbf)0.394in<sup>2</sup></span><span>&pi;(0.056286in.)<sup>3</sup></span></span> = 4,053,105 psi' },
        { math: 'S<sub>ut</sub> = <span class="fraction"><span>A</span><span>d<sup>m</sup></span></span> = <span class="fraction"><span>201,000 psi</span><span>0.056286<sup>0.145</sup></span></span> = 305,062 psi' },
        { math: '&tau;<sub>allow</sub> = <span class="fraction"><span>(0.45)S<sub>ut</sub></span><span>n</span></span> = <span class="fraction"><span>(0.45) 305,062 psi</span><span>2.25</span></span> = 61,012 psi' },
        { math: '&tau; &gt; &tau;<sub>allow</sub>' }
      ],
      reference: ''
    }
  ],
  transmission: [
    {
      id: '1701037', complexity: 'Easy',
      html: 'What is the synchronous speed of a 4-pole, 230-V, 1&Oslash;, 60-Hz electric motor?',
      choices: ['3,600 rpm', '2,400 rpm', '1,800 rpm', '1,200 rpm'], answer: 2,
      blocks: [
        { image: 'Screenshots and Questions/Solutions/Power Transmission/problem 1 solution image.png', alt: 'Synchronous motor speeds table' },
        { text: 'The number of poles and the frequency are the only variables in determining the synchronous speed of electric motors.' },
        { math: 'Sync Speed = <span class="fraction"><span>120 &times; f</span><span># poles</span></span> = <span class="fraction"><span>120 &times; 60 Hz</span><span>4</span></span> = 1,800 rpm' },
        { text: 'The table on p. 81 of PEMRH may be used to determine the synchronous speed of electric motors. However, it should be noted that the table is only valid for motors operating on a 60-Hz power grid.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Electrical Concepts of Motors > Synchronous Motor Speeds'
    },
    {
      id: '1702019', complexity: 'Hard',
      html: 'A statically balanced 0.25m diameter crank shaft has its axis of rotation aligned with the vertical, z, axis and is supported by two 6005 single-row deep-groove ball bearings, one each at the top and bottom of the crank shaft, separated by a distance of 1 m. Reference the sketch below. The bearings have a static basic load rating of 6,550 N and a dynamic basic load rating of 11,200 N. The crank shaft is symmetric about the xz plane and has a mass of 5.21 kg and the following mass moments of inertia about its center of mass:',
      image: 'Screenshots and Questions/Questions/Power Transmission Questions/problem 2 image.png',
      afterImageHtml: 'I<sub>xx</sub> = 0.524 kg m<sup>2</sup><br><br>I<sub>yy</sub> = 0.371 kg m<sup>2</sup><br><br>I<sub>zz</sub> = 0.153 kg m<sup>2</sup><br><br>I<sub>xy</sub> = 0.0 kg m<sup>2</sup><br><br>I<sub>xz</sub> = 0.0 kg m<sup>2</sup><br><br>I<sub>yz</sub> = 0.0851 kg m<sup>2</sup><br><br>which is located on the axis of rotation and is equidistant from each bearing center. Assuming that the top bearing takes no vertical load and the crank shaft rotates at a constant rotational speed of 500 rpm, the magnitude of the reaction force on the bottom bearing is closest to:',
      choices: ['51 N', '233 N', '239 N', '21,275 N'], answer: 0,
      blocks: [
        { text: 'The external forces acting on the crank shaft are the weight force and bearing reaction forces. Let the top bearing reaction be represented by the vector' },
        { math: '<img class="vector-symbol" src="Screenshots and Questions/Solutions/Power Transmission/A_arrow.svg" alt="A vector"> = (A<sub>x</sub>, A<sub>y</sub>, 0)' },
        { text: ', the bottom bearing reaction by the vector' },
        { math: '<img class="vector-symbol" src="Screenshots and Questions/Solutions/Power Transmission/B_arrow.svg" alt="B vector"> = (B<sub>x</sub>, B<sub>y</sub>, B<sub>z</sub>), and the weight by W = mg, where m is the mass and g is the acceleration due to gravity.' },
        { image: 'Screenshots and Questions/Solutions/Power Transmission/problem 2 solution image.jpg', alt: 'Crankshaft free-body diagram' },
        { text: 'Note first that the mass center lies on the axis of rotation and, therefore, does not accelerate. Writing Newton&rsquo;s second law in component form gives:' },
        { math: '&sum;F<sub>x</sub> = ma<sub>x</sub> = 0 = A<sub>x</sub> + B<sub>x</sub><br>&nbsp;&nbsp;&nbsp;&nbsp;(Eqn 1)' },
        { math: '&sum;F<sub>y</sub> = ma<sub>y</sub> = 0 = A<sub>y</sub> + B<sub>y</sub><br>&nbsp;&nbsp;&nbsp;&nbsp;(Eqn 2)' },
        { math: '&sum;F<sub>z</sub> = ma<sub>z</sub> = 0 = B<sub>z</sub> &minus; W<br>&nbsp;&nbsp;&nbsp;&nbsp;(Eqn 3)' },
        { text: 'We see that a constant rotation of 500rpm indicates the shaft is NOT experiencing angular acceleration, thus &alpha;=0. Hence, evaluating the equilibrium equations for the rotational degrees of freedom yields:' },
        { math: '&sum;M<sub>x</sub> = &minus;I<sub>yz</sub>&alpha; = [(&minus;A<sub>y</sub>L)/2] + [(B<sub>y</sub>L)/2] = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;(Eqn 4)' },
        { math: '&sum;M<sub>y</sub> = &minus;I<sub>xz</sub>&alpha; = <span class="fraction"><span>A<sub>x</sub>L</span><span>2</span></span> &minus; [<span class="fraction"><span>B<sub>x</sub>L</span><span>2</span></span>] = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;(Eqn 5)' },
        { math: '&sum;M<sub>z</sub> = I<sub>zz</sub>&alpha; = 0<br>&nbsp;&nbsp;&nbsp;&nbsp;(Eqn 6)' },
        { html: 'From Eqn1, we see that A<sub>x</sub>=-B<sub>x</sub>. From Eqn5, we see A<sub>x</sub>=B<sub>x</sub>. These two equations can only be true if the values are zero, i.e., A<sub>x</sub>=B<sub>x</sub>=0. Additionally, Eqn2 indicates A<sub>y</sub>=-B<sub>y</sub>, thus, Eqn4 becomes:' },
        { math: '0 = (&minus; (&minus;B<sub>y</sub>)L/2) + (B<sub>y</sub>L/2) = B<sub>y</sub>L<br>&nbsp;&nbsp;&nbsp;&nbsp;(Eqn 7)' },
        { math: 'B<sub>y</sub> = 0 N' },
        { math: 'From Eqn 3,we see: &nbsp; B<sub>z</sub> = W = mg = (5.21 kg)(9.81 m/s<sup>2</sup>) = 51 N' },
        { math: 'Thus, we see <img class="vector-symbol" src="Screenshots and Questions/Solutions/Power Transmission/B_arrow.svg" alt="B vector"> = (B<sub>x</sub>,B<sub>y</sub>,B<sub>z</sub>) = (0,0,51)N, which has a magnitude of 51 N.' }
      ],
      reference: ''
    },
    {
      id: '1702033', complexity: 'Medium',
      html: 'A 10 hp motor producing a torque of 25 ft-lbs spins a flywheel up to a steady state. If the motor is then turned off, and its internal friction decelerates the flywheel at 10 rad/s<sup>2</sup>, what value is closest to the time it takes the flywheel to stop?',
      choices: ['12 s', '22 s', '32 s', '42 s'], answer: 1,
      blocks: [
        { text: 'Determine the initial speed of the flywheel.' },
        { html: 'Refer to <i>NCEES PE Mechanical Reference Handbook:</i> Belts, Pulleys and Chain Drives' },
        { math: 'hp = <span class="fraction"><span>T &times; n</span><span>63,025</span></span>' },
        { math: 'n = <span class="fraction"><span>63,025 &times; hp</span><span>T</span></span>' },
        { math: 'n = <span class="fraction"><span>63,025 &times; 10 hp</span><span>25 ft &minus; lb <span class="fraction"><span>12 in</span><span>1 ft</span></span></span></span> = 2,100.83 rpm' },
        { text: 'Convert to rad/s:' },
        { math: '&omega; = 2,100.83 rev/min &times; <span class="fraction"><span>2&pi; rad</span><span>1 rev</span></span> &times; <span class="fraction"><span>1 min</span><span>60 s</span></span> = 220.0 rad/s' },
        { text: 'Now, calculate the time to slow down:' },
        { html: 'Refer to <i>NCEES PE Mechanical Reference Handbook:</i> Laws of Motion: Normal and Tangential Components' },
        { math: '&omega;(t) = a<sub>o</sub>(t&minus;t<sub>o</sub>) + &omega;<sub>o</sub>' },
        { math: '0 = &minus;10 rad/s<sup>2</sup>(t) + 220 rad/s' },
        { math: 't = 22 s' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Laws of Motion > Normal and Tangential Components\n\nNCEES PE Mechanical Reference Handbook > Belts, Pulleys and Chain Drives'
    },
    {
      id: '1704027', complexity: 'Medium',
      text: 'A motor is attached to a 2-in diameter shaft transmitting 300 ft-lbf of torque. The shaft transmits the torque to a coupling via a 0.25-in square key that is 3.5 in long. The key is made from L2 tool steel. Assume shear stress is 60% of tensile yield. The safety factor of this key is most nearly:',
      choices: ['5', '10', '12', '15'], answer: 2,
      blocks: [
        { text: 'Begin by finding the yield strength of the steel:' },
        { html: '(NCEES <i>PE Mechanical Reference Handbook:</i> Properties of Materials: Material Properties)' },
        { math: 'Yield = 102 ksi = 102,000 psi' },
        { text: 'Calculate shear based on the given assumption:' },
        { math: 'Shear = 60% &times; Yield' },
        { math: 'Shear = 0.6 &times; 102,000 psi = 61,200 psi' },
        { text: 'Determine the force at key given shaft size and motor torque given:' },
        { math: '2 in diameter = 1 in radius' },
        { math: 'T = Fr' },
        { math: '300ft &minus; lb &times; <span class="fraction"><span>12 in</span><span>1 ft</span></span> = 3,600 in &minus; lb' },
        { math: '<span class="fraction"><span>3,600 in &minus; lb</span><span>1 in</span></span> = 3,600 lbf' },
        { math: 'F = 3,600 lbf' },
        { html: 'Use keyway equations to determine the factor of safety from the <i>NCEES PE Mechanical Reference Handbook,</i> v. 1.3, p.167.' },
        { text: 'To verify if the strength of the key in shear, we utilize:' },
        { math: '<span class="fraction"><span>S<sub>sy</sub></span><span>n</span></span> = <span class="fraction"><span>F</span><span>tl</span></span>' },
        { math: '<span class="fraction"><span>S<sub>sy</sub></span><span>n</span></span> = <span class="fraction"><span>F</span><span>tl</span></span>' },
        { math: '<span class="fraction"><span>61,200 psi</span><span>n</span></span> = <span class="fraction"><span>3,600 lbf</span><span>0.25 in &times; 3.5 in</span></span>' },
        { math: 'n = 14.87' },
        { text: 'To verify if the strength of the key in crushing (normal stress), we utilize:' },
        { math: '<span class="fraction"><span>S<sub>y</sub></span><span>n</span></span> = <span class="fraction"><span>F</span><span>tl/2</span></span>' },
        { math: '<span class="fraction"><span>102,000 psi</span><span>n</span></span> = <span class="fraction"><span>3,600 lbf</span><span>0.25 in &times; 3.5 in/2</span></span>' },
        { math: 'n = 12.40' },
        { text: 'The lowe safety factor governs' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > 2.16.4 Power Transmission > 2.16.4.1 Shafts and Axles, Keyway\n\nNCEES PE Mechanical Reference Handbook > Properties of Materials > Material Properties'
    },
    {
      id: '1704028', complexity: 'Easy',
      text: 'A motor output shaft must be reduced in size to fit the pulley it will be driving. This will create a round shaft with a shoulder. The smaller diameter shaft will then be able to fit the pulley. What design options can be used to reduce the stress concentration at the shoulder?',
      image: 'Screenshots and Questions/Questions/Power Transmission Questions/problem 5 image.png',
      choices: ['Reduce the size of the radius of the fillet &ldquo;r&rdquo;', 'Increase the size of the radius of fillet &ldquo;r&rdquo;', 'Find a motor with an output shaft D1 that is as close to the size of shaft D2', 'Both B and C'], answer: 3,
      blocks: [
        { text: 'Refer to section 2.14 [charts of theoretical stress concentration factors K] p.154.' },
        { html: 'The round shaft in torsion is governed by two factors: <i>D/d</i> and <i>r/d</i>.' },
        { html: 'In this case, D/d is D1/D2 and r/d is r/D2.' },
        { text: 'As r is reduced, r/D2 becomes smaller and smaller and all lines for the value of K begin to increase.' },
        { text: 'Additionally, as the ratio of D1/D2 increases, the higher on the graph line must be used and a higher value of K is given.' },
        { text: 'Therefore, a larger fillet radius and a smaller D1 size are the two options that can be used to reduce the stress concentration.' }
      ],
      reference: ''
    },
    {
      id: '1705015', complexity: 'Medium',
      text: 'A machine has an imbalanced shaft with a mass of 12 lbm. The center of mass is 1.0 in from the center of rotation, and the shaft is rotating at 9,000 rpm. What is the maximum vertical force experienced by the machine due to the rotating imbalance?',
      choices: ['12,500 lbf', '27,600 lbf', '331,200 lbf', '887,000 lbf'], answer: 1,
      blocks: [
        { text: 'Find the angular velocity:' },
        { math: '&omega; = 9,000 rpm &times; 1 min/60 s &times; 2 &times; &pi; = 942 rad/s' },
        { math: 'F = m &times; a' },
        { text: 'Find acceleration:' },
        { math: 'a = <span class="fraction"><span>v<sup>2</sup></span><span>r</span></span> and v = &omega; &times; r, so a = &omega;<sup>2</sup> &times; r' },
        { text: 'Force' },
        { math: 'F = <span class="fraction"><span>m</span><span>g<sub>c</sub></span></span> &times; r &times; &omega;<sup>2</sup> = (12 lbm / 32.2 <span class="fraction"><span>lbm &minus; ft</span><span>lbf &minus; sec<sup>2</sup></span></span>) &times; (1 in &times; 1 ft / 12 in) &times; (942 rad/s)<sup>2</sup> = 27,600 lbf' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Laws of Motion > Centripetal Acceleration'
    },
    {
      id: '1706006', complexity: 'Medium',
      html: 'Consider a pulley with a cable running over it, creating an angle of wrap of 90&deg;. The pulley can rotate on its axis &ldquo;O&rdquo;. However, one end of the cable is being pulled by an applied force. The other end of the cable holds a mass of 6.0 kg. If the coefficient of friction between the pulley and the cable is f = 0.33, what is the value of the applied force if the cable is to move in the direction of the applied force?',
      image: 'Screenshots and Questions/Questions/Power Transmission Questions/problem 7 image.png',
      choices: ['75 N', '99 N', '120 N', '80 N'], answer: 1,
      blocks: [
        { text: 'The belt friction equation is:' },
        { math: 'F<sub>max</sub> = (F<sub>min</sub>)(e<sup>f&theta;</sup>) where &theta; = 90&deg; = <span class="fraction"><span>&pi;</span><span>2</span></span> radians' },
        { math: 'To move in the direction of F<sub>A</sub>, the force on that side of the pulley must be F<sub>max</sub>.' },
        { math: 'F<sub>A</sub> = F<sub>max</sub> = (58.9 N)(1.68) = 99 N' }
      ],
      reference: ''
    },
    {
      id: '1706007', complexity: 'Easy',
      html: 'Which of the following options cannot be used to calculate the velocity ratio (VR) for a pair of gears?',
      choices: [
        '<span class="fraction"><span>p<sub>pinion</sub></span><span>p<sub>gear</sub></span></span>',
        '<span class="fraction"><span>r<sub>gear</sub></span><span>r<sub>pinion</sub></span></span>',
        '<span class="fraction"><span>&omega;<sub>pinion</sub></span><span>&omega;<sub>gear</sub></span></span>',
        '<span class="fraction"><span>n<sub>pinion</sub></span><span>n<sub>gear</sub></span></span>'
      ], answer: 0,
      blocks: [
        { text: 'The velocity ratio of a pair of gears can be defined as' },
        { math: 'VR = <span class="fraction"><span>n<sub>pinion</sub></span><span>n<sub>gear</sub></span></span> = <span class="fraction"><span>&omega;<sub>pinion</sub></span><span>&omega;<sub>gear</sub></span></span> = <span class="fraction"><span>r<sub>gear</sub></span><span>r<sub>pinion</sub></span></span> = <span class="fraction"><span>N<sub>gear</sub></span><span>N<sub>pinion</sub></span></span>' },
        { text: 'The ratio of the pitch of the gears cannot be used to determine the velocity ratio.' }
      ],
      reference: ''
    }
  ],
  supportive: [
    {
      id: '1701011', complexity: 'Medium',
      text: 'A pipe company has a process producing pipe couplings. Couplings must meet the following specification: Diameter 0.75 in +/- 0.005 in. Five samples of five couplings each are taken from the production line and the results are shown below. Determine how many samples fall outside the control limits of the average chart.',
      image: 'Screenshots and Questions/Questions/Supportive Knowledge Questions/problem 1 image.jpg',
      choices: ['0', '1', '2', '3'], answer: 2,
      blocks: [
        { text: 'First begin by determining the Xbar and Rbar needed for the ULL and LLL.' },
        { html: 'Refer to the NCEES <i>PE Mechanical Reference Handbook:</i> Statistical Quality Control.' },
        { math: 'X&#772; = &sum;<sub>i=1</sub><sup>K</sup> <span class="fraction"><span>X&#772;<sub>i</sub></span><span>K</span></span>' },
        { math: 'X&#772; = <span class="fraction"><span>(0.7503 + 0.7502 + 0.7498 + 0.7497 + 0.7507)</span><span>5</span></span>' },
        { math: 'X&#772; = 0.7501' },
        { math: 'R&#772; = &sum;<sub>i=1</sub><sup>K</sup> <span class="fraction"><span>R&#772;<sub>i</sub></span><span>K</span></span>' },
        { math: 'R&#772; = <span class="fraction"><span>0.0003 + 0.0006 + 0.0004 + 0.0007 + 0.0006</span><span>5</span></span>' },
        { html: 'Determine A<sub>2</sub> from NCEES <i>PE Mechanical Reference Handbook:</i> Statistical Quality Control.' },
        { html: 'Sample size is 5, so A<sub>2</sub> = 0.58.' },
        { text: 'Calculate the ULL and LLL:' },
        { html: 'Refer to NCEES <i>PE Mechanical Reference Handbook:</i> Statistical Quality Control.' },
        { math: 'ULL = X&#772; + A<sub>2</sub>R&#772;' },
        { math: 'ULL = 0.7501 + 0.58 &times; 0.0005' },
        { math: 'ULL = 0.7504' },
        { math: 'LLL = X&#772; &minus; A<sub>2</sub>R&#772;' },
        { math: 'LLL = 0.7501 &minus; 0.58 &times; 0.0005' },
        { math: 'LLL = 0.7498' },
        { text: 'Sample 4 and 5 are outside the limits.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Statistical Quality Control'
    },
    {
      id: '1701012', complexity: 'Medium',
      text: 'A factory has 25 samples taken of a cement-making process. Each sample had 9 items in it. The sum of the sample means is 125.48 lb, and the sum of the sample ranges is 8.21 lb. Which of the following lists the UCL and LCL of the average chart?',
      choices: ['5.13; 4.91', '13.23; 3.19', '133.69; 117.27', '130.50; 120.46'], answer: 0,
      blocks: [
        { text: 'First begin by determining the Xbar and Rbar needed for the UCL and LCL.' },
        { html: 'Refer to NCEES PE Mechanical Reference Handbook: Statistical Quality Control.' },
        { math: 'X&#772; = &sum;<sub>i=1</sub><sup>K</sup> <span class="fraction"><span>X&#772;<sub>i</sub></span><span>K</span></span>' },
        { math: 'X&#772; = <span class="fraction"><span>125.48 lb</span><span>25</span></span>' },
        { math: 'X&#772; = 5.02 lb' },
        { math: 'R&#772; = &sum;<sub>i=1</sub><sup>K</sup> <span class="fraction"><span>R&#772;<sub>i</sub></span><span>K</span></span>' },
        { math: 'R&#772; = <span class="fraction"><span>8.21 lb</span><span>25</span></span>' },
        { math: 'R&#772; = 0.33' },
        { html: 'Determine A<sub>2</sub> from NCEES PE Mechanical Reference Handbook: Statistical Quality Control.' },
        { html: 'Sample size is 9, so A<sub>2</sub> = 0.34.' },
        { text: 'Calculate the UCL and LCL:' },
        { html: 'Refer to NCEES PE Mechanical Reference Handbook: Statistical Quality Control.' },
        { math: 'UCL = X&#772; + A<sub>2</sub>R&#772;' },
        { math: 'UCL = 5.02 + 0.34 &times; 0.33' },
        { math: 'UCL = 5.13' },
        { math: 'LCL = X&#772; &minus; A<sub>2</sub>R&#772;' },
        { math: 'LCL = 5.02 &minus; 0.34 &times; 0.33' },
        { math: 'LCL = 4.91' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Statistical Quality Control'
    },
    {
      id: '1701013', complexity: 'Medium',
      text: 'For the sample data set shown, the median and standard deviation are, most nearly:',
      image: 'Screenshots and Questions/Questions/Supportive Knowledge Questions/problem 3 image.png',
      choices: ['5.164; 0.0792', '5.136; 0.0776', '5.136; 0.0792', '5.164; 0.0776'], answer: 0,
      blocks: [
        { html: 'The median is the middle number of the set when it is organized in sequential order. There are 25 samples total, find the 13<sup>th</sup> number:' },
        { math: '5.164' },
        { text: 'This is not the same as the mean.' },
        { text: 'For sample standard deviation, first calculate the mean:' },
        { math: 'X&#772; = <span class="fraction"><span>1</span><span>n</span></span> &sum;<sub>i=1</sub><sup>n</sup> X<sub>i</sub>' },
        { math: 'X&#772; = <span class="fraction"><span>5.246 + 5.224 + .....5.176 + 5.179</span><span>25</span></span>' },
        { math: 'X&#772; = 5.136.' },
        { text: 'Next calculate the sample standard deviation.' },
        { math: 's = <span class="radical">&radic;<span class="radicand"><span class="fraction"><span>1</span><span>n &minus; 1</span></span> &sum;<sub>i=1</sub><sup>n</sup>(X<sub>i</sub> &minus; X&#772;)<sup>2</sup></span></span>' },
        { math: 's = <span class="radical">&radic;<span class="radicand"><span class="fraction"><span>(5.246 &minus; 5.136)<sup>2</sup> + (5.224 &minus; 5.136)<sup>2</sup> + ......(5.176 &minus; 5.136)<sup>2</sup> + (5.179 &minus; 5.136)<sup>2</sup></span><span>25 &minus; 1</span></span></span></span>' },
        { math: 's = 0.0792' }
      ],
      reference: ''
    },
    {
      id: '1701024', complexity: 'Easy',
      text: 'In the figure below, the flatness tolerance of the flat plate is most nearly:',
      image: 'Screenshots and Questions/Questions/Supportive Knowledge Questions/problem 4 image.png',
      choices: ['0.002', '0.003', '0.004', '0.005'], answer: 3,
      blocks: [
        { text: 'Choice D is the flatness tolerance of the flat plate.' }
      ],
      reference: ''
    },
    {
      id: '1703006', complexity: 'Medium',
      html: 'Consider that 304 stainless steel with an &alpha;+Fe<sub>3</sub>C (carbide) composition is manufactured with 0.018% carbon by weight. If a sample of the 304SS is heated until it melts, and is then air-cooled, at what temperature does &alpha;-Fe (ferrite) begin to form?',
      choices: ['1333&deg;F', '1610&deg;F', '1674&deg;F', '2640&deg;F'], answer: 0,
      blocks: [
        { text: 'As the steel described cools, it reaches the alpha-ferrite line at approximately 1333°F when in line with 0.018% Carbon along the x-axis of the figure below.' },
        { image: 'Screenshots and Questions/Solutions/Supportive Knowledge/problem 5 image solution.png', alt: 'Iron-Iron Carbide Phase Diagram' }
      ],
      reference: 'NCEES PE Mechanical Handbook V1.9, Chapter 2: Machine Design and Materials, 2.9 Material Properties, 2.9.9 Binary Phase Diagram, . 2.9.9.1 Leve Rule'
    },
    {
      id: '1703012', complexity: 'Easy',
      text: 'Charpy V-notch test data is shown in the chart below. Which combination of temperature and impact energy is most likely to result in a ductile fracture?',
      image: 'Screenshots and Questions/Questions/Supportive Knowledge Questions/problem 6 image.png',
      choices: ['0&deg; C, 10 J', '50&deg; C, 50 J', '70&deg; C, 90 J', '70&deg; C, 20 J'], answer: 2,
      blocks: [
        { text: 'A. Brittle' },
        { text: 'B. Transition area' },
        { text: 'C. Ductile' },
        { text: 'D. Not likely to fracture' }
      ],
      reference: ''
    },
    {
      id: '1703013', complexity: 'Medium',
      html: 'A steel bar with a diameter of 2.0 in and a length of 18 in is mounted between two rigid walls as shown below. The coefficient of thermal expansion is 6.5 &times; 10<sup>&minus;6</sup> in/(in &times; &deg;F) and E = 30 &times; 10<sup>6</sup> psi. The bar was installed at a temperature of 68&deg; F. The temperature of the bar is raised to 350&deg; F. The stress in the steel bar at the higher temperature is most nearly:',
      image: 'Screenshots and Questions/Questions/Supportive Knowledge Questions/problem 7 image.png',
      choices: ['55,000 psi', '65,000 psi', '75,000 psi', '85,000 psi'], answer: 0,
      blocks: [
        { math: 'Delta = &delta; t = &alpha; L ( T &minus; T<sub>o</sub> )' },
        { text: '[deformation caused by temperature change = temperature coefficient of expansion × length of member (final temp − initial temp)]' },
        { math: 'Delta = ( 6.5 &times; 10<sup>&minus;6</sup>) &times; 18 in (350 &minus; 68) = 0.033 in' },
        { text: 'Stress = force/area' },
        { math: 'Delta = force &times; length / (E &times; area) &nbsp; &delta; = <span class="fraction"><span>PL</span><span>AE</span></span>' },
        { math: 'Stress = delta &times; E / length &nbsp; &sigma; = <span class="fraction"><span>&delta; &middot; E</span><span>L</span></span>' },
        { math: 'Stress = 0.033 in &times; (30 &times; 10<sup>6</sup>) psi / 18 in = 55,000 psi' },
        { html: 'NCEES PE Mechanical Reference Handbook, V2.0&gt;Chapter 2: Machine Design and Materials,&gt; 2.10.6 Thermal' },
        { html: 'NCEES PE Mechanical Reference Handbook, V2.0&gt;Chapter 2: Machine Design and Materials,&gt; 2.10.5 Uniaxial Loading and Deformation' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Elements of Machine Design and Methodologies > Strength of Materials'
    },
    {
      id: '1703024', complexity: 'Hard',
      html: 'An analytical curve &sigma;(&epsilon;) has been fit to the stress-strain response of a metal (Young&rsquo;s modulus, E = 200 GPa) in a tensile test. Based on this function, what is the 0.2% yield strength of the material?<br><br><span class="math">&sigma;(&epsilon;) = E &times; <span class="fraction"><span>&epsilon;</span><span>1 + &epsilon;</span></span> &nbsp;(1)</span>',
      choices: ['8.75 MPa', '40 MPa', '400 MPa', '8750 MPa'], answer: 3,
      blocks: [
        { text: 'Concept: yield strength is stress at which 0.2% offset line intersects with the stress-strain curve' },
        { html: '0.2% offset line: &sigma;<sub>0.2%</sub>(&epsilon;) = E(&epsilon; &minus; 0.002) (2) &nbsp;&nbsp; Combining equation (1) and (2),' },
        { math: '&sigma;(&epsilon;) = &sigma;<sub>0.2%</sub>(&epsilon;)' },
        { math: 'E &times; <span class="fraction"><span>&epsilon;</span><span>1 + &epsilon;</span></span> = E(&epsilon; &minus; 0.002)' },
        { text: 'Solve for ε' },
        { math: '<span class="fraction"><span>&epsilon;</span><span>1 + &epsilon;</span></span> = &epsilon; &minus; 0.002' },
        { math: '&epsilon; = (&epsilon; &minus; 0.002) &times; (1 + &epsilon;) = &epsilon;<sup>2</sup> + (1 &minus; 0.002)&epsilon; &minus; 0.002' },
        { math: '&epsilon; = &epsilon;<sup>2</sup> + (1 &minus; 0.002)&epsilon; &minus; 0.002' },
        { math: '0 = &epsilon;<sup>2</sup> &minus; 0.002&epsilon; &minus; 0.002' },
        { text: 'Solve using the quadratic equation:' },
        { math: '&epsilon; = <span class="fraction"><span>0.002 &plusmn; <span class="radical">&radic;<span class="radicand">0.002<sup>2</sup> + 4 &times; 0.002</span></span></span><span>2</span></span> = <span class="fraction"><span>0.002 &plusmn; 0.08947</span><span>2</span></span> = {&minus;0.04373, 0.04573}' },
        { text: 'Ignore negative solution ε = 0.04573, and plug the value of ε into equation (2)' },
        { math: '&sigma;<sub>0.2%</sub>(&epsilon; = 0.04573) = 200 GPa (0.04573 &minus; 0.002) = 8.75 GPa = 8750 MPa' }
      ],
      reference: 'NCEES PE Mechanical Handbook > 2.10, Strength of Materials> 2.10.1 Strain'
    },
    {
      id: '1703026', complexity: 'Medium',
      text: 'Which of these mechanical properties can be directly measured by a torsion test? Select all that apply.',
      choices: ['Bulk modulus', 'Elastic modulus', 'Poisson&rsquo;s ratio', 'Shear modulus', 'Tensile strength', 'Shear strength'], answer: [3, 5], multi: true,
      blocks: [
        { text: 'Solution:' },
        { html: '&bull;&nbsp; Bulk modulus is measured directly from a hydrostatic loading or a confined uniaxial loading.<br>&bull;&nbsp; Elastic modulus and Poisson&rsquo;s ratio can be measured directly from a uniaxial tensile loading.<br>&bull;&nbsp; Shear modulus can be measured as a simple ratio of torque to angle of twist in a torsion test.<br>&bull;&nbsp; Tensile strength can be measured as the failure tensile stress of a uniaxial tension test.<br>&bull;&nbsp; Shear strength can be measured as the failure shear stress of a torsion test.' }
      ],
      reference: ''
    },
    {
      id: '1703032', complexity: 'Easy',
      text: 'Which of the following is not an example of a hardness test?',
      choices: ['Brinell hardness test', 'Rockwell hardness test', 'Vickers hardness test', 'Poisson hardness test'], answer: 3,
      blocks: [
        { text: 'The Brinell, Rockwell, and Vickers tests are all commonly used hardness tests. There is no such thing as a Poisson hardness test.' }
      ],
      reference: ''
    },
    {
      id: '1708001', complexity: 'Hard',
      text: 'A 100-in long composite I-beam is subject to uniform pressure of 250 psi on its top face and is fixed on both ends. A stress analyst needs to conduct deflection analysis in finite element analysis (FEA) software. The analyst took advantage of symmetrical boundary conditions on a quarter symmetric model of the I-beam. The analyst decided to model the beam using 3D brick (solid) elements rather than shell elements. What boundary and loading conditions accurately represent the quarter symmetric I-beam?',
      image: 'Screenshots and Questions/Questions/Supportive Knowledge Questions/problem 11 image.jpg',
      choices: [
        'Face 1: U1, UR2, UR3 = 0; Face 2: U3, UR1, UR2 = 0; Face 3: U1, U2, U3, UR1, UR2, UR3 = 0; pressure: 62.5 psi',
        'Face 1: U1 = 0; Face 2: U3 = 0; Face 3: U1, U2, U3 = 0; pressure: 62.5 psi',
        'Face 1: U1, UR2, UR3 = 0; Face 2: U3, UR1, UR2 = 0; Face 3: U1, U2, U3, UR1, UR2, UR3 = 0; pressure: 250 psi',
        'Face 1: U1 = 0; Face 2: U3 = 0; Face 3: U1, U2, U3 = 0; pressure: 250 psi'
      ], answer: 3,
      blocks: [
        { text: 'Three-dimensional solid elements do not have rotational stiffness and are not required to have torque and moment restraints. Due to quarter symmetric nature, force and area are both divided by ¼. Hence, the pressure stays the same since P = F/A.' }
      ],
      reference: ''
    },
    {
      id: '1708002', complexity: 'Easy',
      text: 'AGMA is the trade group of companies involving power transmission components. What does the acronym AGMA stands for?',
      choices: ['Assistant General Manager for Administration', 'Association of Greater Manchester Authorities', 'American Gear Manufacturers Association', 'American Guild of Musical Artists'], answer: 2,
      blocks: [
        { text: 'American Gear Manufacturers Association' }
      ],
      reference: ''
    },
    {
      id: '1708005', complexity: 'Easy',
      text: 'Strain gauges are common instruments used to measure the strain being experienced by a member. Sometimes the strain is not the significant parameter of interest, but rather the stress is the desired value. Strain gauges allow the stress to be determined via which relationship?',
      choices: ['Conservation of mass', 'D&rsquo;Alembert&rsquo;s principle', 'Hooke&rsquo;s law', 'Euler&rsquo;s buckling formula'], answer: 2,
      blocks: [
        { text: 'The conservation of mass pertains to neither creating mass nor destroying mass, but it does not correlate to stress or strain.' },
        { text: 'D&rsquo;Alembert&rsquo;s principle is a restatement of Newton&rsquo;s second law except with the inertial term as part of the summation of the forces (that is, dynamic equilibrium).' },
        { text: 'Hooke&rsquo;s law is the relationship between stress, strain, and the modulus of elasticity, so answer C is correct.' },
        { text: 'Euler&rsquo;s buckling formula is for slender columns that are sustaining a compressive load. This does not correlate to stress or strain.' }
      ],
      reference: ''
    },
    {
      id: '1708006', complexity: 'Easy',
      text: 'Given the chart below, which quenching media material should be used to quickly quench a high-carbon steel from austenite to martensite?',
      image: 'Screenshots and Questions/Questions/Supportive Knowledge Questions/problem 14 image.png',
      choices: ['Air', 'Oil', 'Water', 'Brine'], answer: 3,
      blocks: [
        { text: 'From the curves shown above, all the quenching media start in the austenite phase, but brine is the only option that reaches an end phase of martensite. Additionally, brine is the quickest quenching media (it takes the shortest time to quench the steel.) Therefore, the answer is D.' }
      ],
      reference: ''
    },
    {
      id: '1708007', complexity: 'Easy',
      html: 'Stress-relief of steels through heat treatment is a common practice in industry. Which of the following heat treatment techniques best fits the following description:<br><br>This process attempts to change martensite to pearlite and generally is used to produce softer and tougher steel.',
      choices: ['Tempering', 'Normalizing', 'Blue embrittlement', 'Annealing'], answer: 0,
      blocks: [
        { text: 'Tempering is the heat treatment that attempts to heat the steel to change martensite to pearlite, making a softer yet tougher steel.' },
        { text: 'Normalizing is similar to annealing but produces a harder and stronger steel.' },
        { text: 'Blue embrittlement is a poor result of improper heat treatment. The steel becomes brittle and garnishes a blue hue on the surface.' },
        { text: 'Annealing is a process in which the steel is heated to produce austenite and then is slowly cooled to produce pearlite.' }
      ],
      reference: ''
    },
    {
      id: '1708011', complexity: 'Easy',
      html: 'Which of the following non-destructive evaluation (NDE) methods best fits the following description:<br><br>Mechanical vibrations are induced via a piezoelectric transducer. The transducer needs to be in contact with the workpiece (an adhesion gel may be applied on the surface prior to contact.) The mechanical vibrations propagate waves through the workpiece. The waves are then either reflected or scattered due to internal defects. The results can be interpreted and shown on a screen or a meter.',
      choices: ['Magnetic particle testing (MPT)', 'Eddy-current testing (ECT)', 'Ultrasonic testing (UT)', 'Liquid penetrant testing (PT)'], answer: 2,
      blocks: [
        { text: 'Magnetic particle testing is performed by using magnetic powder or magnetic fluorescent particles. A strong magnetic field is applied to the workpiece and the magnetic powder/particles accumulate at the defect sites.' },
        { text: 'Eddy-current testing uses an alternating current to induce electron flow into the workpiece. The defects interrupt the flow of the current.' },
        { text: 'Ultrasonic testing uses a piezoelectric transducer to transmit mechanical vibrations and detect the wave interference patterns due to internal defects.' },
        { text: 'Liquid penetrant testing uses a dye and developer to help bring out surface flaws on a workpiece.' }
      ],
      reference: ''
    },
    {
      id: '1708014', complexity: 'Easy',
      text: '2024 aluminum sheets fastened to a structure via steel rivets are found to experience corrosion when the structure is subjected to slush composed of snow and road salt. The corrosion is localized almost entirely at the fastener locations. The corrosion type is most likely which of the following?',
      choices: ['Pitting', 'Stress corrosion', 'Uniform corrosion', 'Galvanic corrosion'], answer: 3,
      blocks: [
        { html: 'According to the <i>NCEES PE Mechanical Reference Handbook:</i> Material Properties: Corrosion, the description of corrosion as galvanic is described as corrosion occurring when two metals with different compositions are exposed to an electrolyte. In this case, we can check the galvanic series in the <i>NCEES PE Mechanical Reference Handbook:</i> Material Properties: Corrosion to confirm the aluminum is the more active element over steel in the galvanic series and thus would suffer the corrosion. The problem states the corrosion is localized and, therefore, not uniform, and mentions no stress incurred at the locations. No description of pitting is given therefore it is not pitting corrosion.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Material Properties > Corrosion'
    },
    {
      id: '1708015', complexity: 'Easy',
      text: 'Which of the following elements cannot be used as a sacrificial anode in a cast iron boiler system to prevent corrosion in the cast iron boiler tank?',
      choices: ['Magnesium', 'Zinc', 'Cadmium', 'Copper'], answer: 3,
      blocks: [
        { html: 'Per the galvanic series in the <i>NCEES PE Mechanical Reference Handbook:</i> Material Properties: Corrosion:' },
        { text: 'Magnesium, cadmium, and zinc are all more active than cast iron and would serve as sacrificial anodes. Copper is less active and would not work.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Material Properties > Corrosion'
    },
    {
      id: '1708016', complexity: 'Medium',
      text: 'Match each reaction type with the start and result phases:',
      image: 'Screenshots and Questions/Questions/Supportive Knowledge Questions/problem 19 image.png',
      choices: ['A → 4, B → 3, C → 2, D → 1', 'A → 3, B → 4, C → 2, D → 1', 'A → 4, B → 3, C → 1, D → 2', 'A → 4, B → 2, C → 3, D → 1'], answer: 0,
      blocks: [
        { text: 'The letters “E”, “F”, “G” and “H” on the right column create some confusion. By looking at the 4 answers, you can notice that the only letters used are “A”, “B”, “C” and “D” and number 1 to 4. Follow the Binary Phase Diagram definition stated on section 2.9.9' },
        { html: 'A. Eutectic &nbsp; to &nbsp;(4) Liquid-&gt;Two Solid Phase &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; A-&gt;4<br>B. Eutectoid to (3) Solid-&gt; Two Solid Phases &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; B-&gt;3<br>C. Peritectoid to (2) Liquid + Solid-&gt;Solid &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; C-&gt;2<br>D. Peritectoid to (1) Two Solid Phases-&gt;Solid &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; D-&gt;1' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Material Properties > Binary Phase Diagrams'
    },
    {
      id: '1708021', complexity: 'Easy',
      text: 'A cast steel part must be inspected at the foundry for cracks. The foundry needs to be able to locate surface and sub surface cracks in a low-cost and effective manner that can work on small parts. The most likely choice of nondestructive test method is which of the following?',
      choices: ['Dye penetrant', 'Magnetic particle', 'X-ray', 'Ultrasonic'], answer: 1,
      blocks: [
        { text: 'Magnetic particle testing is the only test that can find both surface and sub surface cracks while also being low in cost and has no listed limitation on small parts per the NCEES manual.' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Statistical Quality Control > Nondestructive Testing'
    },
    {
      id: '1708025', complexity: 'Medium',
      text: 'A piston is held on to a connecting rod with a wrist pin. The hole in the connecting rod is to be 10 mm in diameter nominally. Assuming a locational clearance fit is required, what is the maximum radial clearance between the hole and shaft?',
      choices: ['0.014 mm', '0.035 mm', '0.012 mm', '0.008 mm'], answer: 2,
      blocks: [
        { html: 'This corresponds to an H7/h6 fit per the table in the <i>NCEES PE Mechanical Reference Handbook:</i> Cylindrical Fits and Tolerances: Tables of Cylindrical Fits and Tolerances.' },
        { text: 'Check the table for 10-mm hole basis.' },
        { math: 'H<sub>max</sub> = 10.015' },
        { math: 'P<sub>min</sub> = 9.991' },
        { math: '<span class="fraction"><span>(H<sub>max</sub> &minus; P<sub>min</sub>)</span><span>2</span></span> = 0.012 mm' },
        { text: '(divide by 2 to get radial clearance)' }
      ],
      reference: 'NCEES PE Mechanical Reference Handbook > Cylindrical Fits and Tolerances > Tables of Cylindrical Fits and Tolerances'
    },
    {
      id: '1708030', complexity: 'Medium',
      text: 'A machine design requires a sliding mechanism with accurate location and minimum play. The nominal size of the hole and shaft interface required is 3.25 inches. The maximum hole size and minimum shaft size respectively are:',
      choices: ['H: 3.2500 in S: 3.2500 in', 'H: 3.2528 in S: 3.2478 in', 'H: 3.2518 in S: 3.2476 in.', 'H: 3.2522 in S: 3.2472 in.'], answer: 3,
      blocks: [
        { text: 'As per the sliding fit for accurate location and minimum play is described as the RC4 fit.' },
        { text: 'Using the table in section 2.2.3 for RC4 fit and a nominal dimension of 3.25 inches, it is between 3.15 and 4.73 inches. As per this table, the maximum hole size is the nominal dimension plus 2.2 thousandths of an inch. And the minimum shaft size is the nominal dimension minus 2.8 thousandths of an inch. 3.25 + 0.0022 = 3.2522 and 3.25 − 0.0028 = 3.2472.' }
      ],
      reference: 'NCEES PE Reference Handbook > Cylindrical Fits and Tolerances > Tables of Cylindrical Fits and Tolerances'
    },
    {
      id: '1708031', complexity: 'Easy',
      text: 'Generally speaking, Finite Element Stress analysis requires that materials be isotropic to best line up with the evaluation because',
      choices: ['these are the only materials used in fields that design using FEA.', 'calculations of internal stresses are simplified when a constant spring constant is used between nodes.', 'isotropic materials are the best conductors of heat', 'polytropic materials do not exist.'], answer: 1,
      blocks: [
        { text: 'Materials with stress and strain properties that are the same regardless of direction or orientation of material are called isotropic. This includes most steels, plastics, and nonferrous metals. In general, limitations of computational power would not allow for FEA meshes to have properties that vary by direction for materials such as wood which has different tensile properties along and against the grain. All other answers are not true.' }
      ],
      reference: ''
    },
    {
      id: '1708032', complexity: 'Easy',
      text: 'Why would an engineer use dye penetrate over magnetic particle inspection to look for cracks in simple unobstructed weldments of aluminum support structures?',
      choices: ['Parts would need to be cleaned for inspection otherwise', 'The inspection method is very economical', 'The parts are non magnetic', 'Inspection speed is an important consideration'], answer: 2,
      blocks: [
        { text: 'Nondestructive testing, the magnetic particle test requires magnetizeable material to be used. All other reasons apply to both test types or favor magnetic particle inspections.' }
      ],
      reference: 'NCEES PE Reference Handbook > Statistical Quality Control > Nondestructive Testing'
    },
    {
      id: '1708033', complexity: 'Easy',
      text: 'Surface hardening is used instead of through hardening on steel parts to:',
      choices: ['have parts weigh less', 'increase the magnetism of the part.', 'hold tighter part tolerances.', 'have parts that still have ductile inner structures.'], answer: 3,
      blocks: [
        { text: 'Surface hardening is used to only harden the outer shell of a steel part, leaving the inside more flexible and less prone to shattering' }
      ],
      reference: ''
    },
    {
      id: '1708034', complexity: 'Easy',
      text: 'Noncritical stresses on stress plot produced by FEA software for a designed part is best validated by:',
      choices: ['thermal imaging cameras recording the parts in use', 'strain gages mounted to the part recording outputs while in use.', 'dye penetrant inspection of parts after use.', 'weighing the parts after use.'], answer: 1,
      blocks: [
        { text: 'Strain gauges recoding stresses in the part can best validate stresses predicted in FEA. Since the part describes noncritical stresses, failures would not be expected, so cracks and defects would not be expected via dye penetrant testing. Also, dye penetrant testing cannot confirm stress numbers, that only a part has failed' }
      ],
      reference: ''
    },
    {
      id: '1708035', complexity: 'Easy',
      text: 'After a steel is heated and the required grain structure is achieved, the process by which the desired grain structure is kept in place after heat is no longer applied is called:',
      choices: ['cold working.', 'annealing', 'quenching.', 'roll forming.'], answer: 2,
      blocks: [
        { text: 'Quenching is described as: rapid cooling from elevated temperature, preventing the formation of equilibrium phases' }
      ],
      reference: 'NCEES PE Reference Handbook > Material Properties > Thermal and Mechanical Processing'
    },
    {
      id: '1708036', complexity: 'Easy',
      text: 'Strain gauges can be used to measure:',
      choices: ['force, pressure, tension.', 'force, pressure, temperature.', 'magnetism, tension, weight.', 'force, light intensity, weight.'], answer: 0,
      blocks: [
        { text: 'Strain gauges convert forces and pressures into electrical outputs. They cannot be used to detect magnetism, light intensity, or temperature directly' }
      ],
      reference: ''
    },
    {
      id: '1708038', complexity: 'Easy',
      text: 'An engineer is seeking a low-cost nondestructive test for delamination of nonmetal composite parts. The best testing method to recommend for this application would be:',
      choices: ['magnetic particle inspection.', 'acoustic impact testing.', 'X-ray radiology.', 'fluoroscopy.'], answer: 1,
      blocks: [
        { text: 'Nondestructive testing, acoustic impact is the low-cost method to detect delamination in nonmetal composites that is low cost' }
      ],
      reference: 'NCEES PE Reference Handbook > Statistical Quality Control > Nondestructive Testing'
    },
    {
      id: '20251212', complexity: 'Easy',
      text: 'What instrument should be used to measure the backlash of a solid, carbon steel crankshaft in its housing?',
      choices: ['Micrometer', 'Dial indicator', 'Measuring tap', 'Plasti-gauge'], answer: 1,
      blocks: [
        { text: 'Dial indicator can be used to measure deflection or movement, which is the objective when measuring backlash. Micrometer and measuring tape are typically used to measure the overall size or length of a stationary object, and plasti-gauge is a specialty method used to measure clearances.' }
      ],
      reference: ''
    }
  ]
};

// Keep the statically transcribed Power Transmission entries in their intended
// bank while preserving the existing Basic Engineering Practice question list.
const transmittedQuestionIndex = banks.basic.findIndex(question => question.id === '1706008');
if (transmittedQuestionIndex !== -1) {
  banks.transmission.push(...banks.basic.splice(transmittedQuestionIndex, 51));
}

const subjectOrder = ['basic', 'materials', 'attachments', 'transmission', 'components', 'supportive'];
let quiz = [], answers = [], flags = [], current = 0, solutionMode = 'end';
let timerId, remaining = 0, handbookUrl = null, solutionReturnToQuiz = false;
const label = index => String.fromCharCode(65 + index);
const answerMatches = (answer, question) => question.numeric
  ? String(answer ?? '').trim() === String(question.answer)
  : Array.isArray(question.answer)
    ? Array.isArray(answer) && answer.length === question.answer.length && answer.every((value, index) => value === question.answer[index])
    : answer === question.answer;
const answerLabel = (answer, question) => question?.numeric
  ? String(answer)
  : Array.isArray(answer) ? answer.map(label).join(', ') : label(answer);
const questionSummary = question => (question.text || question.html || '')
  .replace(/<br\s*\/?>(\s*)/gi, ' ')
  .replace(/<[^>]*>/g, '')
  .replaceAll('&nbsp;', ' ');
const selectedSubjects = () => [...document.querySelectorAll('[name="subject"]:checked')].map(input => input.value);
const selectedComplexities = () => [...document.querySelectorAll('[name="complexity"]:checked')].map(input => input.value);
const questionMatches = question => !selectedComplexities().length || selectedComplexities().includes(question.complexity);
const availableFor = subject => (banks[subject] || []).filter(questionMatches);
const hideAll = () => document.querySelectorAll('.generator-view,.view').forEach(view => view.classList.add('hidden'));
const show = id => { hideAll(); $(id).classList.remove('hidden'); window.scrollTo(0, 0); };

function updateCount() {
  const subjects = selectedSubjects().filter(subject => availableFor(subject).length);
  const maximum = subjects.length ? Math.min(...subjects.map(subject => availableFor(subject).length)) : 0;
  const slider = $('#question-count');
  slider.max = maximum;
  slider.disabled = !maximum;
  if (+slider.value > maximum) slider.value = maximum;
  if (!maximum) slider.value = 0;
  $('#question-total').textContent = `${slider.value}/${maximum}`;
}

function timerText(value) {
  const h = Math.floor(value / 3600), m = Math.floor(value % 3600 / 60), s = value % 60;
  return h ? `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}` : `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}

function startTimer() {
  clearInterval(timerId);
  const [hours, minutes] = $('#timer-length').value.split(':').map(Number);
  remaining = hours * 3600 + minutes * 60;
  if (!$('#enable-timer').checked || !remaining) return $('#timer-display').classList.add('hidden');
  $('#timer-display').classList.remove('hidden');
  $('#timer').textContent = timerText(remaining);
  timerId = setInterval(() => {
    remaining = Math.max(remaining - 1, 0);
    $('#timer').textContent = timerText(remaining);
    if (!remaining) finishQuiz();
  }, 1000);
}

function renderQuestion() {
  const question = quiz[current];
  $('#question-id').textContent = question.id;
  $('#question-text').innerHTML = question.html || question.text;
  $('#current-number').textContent = current + 1;
  $('#total-number').textContent = quiz.length;
  $('#flag-label').textContent = flags[current] ? 'Remove Flag' : 'Flag for Review';
  const image = $('#question-image');
  if (question.image) { image.src = question.image; image.classList.remove('hidden'); } else { image.removeAttribute('src'); image.classList.add('hidden'); }
  $('#question-after-image').innerHTML = question.afterImageHtml || '';
  document.querySelectorAll('.question-data-table').forEach(table => table.remove());
  if (question.table) $('#answers').insertAdjacentHTML('beforebegin', question.table);
  if (question.numeric) {
    $('#answers').innerHTML = `<label class="numeric-answer">Answer <input type="number" name="answer" step="any" value="${answers[current] ?? ''}" aria-label="Numerical answer"></label>`;
    document.querySelector('[name="answer"]').addEventListener('input', event => {
      answers[current] = event.target.value.trim() === '' ? null : event.target.value.trim();
    });
  } else {
    $('#answers').innerHTML = question.choices.map((choice, index) => {
      const checked = question.multi ? Array.isArray(answers[current]) && answers[current].includes(index) : answers[current] === index;
      return `<label><input type="${question.multi ? 'checkbox' : 'radio'}" name="answer" value="${index}" ${checked ? 'checked' : ''}> ${label(index)}. ${choice}</label>`;
    }).join('');
    document.querySelectorAll('[name="answer"]').forEach(input => input.addEventListener('change', event => {
      if (!question.multi) return answers[current] = +event.target.value;
      const selected = [...document.querySelectorAll('[name="answer"]:checked')].map(choice => +choice.value);
      answers[current] = selected.length ? selected : null;
    }));
  }
  $('#previous').disabled = current === 0;
  $('#next').textContent = current === quiz.length - 1 ? 'Finish Exam' : 'Next →';
}

function navigate(step) {
  if (step > 0 && solutionMode === 'go' && answers[current] !== null) return showSolution(current, true);
  if (current + step < 0) return;
  if (current + step >= quiz.length) {
    reviewRows();
    modal('#review-modal');
    return;
  }
  current += step;
  renderQuestion();
}

function modal(id, open = true) { $(id).classList.toggle('hidden', !open); }
function reviewRows(filter = () => true) {
  const rows = quiz.map((question, index) => ({ question, index })).filter(filter);
  $('#review-table').innerHTML = '<div class="review-header"><b>Question</b><b>Answered</b><b>Flagged</b></div>' +
    rows.map(({ index }) => `<button class="review-row" data-question="${index}"><b>Question ${index + 1}</b><span>${answers[index] === null ? 'No' : 'Yes'}</span><span>${flags[index] ? 'Yes' : 'No'}</span></button>`).join('');
  document.querySelector('.review-scroll').scrollTop = 0;
  document.querySelectorAll('[data-question]').forEach(button => button.onclick = () => { current = +button.dataset.question; modal('#review-modal', false); renderQuestion(); });
}

function finishQuiz() {
  clearInterval(timerId);
  const total = quiz.length, correct = answers.reduce((sum, answer, index) => sum + Number(answerMatches(answer, quiz[index])), 0);
  const incorrect = answers.filter((answer, index) => answer !== null && !answerMatches(answer, quiz[index])).length;
  const score = total ? Math.round(correct / total * 100) : 0;
  $('#score-label').textContent = `${score}%`;
  $('#score-ring-label').textContent = `${score}%`;
  $('#result-total').textContent = total;
  $('#correct-count').textContent = correct;
  $('#incorrect-count').textContent = incorrect;
  $('#unattempted-count').textContent = total - correct - incorrect;
  $('#correct-bar').style.width = `${score}%`;
  ['Easy', 'Medium'].forEach(level => {
    const set = quiz.map((question, i) => ({ question, i })).filter(({ question }) => question.complexity === level);
    const percent = set.length ? Math.round(set.filter(({ i }) => answerMatches(answers[i], quiz[i])).length / set.length * 100) : 0;
    $('#' + level.toLowerCase() + '-score').textContent = `${percent}%`;
  });
  $('#summary-table').innerHTML = '<div class="summary-head"><b>S.No</b><b>Question ID</b><b>Questions</b><b>Status</b></div>' +
    quiz.map((question, index) => `<button class="summary-row" data-solution="${index}"><span>${index + 1}</span><span>${question.id}</span><span>${questionSummary(question)}</span><span>${answers[index] === null ? 'Not Attempted' : answerMatches(answers[index], question) ? 'Correct' : 'Incorrect'}</span></button>`).join('');
  document.querySelectorAll('[data-solution]').forEach(button => button.onclick = () => showSolution(+button.dataset.solution));
  show('#results-view');
}

function solutionBlocks(question) {
  return question.blocks.map(block => {
    if (block.image) return `<img class="solution-inline-image" src="${block.image}" alt="${block.alt || ''}">`;
    if (block.table) return block.table;
    if (block.math) return `<div class="math">${block.math}</div>`;
    return `<p>${block.html || block.text.replaceAll('\n', '<br>')}</p>`;
  }).join('');
}

function showSolution(index, returnToQuiz = false) {
  const question = quiz[index];
  solutionReturnToQuiz = returnToQuiz;
  $('#solution-number').textContent = index + 1;
  $('#solution-id').textContent = question.id;
  $('#solution-progress').textContent = `${index + 1} of ${quiz.length}`;
  $('#solution-text').innerHTML = question.html || question.text;
  const image = $('#solution-image');
  if (question.image) { image.src = question.image; image.classList.remove('hidden'); } else { image.removeAttribute('src'); image.classList.add('hidden'); }
  document.querySelectorAll('.solution-data-table').forEach(table => table.remove());
  if (question.table) $('#solution-choices').insertAdjacentHTML('beforebegin', question.table.replaceAll('question-data-table', 'solution-data-table'));
  $('#solution-choices').classList.toggle('hidden', Boolean(question.numeric));
  $('#solution-choices').innerHTML = question.numeric ? '' : question.choices.map(choice => `<li>${choice}</li>`).join('');
  $('#chosen-option').textContent = answers[index] === null ? '−' : answerLabel(answers[index], question);
  $('#correct-option').textContent = answerLabel(question.answer, question);
  $('#solution-status').textContent = answers[index] === null ? '− Not Attempted' : answerMatches(answers[index], question) ? '✓ Answered Correct' : '✖ Answered Incorrect';
  $('#solution-content').innerHTML = solutionBlocks(question);
  const reference = $('#solution-reference');
  reference.innerHTML = (question.reference || '').replaceAll('\n', '<br>');
  reference.classList.toggle('hidden', !question.reference);
  reference.previousElementSibling.classList.toggle('hidden', !question.reference);
  $('#solution-previous').disabled = index === 0;
  $('#solution-next').disabled = index === quiz.length - 1;
  $('#solution-previous').onclick = () => showSolution(index - 1, returnToQuiz);
  $('#solution-next').onclick = () => showSolution(index + 1, returnToQuiz);
  $('#back-to-results').textContent = returnToQuiz ? '← Back to Quiz' : '← Back to Reports page';
  $('#back-to-results').onclick = () => {
    if (!solutionReturnToQuiz) return show('#results-view');
    if (current === quiz.length - 1) return finishQuiz();
    current++;
    show('#exam-view');
    renderQuestion();
  };
  show('#solution-view');
}

function updateHandbook(file) {
  if (!file) return;
  if (file.type !== 'application/pdf' && !file.name.toLowerCase().endsWith('.pdf')) {
    $('#form-message').textContent = 'Please choose a PDF handbook.';
    return;
  }
  if (handbookUrl) URL.revokeObjectURL(handbookUrl);
  handbookUrl = URL.createObjectURL(file);
  $('#handbook-viewer').src = handbookUrl;
  $('#handbook-viewer').classList.remove('hidden');
  $('#reference-empty').classList.add('hidden');
}

document.querySelectorAll('[name="subject"],[name="complexity"]').forEach(input => input.addEventListener('change', updateCount));
$('#question-count').addEventListener('input', updateCount);
$('#enable-timer').addEventListener('change', event => $('#timer-length').disabled = !event.target.checked);
$('#handbook-upload').addEventListener('change', event => updateHandbook(event.target.files[0]));
$('#change-handbook').onclick = () => $('#handbook-upload').click();
$('#generator-form').addEventListener('submit', event => {
  event.preventDefault();
  const count = +$('#question-count').value;
  const chosen = selectedSubjects();
  if (!chosen.length || !count) { $('#form-message').textContent = 'Choose at least one available subject and question count.'; return; }
  // Each bank remains one contiguous wave in its original source order.
  quiz = subjectOrder.filter(subject => chosen.includes(subject)).flatMap(subject => availableFor(subject).slice(0, count));
  if (!quiz.length) { $('#form-message').textContent = 'No stored questions are available for that selection yet.'; return; }
  answers = Array(quiz.length).fill(null); flags = Array(quiz.length).fill(false); current = 0;
  solutionMode = $('[name="solution-mode"]:checked').value;
  $('#exam-title').textContent = 'Generated Quiz';
  $('#form-message').textContent = '';
  startTimer();
  show('#exam-view');
  renderQuestion();
});
$('#cancel').onclick = () => { $('#generator-form').reset(); $('#timer-length').disabled = true; $('#form-message').textContent = ''; updateCount(); };
$('#previous').onclick = () => navigate(-1);
$('#next').onclick = () => navigate(1);
$('#flag-button').onclick = () => { flags[current] = !flags[current]; renderQuestion(); };
$('#end-exam').onclick = () => { reviewRows(); modal('#review-modal'); };
$('#review-button').onclick = () => { reviewRows(); modal('#review-modal'); };
$('#review-all').onclick = () => reviewRows();
$('#review-flagged').onclick = () => reviewRows(({ index }) => flags[index]);
$('#review-unanswered').onclick = () => reviewRows(({ index }) => answers[index] === null);
$('#submit-exam').onclick = () => {
  const unanswered = answers.filter(answer => answer === null).length;
  const flagged = flags.filter(Boolean).length;
  document.querySelector('#submit-modal p').textContent =
    `You have ${unanswered} unanswered question${unanswered === 1 ? '' : 's'} and ${flagged} flagged question${flagged === 1 ? '' : 's'}. Are you sure you want to submit?`;
  modal('#submit-modal');
};
$('#confirm-submit').onclick = () => { modal('#submit-modal', false); modal('#review-modal', false); finishQuiz(); };
$('#scratch-button').onclick = () => modal('#scratch-modal');
document.querySelectorAll('[data-close]').forEach(button => button.onclick = () => modal('#' + button.dataset.close, false));
$('#new-quiz').onclick = () => show('#generator-view');
$('#close-solution').onclick = () => show('#results-view');
$('#fullscreen').onclick = () => document.fullscreenElement ? document.exitFullscreen() : document.documentElement.requestFullscreen();
updateCount();
