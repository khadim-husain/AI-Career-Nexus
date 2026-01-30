"""
Test script for Resume Parser API
Run this to verify all endpoints are working
"""

import requests
import json
from pathlib import Path

BASE_URL = "http://localhost:8000/api"

def test_upload_resume():
    """Test resume upload endpoint"""
    print("\n📤 Testing resume upload...")
    
    # Use sample JSON resume
    sample_data = {
        "name": "Test User",
        "title": "Software Developer",
        "contact": {
            "phone": "+1234567890",
            "location": "Test City",
            "email": "test@example.com"
        },
        "about_me": "Test professional summary",
        "education": [
            {
                "year": "2020-2024",
                "degree": "Bachelor of Computer Science",
                "institution": "Test University",
                "details": "Test details"
            }
        ],
        "experience": [
            {
                "duration": "2024-Present",
                "role": "Software Developer",
                "company": "Test Company",
                "details": "Test work details"
            }
        ],
        "skills": {
            "programming_languages": ["Python", "JavaScript"],
            "web_technologies": ["React", "FastAPI"],
            "tools_and_technologies": ["Git", "Docker"],
            "soft_skills": ["Communication", "Teamwork"]
        }
    }
    
    # First upload using parse-json endpoint (doesn't require file)
    response = requests.post(
        "http://localhost:8000/resume/parse-json",
        json=sample_data
    )
    
    if response.status_code == 200:
        print("✅ Upload successful!")
        print(f"📊 Response: {response.json()}")
        return True
    else:
        print(f"❌ Upload failed: {response.status_code}")
        print(f"Error: {response.text}")
        return False

def test_get_resume():
    """Test get complete resume endpoint"""
    print("\n📥 Testing get resume...")
    
    response = requests.get(f"http://localhost:8000/resume")
    
    if response.status_code == 200:
        data = response.json()
        print("✅ Get resume successful!")
        print(f"📊 Name: {data.get('data', {}).get('name')}")
        return True
    else:
        print(f"❌ Get resume failed: {response.status_code}")
        return False

def test_get_skills():
    """Test get skills endpoint"""
    print("\n🎯 Testing get skills...")
    
    response = requests.get(f"{BASE_URL}/resume/skills")
    
    if response.status_code == 200:
        skills = response.json()
        print("✅ Get skills successful!")
        print(f"📊 Skills: {skills.get('data', {})}")
        return True
    else:
        print(f"❌ Get skills failed: {response.status_code}")
        return False

def test_get_experience():
    """Test get experience endpoint"""
    print("\n💼 Testing get experience...")
    
    response = requests.get(f"{BASE_URL}/resume/experience")
    
    if response.status_code == 200:
        exp = response.json()
        print("✅ Get experience successful!")
        print(f"📊 Experience: {exp.get('data', [])}")
        return True
    else:
        print(f"❌ Get experience failed: {response.status_code}")
        return False

def test_get_education():
    """Test get education endpoint"""
    print("\n🎓 Testing get education...")
    
    response = requests.get(f"{BASE_URL}/resume/education")
    
    if response.status_code == 200:
        edu = response.json()
        print("✅ Get education successful!")
        print(f"📊 Education: {edu.get('data', [])}")
        return True
    else:
        print(f"❌ Get education failed: {response.status_code}")
        return False

def test_get_contact():
    """Test get contact endpoint"""
    print("\n📞 Testing get contact...")
    
    response = requests.get(f"{BASE_URL}/resume/contact")
    
    if response.status_code == 200:
        contact = response.json()
        print("✅ Get contact successful!")
        print(f"📊 Contact: {contact.get('data', {})}")
        return True
    else:
        print(f"❌ Get contact failed: {response.status_code}")
        return False

def main():
    """Run all tests"""
    print("=" * 50)
    print("🧪 Resume Parser API Test Suite")
    print("=" * 50)
    
    try:
        # Check if server is running
        response = requests.get("http://localhost:8000/health")
        print("✅ Server is running!")
    except requests.exceptions.ConnectionError:
        print("❌ Server is not running!")
        print("Please start the server first: run_backend.bat")
        return
    
    # Run tests
    results = []
    results.append(("Upload Resume", test_upload_resume()))
    results.append(("Get Resume", test_get_resume()))
    results.append(("Get Skills", test_get_skills()))
    results.append(("Get Experience", test_get_experience()))
    results.append(("Get Education", test_get_education()))
    results.append(("Get Contact", test_get_contact()))
    
    # Summary
    print("\n" + "=" * 50)
    print("📊 Test Summary")
    print("=" * 50)
    
    passed = sum(1 for _, result in results if result)
    total = len(results)
    
    for name, result in results:
        status = "✅ PASS" if result else "❌ FAIL"
        print(f"{status} - {name}")
    
    print("\n" + "=" * 50)
    print(f"Results: {passed}/{total} tests passed")
    print("=" * 50)

if __name__ == "__main__":
    main()
