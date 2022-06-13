# Quality Approach

## Kinds of the testings that might used in the Sales Overview Page

1. BDD and DDD by Automation as feature testing:
   - Using BDD to ensure the page's behavior is under the expectation
   - Using the DDD to ensure the output from either the API or the front-end can handle those unexpected data
     - As the data preparation to create the testing data by either GraphQL or API to max the test data
     - The max data should includes the data validation check as well
      
2. Performance Testing
   - This depends on the SLA, what is the performance expectation on the certain page

3. Capability Testing by Automation integrated with BrowserStack

4. Security Testing includes the Network security
   - the purpose for the security testing is also ensure that all the endpoint do required certian cookies or credentails

5. Integration testing
  - the purpose for the integration testing is to ensure the data impelemetation is correct from the other pages or API's post result

## Tools and frameworks that will be involved into the testing for the Sales Overview Page

1. Floodio - for the UI performance
2. K6 - for the API performance
3. WDIO or Cypress - for the feature Automation
4. BrowserStack - for the capability and network logs
5. Wfuzz - for the security testing

## How to Upskill the pod

1. Based on the Performance testing result to find out whether there is a sofrware issue or hardware issue
2. To ensure the clean code and clean stucture on the code level, using the SonarLint to check the static codes
3. The most impotant part is the ** exploratory testing **

## Testing Env and usage

1. Test Env: used for
    - BDD, DDD, Regression testing and capability testing
2. Staging / UAT Env: used for
    - Smoke testing, Regresstion testing, Integration testing, performance testing and security testing
3. Trail Web Application (As the production Env):
    - Smoke testing and the performance testing

## Test plan and how to weight up the time taken agaainst quality assurance
The test plan always depends on the current resourses, deadline, product targets and the type of endusers, it could be a huge topic, and I am willing to discuss with you in the next step

To maxmize the quality in limited time and make the plan on how to achive it:
1. build up the AC and Test Cases during the planning meeting and feature development process
2. Data Preparation during the feature development process and Dev handover timing
3. Run the BDD and DDD inside the PR to ensure the feature passed the basic requirements
4. Running the regression right after the branch merged

Then the rest of the testing depends on the time left for the testing team.
1. Prioritize the most concern sections such as performance or security or exploratory
2. Focus on the most concern part to maxmize the output firstly
3. Then depends on the progress to keep execute the rest part of the tests

This is a very general test plan which did not includes certain time line and resrouces, to extend the test plan I do need more information, and I am keen to talk about this during the next step

