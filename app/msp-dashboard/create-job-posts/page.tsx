"use client"

import { useState } from "react"
import { PageHeader } from "@/components/page-header"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, X, Save, Send } from "lucide-react"

export default function CreateJobPostsPage() {
  const [skills, setSkills] = useState<string[]>([])
  const [newSkill, setNewSkill] = useState("")
  const [selectedVendors, setSelectedVendors] = useState<string[]>([])
  const [formData, setFormData] = useState({
    jobTitle: "",
    client: "",
    hiringManager: "",
    positions: "",
    priority: "",
    deadline: "",
    description: "",
    responsibilities: "",
    requirements: "",
    location: "",
    duration: "",
    billRateMin: "",
    billRateMax: "",
    experienceLevel: "",
    interviewProcess: "",
    notes: "",
    autoNotify: false,
  })

  const addSkill = () => {
    if (newSkill.trim() && !skills.includes(newSkill.trim())) {
      setSkills([...skills, newSkill.trim()])
      setNewSkill("")
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
  }

  const vendors = [
    { id: "vendor1", name: "TechTalent Solutions", specialties: ["React", "Node.js", "Python"] },
    { id: "vendor2", name: "Elite Contractors", specialties: ["AWS", "DevOps", "Cloud"] },
    { id: "vendor3", name: "CloudExperts Inc.", specialties: ["Data Science", "ML", "AI"] },
    { id: "vendor4", name: "Design Professionals", specialties: ["UX/UI", "Design", "Frontend"] },
    { id: "vendor5", name: "Full Stack Partners", specialties: ["Full Stack", "Backend", "Database"] },
  ]

  const toggleVendor = (vendorId: string) => {
    setSelectedVendors((prev) => (prev.includes(vendorId) ? prev.filter((id) => id !== vendorId) : [...prev, vendorId]))
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSaveDraft = () => {
    console.log("Saving draft:", { ...formData, skills, selectedVendors })
    // Implementation for saving draft
  }

  const handlePublishJob = () => {
    console.log("Publishing job:", { ...formData, skills, selectedVendors })
    // Implementation for publishing job
  }

  return (
    <div className="container mx-auto px-4 py-6">
      <PageHeader title="Create Job Posts" description="Create job postings based on hiring manager requirements" />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Job Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="jobTitle">Job Title *</Label>
                  <Input
                    id="jobTitle"
                    placeholder="e.g., Senior React Developer"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="jobId">Job ID</Label>
                  <Input id="jobId" placeholder="JR-2025-XXX (Auto-generated)" disabled />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="client">Client *</Label>
                  <Select value={formData.client} onValueChange={(value) => handleInputChange("client", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select client" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="techcorp">TechCorp Inc.</SelectItem>
                      <SelectItem value="cloudsys">CloudSys Solutions</SelectItem>
                      <SelectItem value="dataviz">DataViz Analytics</SelectItem>
                      <SelectItem value="designcorp">DesignCorp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="hiringManager">Hiring Manager *</Label>
                  <Select
                    value={formData.hiringManager}
                    onValueChange={(value) => handleInputChange("hiringManager", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select hiring manager" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jennifer">Jennifer Smith</SelectItem>
                      <SelectItem value="michael">Michael Chen</SelectItem>
                      <SelectItem value="emily">Dr. Emily Rodriguez</SelectItem>
                      <SelectItem value="lisa">Lisa Thompson</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="positions">Number of Positions *</Label>
                  <Input
                    id="positions"
                    type="number"
                    placeholder="1"
                    value={formData.positions}
                    onChange={(e) => handleInputChange("positions", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor="priority">Priority *</Label>
                  <Select value={formData.priority} onValueChange={(value) => handleInputChange("priority", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select priority" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="deadline">Submission Deadline *</Label>
                  <Input
                    id="deadline"
                    type="date"
                    value={formData.deadline}
                    onChange={(e) => handleInputChange("deadline", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Job Details */}
          <Card>
            <CardHeader>
              <CardTitle>Job Description & Requirements</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="description">Job Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Provide detailed job description..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) => handleInputChange("description", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="responsibilities">Key Responsibilities</Label>
                <Textarea
                  id="responsibilities"
                  placeholder="List key responsibilities..."
                  rows={3}
                  value={formData.responsibilities}
                  onChange={(e) => handleInputChange("responsibilities", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="requirements">Requirements</Label>
                <Textarea
                  id="requirements"
                  placeholder="List job requirements..."
                  rows={3}
                  value={formData.requirements}
                  onChange={(e) => handleInputChange("requirements", e.target.value)}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="location">Work Location *</Label>
                  <Select value={formData.location} onValueChange={(value) => handleInputChange("location", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select location type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="remote">Remote</SelectItem>
                      <SelectItem value="hybrid">Hybrid</SelectItem>
                      <SelectItem value="onsite">On-site</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="duration">Contract Duration</Label>
                  <Input
                    id="duration"
                    placeholder="e.g., 12 months"
                    value={formData.duration}
                    onChange={(e) => handleInputChange("duration", e.target.value)}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Skills and Rate */}
          <Card>
            <CardHeader>
              <CardTitle>Skills & Compensation</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label>Required Skills *</Label>
                <div className="flex gap-2 mt-2">
                  <Input
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Add a skill"
                    onKeyPress={(e) => e.key === "Enter" && addSkill()}
                  />
                  <Button type="button" onClick={addSkill} size="sm">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-2 mt-2">
                  {skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-md text-sm flex items-center gap-1"
                    >
                      {skill}
                      <button onClick={() => removeSkill(skill)} className="text-blue-600 hover:text-blue-800">
                        <X className="h-3 w-3" />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="billRateMin">Bill Rate Range ($/hr) *</Label>
                  <div className="flex gap-2 items-center">
                    <Input
                      id="billRateMin"
                      type="number"
                      placeholder="Min"
                      value={formData.billRateMin}
                      onChange={(e) => handleInputChange("billRateMin", e.target.value)}
                    />
                    <span>to</span>
                    <Input
                      id="billRateMax"
                      type="number"
                      placeholder="Max"
                      value={formData.billRateMax}
                      onChange={(e) => handleInputChange("billRateMax", e.target.value)}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="experience">Experience Level *</Label>
                  <Select
                    value={formData.experienceLevel}
                    onValueChange={(value) => handleInputChange("experienceLevel", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select experience level" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="junior">Junior (1-3 years)</SelectItem>
                      <SelectItem value="mid">Mid-level (3-5 years)</SelectItem>
                      <SelectItem value="senior">Senior (5+ years)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Vendor Selection */}
          <Card>
            <CardHeader>
              <CardTitle>Invite Vendors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {vendors.map((vendor) => (
                  <div key={vendor.id} className="flex items-start space-x-3">
                    <Checkbox
                      id={vendor.id}
                      checked={selectedVendors.includes(vendor.id)}
                      onCheckedChange={() => toggleVendor(vendor.id)}
                    />
                    <div className="flex-1">
                      <Label htmlFor={vendor.id} className="font-medium cursor-pointer">
                        {vendor.name}
                      </Label>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {vendor.specialties.map((specialty) => (
                          <span key={specialty} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded">
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Additional Settings */}
          <Card>
            <CardHeader>
              <CardTitle>Additional Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="interviewProcess">Interview Process</Label>
                <Textarea
                  id="interviewProcess"
                  placeholder="Describe the interview process..."
                  rows={3}
                  value={formData.interviewProcess}
                  onChange={(e) => handleInputChange("interviewProcess", e.target.value)}
                />
              </div>

              <div>
                <Label htmlFor="notes">Internal Notes</Label>
                <Textarea
                  id="notes"
                  placeholder="Add any internal notes..."
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => handleInputChange("notes", e.target.value)}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox
                  id="autoNotify"
                  checked={formData.autoNotify}
                  onCheckedChange={(checked) => handleInputChange("autoNotify", checked as boolean)}
                />
                <Label htmlFor="autoNotify" className="text-sm">
                  Auto-notify vendors when job is posted
                </Label>
              </div>
            </CardContent>
          </Card>

          {/* Action Buttons */}
          <div className="space-y-2">
            <Button onClick={handlePublishJob} className="w-full bg-blue-600 hover:bg-blue-700 gap-2">
              <Send className="h-4 w-4" />
              Create & Publish Job
            </Button>
            <Button onClick={handleSaveDraft} variant="outline" className="w-full gap-2">
              <Save className="h-4 w-4" />
              Save as Draft
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
