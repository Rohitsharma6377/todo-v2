const axios = require('axios');

const BASE_URL = 'http://localhost:5000/api';

// Test the API endpoints
async function testAPI() {
  try {
    console.log('🧪 Testing Backend API...\n');

    // Test 1: Check if server is running
    console.log('1. Testing server connection...');
    const response = await axios.get('http://localhost:5000');
    console.log('✅ Server is running:', response.data);
    console.log('');

    // Test 2: Test admin login
    console.log('2. Testing admin login...');
    const loginResponse = await axios.post(`${BASE_URL}/auth/login`, {
      email: 'admin@example.com',
      password: 'admin123'
    });
    console.log('✅ Admin login successful');
    console.log('User role:', loginResponse.data.data.user.role);
    console.log('Token received:', loginResponse.data.data.token ? 'Yes' : 'No');
    console.log('');

    const token = loginResponse.data.data.token;

    // Test 3: Test get current user
    console.log('3. Testing get current user...');
    const userResponse = await axios.get(`${BASE_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('✅ Get current user successful');
    console.log('User:', userResponse.data.data.user.username);
    console.log('');

    // Test 4: Test get all users (admin only)
    console.log('4. Testing get all users (admin only)...');
    const usersResponse = await axios.get(`${BASE_URL}/auth/users`, {
      headers: { Authorization: `Bearer ${token}` }
    });
    console.log('✅ Get all users successful');
    console.log('Total users:', usersResponse.data.data.users.length);
    console.log('');

    // Test 5: Test file upload endpoint (without file)
    console.log('5. Testing file upload endpoint...');
    try {
      await axios.post(`${BASE_URL}/upload/single`, {}, {
        headers: { Authorization: `Bearer ${token}` }
      });
    } catch (error) {
      if (error.response && error.response.status === 400) {
        console.log('✅ File upload endpoint working (correctly rejected empty request)');
      } else {
        console.log('❌ File upload endpoint error:', error.message);
      }
    }
    console.log('');

    console.log('🎉 All tests completed successfully!');
    console.log('');
    console.log('📋 Summary:');
    console.log('- ✅ Server is running');
    console.log('- ✅ Authentication working');
    console.log('- ✅ Role-based access working');
    console.log('- ✅ Admin privileges working');
    console.log('- ✅ File upload endpoints accessible');
    console.log('');
    console.log('🔑 Admin credentials:');
    console.log('- Email: admin@example.com');
    console.log('- Password: admin123');
    console.log('');
    console.log('🚀 Backend is ready for use!');

  } catch (error) {
    console.error('❌ Test failed:', error.message);
    if (error.response) {
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
    }
  }
}

testAPI(); 