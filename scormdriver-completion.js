var scormAPI = window.API || window.parent.API;

// Check if SCORM API is available
if (!scormAPI) {
    console.error('SCORM API not found');
} else {
    // Initialize SCORM session (only necessary for SCORM 1.2 and earlier)
    var isInitialized = scormAPI.LMSInitialize('');
    if (!isInitialized) {
        console.error('SCORM Initialization failed');
    } else {
        console.log('SCORM Initialized successfully');
        
        // Set lesson status (completed)
        var result = scormAPI.LMSSetValue('cmi.core.lesson_status', 'completed');
        console.log('LMSSetValue result for lesson status:', result);  // Should log 'true' if successful
        
        // Set lesson location (optional, just an example)
        var lessonLocation = 'lesson_1';
        result = scormAPI.LMSSetValue('cmi.core.lesson_location', lessonLocation);
        console.log('LMSSetValue result for lesson location:', result);  // Should log 'true' if successful
        
        // Set score (if applicable for completion)
        var score = 100;  // Example score
        result = scormAPI.LMSSetValue('cmi.core.score.raw', score);
        console.log('LMSSetValue result for score:', result);  // Should log 'true' if successful

        // Commit the changes
        var commitResult = scormAPI.LMSCommit('');
        console.log('LMSCommit result:', commitResult);  // Should log 'true' if successful

        // Check completion
        var completionStatus = scormAPI.LMSGetValue('cmi.core.lesson_status');
        console.log('Current lesson status:', completionStatus);  // Should log 'completed'
    }
}
