import { Inject, Injectable } from '@nestjs/common';
import { CreateTeamDto } from './dto/create-team.dto';
import { UpdateTeamDto } from './dto/update-team.dto';
import { Repository } from 'typeorm';
import { Team } from './entities/team.entity';

@Injectable()
export class TeamsService {
  constructor(
    @Inject('TEAMS_REPOSITORY')
    private teamRepository: Repository<Team>,
  ) {}

  async create(createTeamDto: CreateTeamDto) {
    const team = new Team();

    Object.assign(team, createTeamDto);

    return this.teamRepository.save(team);
  }

  async findAll() {
    return await this.teamRepository.find();
  }

  async findOne(id: number) {
    return await this.teamRepository.findOne({
      where: {
        id: id,
      },
    });
  }

  async update(id: number, updateTeamDto: UpdateTeamDto) {
    const team = await this.findOne(id);

    Object.assign(team, updateTeamDto);

    return this.teamRepository.save(team);
  }

  async remove(id: number) {
    const team = await this.findOne(id);

    if (!team) {
      return `Team with ID ${id} not found`;
    }

    return this.teamRepository.delete(team);
  }
}
