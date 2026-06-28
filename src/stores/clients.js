import { defineStore } from 'pinia'

export const useClientStore = defineStore('clients', {
  state: () => ({
    clients: [
      { 
        name: 'Sarah Akpola', id: '12345', status: 'Active', aum: '$123,000', riskProfile: 'Mod. Aggressive', riskColor: 'bg-[#FD4F00]', riskWidth: '65%', lastActivity: '2 Hours Ago',
        email: 'sarah.akpola@example.com', phone: '+234 801 234 5678', bvn: '22233344455', idType: 'National ID', idNumber: 'NIN-1234567', goal: 'Wealth Growth', annualIncome: 'Above ₦2M', investmentExperience: 'Intermediate', accountType: 'Individual Account'
      },
      { 
        name: 'Sarah Akpola', id: '12346', status: 'Pending KYC', aum: '$123,000', riskProfile: 'Balanced', riskColor: 'bg-[#313EB2]', riskWidth: '45%', lastActivity: '2 Hours Ago',
        email: 'sarah2@example.com', phone: '+234 802 345 6789', bvn: '11122233344', idType: 'Passport', idNumber: 'A0987654', goal: 'Retirement', annualIncome: '₦500k - ₦2M', investmentExperience: 'Beginner', accountType: 'Joint Account'
      },
      { name: 'Sarah Akpola', id: '12347', status: 'Draft', aum: '...', riskProfile: 'Not profiled', riskColor: '', riskWidth: '0%', lastActivity: 'Just now' },
      { name: 'Sarah Akpola', id: '12348', status: 'Pending KYC', aum: '$123,000', riskProfile: 'Balanced', riskColor: 'bg-[#313EB2]', riskWidth: '45%', lastActivity: '2 Hours Ago' },
      { name: 'Sarah Akpola', id: '12349', status: 'Active', aum: '$123,000', riskProfile: 'Mod. Aggressive', riskColor: 'bg-[#FD4F00]', riskWidth: '65%', lastActivity: '2 Hours Ago' },
      { name: 'Sarah Akpola', id: '12340', status: 'Pending KYC', aum: '$123,000', riskProfile: 'Balanced', riskColor: 'bg-[#313EB2]', riskWidth: '45%', lastActivity: '2 Hours Ago' },
      { name: 'Sarah Akpola', id: '12341', status: 'Active', aum: '$123,000', riskProfile: 'Mod. Aggressive', riskColor: 'bg-[#FD4F00]', riskWidth: '65%', lastActivity: '2 Hours Ago' },
      { name: 'Sarah Akpola', id: '12342', status: 'Active', aum: '$200,000', riskProfile: 'Mod. Aggressive', riskColor: 'bg-[#FD4F00]', riskWidth: '65%', lastActivity: 'Just now' },
      { name: 'Sarah Akpola', id: '12343', status: 'Active', aum: '$123,000', riskProfile: 'Mod. Aggressive', riskColor: 'bg-[#FD4F00]', riskWidth: '65%', lastActivity: '2 Hours Ago' },
      { name: 'Sarah Akpola', id: '12344', status: 'Draft', aum: '...', riskProfile: 'Not profiled', riskColor: '', riskWidth: '0%', lastActivity: 'Just now' },
      { 
        name: 'Tunde Kola', id: '12300', status: 'Active', aum: '$450,000', riskProfile: 'Aggressive', riskColor: 'bg-[#E50303]', riskWidth: '90%', lastActivity: '1 Hour Ago',
        email: 'tunde.kola@example.com', phone: '+234 803 456 7890', bvn: '55566677788', idType: 'Driver\'s License', idNumber: 'DL-998877', goal: 'Wealth Growth', annualIncome: 'Above ₦2M', investmentExperience: 'Expert', accountType: 'Individual Account'
      },
      { name: 'Amina Musa', id: '12347', status: 'Pending KYC', aum: '$89,000', riskProfile: 'Conservative', riskColor: 'bg-[#228B22]', riskWidth: '25%', lastActivity: '3 Hours Ago' },
      { name: 'Kemi Adeyemi', id: '12348', status: 'Active', aum: '$310,000', riskProfile: 'Mod. Aggressive', riskColor: 'bg-[#FD4F00]', riskWidth: '65%', lastActivity: 'Just now' },
      { name: 'Bello Lawal', id: '12349', status: 'Draft', aum: '...', riskProfile: 'Not profiled', riskColor: '', riskWidth: '0%', lastActivity: 'Just now' },
      { name: 'Fatima Aliyu', id: '12350', status: 'Active', aum: '$175,000', riskProfile: 'Balanced', riskColor: 'bg-[#313EB2]', riskWidth: '45%', lastActivity: '5 Hours Ago' },
      { 
        name: 'Sarah Akpola', id: '12346', status: 'Pending KYC', aum: '$123,000', riskProfile: 'Balanced', riskColor: 'bg-[#313EB2]', riskWidth: '45%', lastActivity: '2 Hours Ago',
        email: 'sarah2@example.com', phone: '+234 802 345 6789', bvn: '11122233344', idType: 'Passport', idNumber: 'A0987654', goal: 'Retirement', annualIncome: '₦500k - ₦2M', investmentExperience: 'Beginner', accountType: 'Joint Account'
      },
      { name: 'Sola Akin', id: '12352', status: 'Active', aum: '$260,000', riskProfile: 'Mod. Aggressive', riskColor: 'bg-[#FD4F00]', riskWidth: '65%', lastActivity: '1 Hour Ago' },
      { name: 'Remi Ibrahim', id: '12353', status: 'Active', aum: '$198,000', riskProfile: 'Aggressive', riskColor: 'bg-[#E50303]', riskWidth: '90%', lastActivity: 'Just now' },
      { name: 'Ngozi Obi', id: '12354', status: 'Pending KYC', aum: '$67,000', riskProfile: 'Balanced', riskColor: 'bg-[#313EB2]', riskWidth: '45%', lastActivity: '4 Hours Ago' },
      { name: 'Chidi Nwosu', id: '12355', status: 'Active', aum: '$520,000', riskProfile: 'Aggressive', riskColor: 'bg-[#E50303]', riskWidth: '90%', lastActivity: '2 Hours Ago' },
    ]
  }),

  actions: {
    addClient(clientData) {
      const newClient = {
        id: String(Date.now()).slice(-5),
        name: clientData.name,
        email: clientData.email,
        phone: clientData.phone,
        bvn: clientData.bvn,
        idType: clientData.idType,
        idNumber: clientData.idNumber,
        status: 'Pending KYC',
        aum: '$0', // Better starting value than '...'
        riskProfile: clientData.riskProfile || 'Not profiled',
        riskColor: 'bg-[#313EB2]', // Default color
        riskWidth: '45%', // Default width
        lastActivity: 'Just now',
        goal: clientData.goal,
        annualIncome: clientData.annualIncome,
        investmentExperience: clientData.investmentExperience,
        accountType: clientData.accountType,
      }
      this.clients.unshift(newClient)
      return newClient
    },

    deleteClient(id) {
      this.clients = this.clients.filter(c => c.id !== id)
    },

    updateClient(id, updates) {
      const client = this.clients.find(c => c.id === id)
      if (client) Object.assign(client, updates)
    }
  },

  getters: {
    getClientById: (state) => (id) => {
      return state.clients.find(c => c.id === id)
    }
  }
})