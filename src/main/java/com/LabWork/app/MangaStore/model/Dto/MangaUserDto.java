package com.LabWork.app.MangaStore.model.Dto;

import com.LabWork.app.MangaStore.model.Default.Manga;
import com.LabWork.app.MangaStore.model.Default.Reader;
import com.LabWork.app.MangaStore.model.Default.User;
import com.LabWork.app.MangaStore.model.Dto.SupportDto.ReaderDto;

import java.nio.charset.StandardCharsets;
import java.util.List;

public class MangaUserDto {
    private Long id;

    private Long creatorId;
    private String mangaName;
    private Integer chapterCount;
    private List<ReaderDto> readers;
    private String image;

    public MangaUserDto() {
    }

    public MangaUserDto(Manga manga, List<User> listUser) {
        this.id = manga.getId();
        this.creatorId = manga.getCreator().getId();
        this.mangaName = manga.getMangaName();
        this.chapterCount = manga.getChapterCount();
        this.image = new String(manga.getImage(), StandardCharsets.UTF_8);
        this.readers = listUser.stream()
                .map(y -> new ReaderDto(y.getReader(), y.getLogin()))
                .toList();
    }

    public Long getId() {
        return id;
    }

    public String getImage() {
        return image;
    }

    public String getMangaName() {
        return mangaName;
    }

    public List<ReaderDto> getReaders() {
        return readers;
    }

    public Integer getChapterCount() {
        return chapterCount;
    }

    public Long getCreatorId() {
        return creatorId;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public void setMangaName(String mangaName) {
        this.mangaName = mangaName;
    }

    public void setReaders(List<ReaderDto> readers) {
        this.readers = readers;
    }

    public void setChapterCount(Integer chapterCount) {
        this.chapterCount = chapterCount;
    }

    public void setCreatorIdString(Long creatorId) {this.creatorId = creatorId;}
}